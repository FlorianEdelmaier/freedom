const createElement = (tag, ns) => {
    const element = ns ? document.createElementNS(ns, tag) : document.createElement(tag)
    return element
}

const createText = (str = '') => document.createTextNode(str)

module.exports = {
    createElement,
    createText
}