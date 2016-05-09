console.log('GENDER PAGE IN MASTERDATA');
module.exports = {
  path: '/admin/masterdata/gender',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../views/masterdata'))
    })
  }
}
