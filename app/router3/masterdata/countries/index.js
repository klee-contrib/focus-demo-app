console.log('COUNTRIES PAGE IN MASTERDATA');
module.exports = {
  path: '/admin/masterdata/countries',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../views/masterdata/country'))
    })
  }
}
