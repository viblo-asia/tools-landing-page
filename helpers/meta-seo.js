module.exports = function(options) {
    return options.fn(this, {
        blockParams: [
            require('../data/meta-seo.json'),
        ]
    })
}
