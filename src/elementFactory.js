import Element from './element';

const createElement = (tag, ns) => {
    const element = ns ? document.createElementNS(ns, tag) : document.createElement(tag)
    return new Element(element)
}

const createText = (str = '') => new Element(document.createTextNode(str))

module.exports = {
    createElement,
    createText
}