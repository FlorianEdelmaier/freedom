import { createElement, createText } from '../src/elementFactory'
import { expect } from 'chai'

describe('elementFactory', () => {
    it('should have current document reference', () => {
        expect(document).to.not.be.null
    })
    describe('createText', () => {
        it('should represent given string as text node', () => {
            const tn = createText('hello world')
            expect(tn.node.textContent).to.equal('hello world')
        })
    })
    describe('createElement', () => {
        it('should create given div element as DOM node', () => {
            const divn = createElement('div')
            expect(divn.node).to.be.an.instanceOf(HTMLDivElement)
        })
        it('should create given input element as DOM node', () => {
            const inputn = createElement('input')
            expect(inputn.node).to.be.an.instanceOf(HTMLInputElement)
        })
        it('should create given form element as DOM node', () => {
            const formn = createElement('form')
            expect(formn.node).to.be.an.instanceOf(HTMLFormElement)
        })
    })
})