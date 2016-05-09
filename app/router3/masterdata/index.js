console.log('MASTERDATA PAGE');
module.exports = {
    path: '/:reference',

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('../masterdata/countries'),
                require('../masterdata/movietype'),
                require('../masterdata/gender'),
            ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../views/masterdata'))
        })
    }
}
