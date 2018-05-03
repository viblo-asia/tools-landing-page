module.exports = function(options) {
    return options.fn(this, {
        blockParams: [
            require('../data/extension-icons.json'),
        ]
    })
}
