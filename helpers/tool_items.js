module.exports = function(options) {
    return options.fn(this, {
        blockParams: [
            require('../data/tool-items.json'),
        ]
    })
}
