
const walk = (rootNode, fn, includingRoot = true, guard = () => true) => {
    if(includingRoot && guard) fn(rootNode)
    let node = rootNode.firstChild
    while(node) {
        walk(node, fn)
        node = node.nextSibling
    }
}

export default walk