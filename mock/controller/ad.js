const data = [
  {
    title: 'hello-world',
    url: 'https://www.baidu.com',
  },
]
module.exports = [
  {
    url: '/ad/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
