const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Brad' }
    user['lastName'] = 'Smith'
    return user
  },
  // fetchUser: () => {
  //   axios.get('http://jsonplaceholder.typicode.com/users/1')
  //     .then(res, (res) => {
  //       console.log('res: ', res.data)
  //     })
  //     .catch(err => {
  //       console.log('error: ', err)
  //     })
  // }
}

module.exports = functions;
