<template>
    <el-container id="container">
        <el-aside width="250px">
            <el-container id="top">
                <img
                    src="@/assets/logo.png"
                    alt=""
                    style="
                        width: 25px;
                        height: 25px;
                        margin: auto;
                        margin-right: 0;
                    "
                />
                <div
                    style="
                        margin: auto;
                        margin-left: 10px;
                        color: #ffffff;
                        font-size: 17px;
                    "
                >
                    电商管理后台
                </div>
            </el-container>
            <el-menu
                :default-active="$route.path"
                style="height: 100%"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="selectItem"
            >
                <el-submenu index="1">
                    <template #title>
                        <i class="el-icon-s-order"></i>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="/home/order/0">普通订单</el-menu-item>
                    <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template #title>
                        <i class="el-icon-s-shop"></i>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="/home/goods/0">普通商品</el-menu-item>
                    <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
                    <el-menu-item index="/home/goods/2">今日推荐</el-menu-item>
                    <el-menu-item index="/home/category">商品分类</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template #title>
                        <i class="el-icon-s-custom"></i>
                        <span>店长管理</span>
                    </template>
                    <el-menu-item index="/home/ownerList"
                        >店长列表</el-menu-item
                    >
                    <el-menu-item index="/home/ownerReq"
                        >店长申请审批列表</el-menu-item
                    >
                    <el-menu-item index="/home/ownerOrder"
                        >店长订单</el-menu-item
                    >
                </el-submenu>
                <el-submenu index="4">
                    <template #title>
                        <i class="el-icon-s-ticket"></i>
                        <span>财务管理</span>
                    </template>
                    <el-menu-item index="/home/tradeInfo"
                        >交易明细</el-menu-item
                    >
                    <el-menu-item index="/home/tradeList"
                        >财务对账单</el-menu-item
                    >
                </el-submenu>
                <el-submenu index="5">
                    <template #title>
                        <i class="el-icon-s-tools"></i>
                        <span>基础管理</span>
                    </template>
                    <el-menu-item index="/home/data">数据统计</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main style="padding: 0">
            <el-header style="margin: 0; padding: 0" height="80px">
                <el-container
                    style="
                        background-color: blanchedalmond;
                        margin: 0;
                        padding: 0;
                        height: 80px;
                    "
                >
                    <div style="margin: auto; margin-left: 100px">
                        <h1>欢迎您登录后台管理系统，管理员用户！</h1>
                    </div>
                    <div>
                        <el-button type="primary" @click="logout"
                            >注销</el-button
                        >
                    </div>
                </el-container>
            </el-header>
            <router-view />
        </el-main>
    </el-container>
</template>

<script>
import store from '@/tools/Storage'
export default {
    name: 'Home',
    data() {
        return {
            message: 'home',
        }
    },
    methods: {
        logout() {
            store.commit('clearUserInfo')
            this.$router.push({ name: 'login' })
        },

        selectItem(key, keyPath) {
            this.$router.push({
                path: key,
            })
        },
    },
}
</script>

<style scoped>
#container {
    height: 100%;
    width: 100%;
    position: absolute;
}

#top {
    background-color: #545c64;
    margin-right: 1px;
    text-align: center;
    height: 60px;
}
</style>
