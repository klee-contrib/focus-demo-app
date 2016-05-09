console.log('MOVIETYPE PAGE IN MASTERDATA');
module.exports = {
  path: '/admin/masterdata/movietype',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../views/masterdata'))
    })
  }
}
