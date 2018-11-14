
export default class Element {
    constructor(domNode, parentNode = undefined) {
        this._node = domNode
        this._parentNode = parentNode
        this.rerender = true
    }

    get node() {
        return this._node
    }

    get style() {
        return this._node.style;
    }

    get classNames() {
        return this._node.classList;
    }

    setAttr(attr, value) {
        this._node.setAttribute(attr, value)
        return this
    }

    // do not use setAttribute for style otherwise style is overwritten
    setStyle(styles) {
        let newStyle = {}
        styles.split(';').map(sub => sub.split(':')).forEach(x => newStyle[x[0]] = x[1]);
        let mergedStyle = Object.assign({}, this._node.style._values, newStyle)
        let newStyleStr = Object.keys(mergedStyle).map(k => `${k}:${mergedStyle[k]}`).join(';')
        console.log(newStyleStr)
        this._node.style = newStyleStr;
        return this
    }

    append(node) {
        this._node.appendChild(node.node)
    }

    //replaceChild
    //insertBefore
}