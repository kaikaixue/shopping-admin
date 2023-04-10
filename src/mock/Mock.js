import mockjs, { mock } from 'mockjs'
const Mock = {
    getOrder (type) {
        let array = []
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'name': type == 0 ? '普通商品' : '秒杀商品' + i,
                'price': mockjs.Random.integer(20, 500) + '元',
                'buyer': mockjs.Random.cname(),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'role': mockjs.Random.boolean(),
                'state': mockjs.Random.boolean(),
                'payType': mockjs.Random.boolean(),
                'source': mockjs.Random.url(),
                'phone': mockjs.mock(/\d{11}/),
            }))
        }
        return array
    },

    // 模拟获取商品数据
    getGoods (type) {
        let array = []
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'name': (type == 0 ? '普通商品' : type == 1 ? '秒杀商品' : '今日推荐') + i,
                'img': mockjs.Random.dataImage('60x100', '商品示例图'),
                'price': mockjs.Random.integer(20, 500) + '元',
                'sellCount': mockjs.Random.integer(10, 100),
                'count': mockjs.Random.integer(10, 100),
                'back': mockjs.Random.integer(10, 100),
                'bookPrice': mockjs.Random.integer(0, 5000) + '元',
                'owner': mockjs.Random.cname(),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'state': mockjs.Random.boolean()
            }))
        }
        return array
    },

    getChartsData() {
        let array = []
        for (let i = 0; i < 6; i++) {
            array.push(mockjs.Random.integer(0, 100))
        }
        return array
    },

    getTradeData() {
        return mockjs.mock({
            "allTra": mockjs.Random.integer(10000, 50000),
            "speTra": mockjs.Random.integer(0, 5000),
            "norTra": mockjs.Random.integer(0, 5000),
            "userCount": mockjs.Random.integer(0, 1000),
            "managerCount": mockjs.Random.integer(0, 100),
            "time": mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss")
        })
    }
}

export default Mock