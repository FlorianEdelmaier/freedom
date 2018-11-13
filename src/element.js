
export default class Element {
    constructor(domNode, parentNode = undefined) {
        this._node = domNode
        this._parentNode = parentNode
    }

    get node() {
        return this._node
    }

    setAttr(attr, value) {
        this._node.setAttribute(attr, value)
        return this
    }

    // do not use setAttribute for style otherwise style is overwritten
    setStyle(styles) {
        console.log('existing styles:', this._node.style._values)
        // this._node.style = styles
        let newStyle = Object.assign({}, this._node.style._values, ...styles.split(';'))
        this._node.style = newStyle.join(';')
        //console.log('given styles:', ...styles.split(';'))
        // let style = [...this._node.style, ...styles.split(';')]
        // console.log(style)
        return this
    }

    append(node) {
        this._node.appendChild(node.node)
    }

    //replaceChild
    //insertBefore
}