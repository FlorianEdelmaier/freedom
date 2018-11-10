export const createElement = (tag, ns) => {
    const element = ns ? document.createElementNS(ns, tag) : document.createElement(tag)
    return element
}

export const createText = (str = '') => document.createTextNode(str)