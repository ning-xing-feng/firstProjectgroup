// SQL语句映射文件，以供api逻辑调用
var sqlMap = {
  // 用户
  user: {
    onlyUser: 'select * from user where phone = ?',
    add: 'insert into user(phone,nickname,password) values (?,?,?)',
    remove: '',
    update: '',
  }
}
module.exports = sqlMap;
