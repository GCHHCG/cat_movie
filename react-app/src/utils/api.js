// API 应用程序接口  Application Interface
// fetch axios fastmock
// 取数据  api  负责这件事的
// 前端 url  get  /todos 后端
// 前端和后端的数据交换格式  json 
const todos = [
    {
        id:1,
        type: '体育赛事',
        text:'2020中国平安中国足球协会超级联赛(海口赛区)',
        url :'./src/assets/images/m1.jpg',
        dec:'2022.6.25 19:30 周六',
        pos:'海口 五源河体育场',
        price:'100元',
    },
    {
        id:2,
        type: '体育赛事',
        text:'[9.9元超值特惠] 2021马语汇亲子马术体验活动',
        url :'./src/assets/images/m2.jpg',
        dec:'2021.1.25 - 2022.12.31',
        pos:'北京  马语汇亲子体验活动-好奇马术',
        price:'9.9元',
    },
    {
        id:3,
        type: '体育赛事',
        text:'[5折超值特惠]马语汇亲子马术体验过动',
        url :'./src/assets/images/m3.jpg',
        dec:'2021.1.25 - 2022.12.31',
        pos:'北京  马语汇亲子体验活动-好骑士马',
        price:'338元',
    } ,{
        id:4,
        type: '电竞赛事',
        text:'无锡.他山杯.王者比赛(决赛观赛券)',
        url :'./src/assets/images/m4.jpg',
        dec:'2022.7.23 - 2022.7.24',
        pos:'无锡 无锡他杯-立直麻将比赛',
        price:'338元',
    },
    {
        id:5,
        type: '电竞赛事',
        text:'2022海城万达韵嘉华杯.澄州英雄联盟争霸赛',
        url :'./src/assets/images/m5.jpg',
        dec:'2022.6.25 19:30 周六',
        pos:'海城市 国际搏击争霸赛-西柳义乌商贸城',
        price:'80-260元',
    }
]
// delay 函数
const delay = time => new Promise(resolve => setTimeout(resolve,time));
const withDelay = fn => async (...args) => {
    await delay(1000)
    return fn(...args)
}
withDelay(function () {} )(1,2,3)
export const fetchTodos = withDelay(params => {
    // console.log(params)
    let { query, tab,cityName} = params;
    // console.log(query, tab);
    let result = todos;
    // result 存放获取赛事信息的数据
    if(tab) {
            switch(tab) {
                case "全部":
                    result = result.filter(todo => todo.pos.includes(cityName))
                    // 数组filter方法，过滤，筛选得到符合条件的信息
                    break;
                case "电竞赛事":
                    result = result.filter(todo => todo.type == '电竞赛事' && todo.pos.includes(cityName))
                    break;
                case "体育赛事":
                    result = result.filter(todo => todo.type == '体育赛事' && todo.pos.includes(cityName))

                default:
                    break;
            }
    }
    if(query) {
        result = result.filter(todo => todo.text.includes(query)||todo.pos.includes(query))
    }
    // Promise 类 resolve 静态方法
    // Promise.all 返回一个fullfiled 的 promise 实例
    return Promise.resolve({
        tab, result
    })
})