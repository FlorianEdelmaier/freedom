import { createElement } from '../src/elementFactory'
import Element from '../src/element'
import { expect } from 'chai'
import { create } from 'domain';

describe('Element', () => {
    describe('setAttr', () => {
        it('should set given id to element', () => {
            let div = createElement('div')
                        .setAttr('id', 'div1')
            //console.log(div._node.id);
            expect(div.node.id).to.be.equal('div1')
        })
        it('should set given class to element', () => {
            let div = createElement('div')
                        .setAttr('class', 'box')
            expect(div.node.className).to.be.equal('box')
        })
        it('should set given comma separated classname to element', () => {
            let div = createElement('div')
                        .setAttr('class', 'box, hidden')
            expect(div.node.className).to.be.equal('box, hidden')
        })
        it('should set given type to input element', () => {
            let input = createElement('input')
                            .setAttr('type', 'email')
                            .setAttr('maxlength', 50)
                            .setAttr('placeholder', 'test')
            expect(input.node.type).to.be.equal('email')
            expect(input.node.maxLength).to.be.equal(50)
            expect(input.node.placeholder).to.be.equal('test')
        })
    })
    describe('setStyle', () => {
        it('should set single style property to element', () => {
            let div = createElement('div')
                        .setStyle('margin: 10px')
            expect(div.node.style.margin).to.be.equal('10px')
        })
        it('should set given style properties to element', () => {
            let div = createElement('div')
                        .setStyle('margin: 10px; background-color: red')
            expect(div.node.style.margin).to.be.equal('10px');
            expect(div.node.style['background-color']).to.be.equal('red')
        })
        it('should merge style when called multiple times', () => {
            let div = createElement('div')
                        .setStyle('margin: 10px; height: 10px')
                        .setStyle('margin: 15px; width: 25px')
            //expect(div.node.style.margin).to.be.equal('15px')
            //console.table(div.node.style)
            //expect(div.node.style.height).to.be.equal('10px')
            //expect(div.node.style.width).to.be.equal('25px')
        })
    })
})