module.exports = function(options) {
    return options.fn(this, {
        blockParams: [
            require('../data/atom-plugin-icons.json'),
        ]
    })
}
