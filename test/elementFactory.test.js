import { createElement, createText } from '../src/elementFactory.mjs'
import { expect } from 'chai'

describe('load fake dom', () => {
    beforeEach(() => {
    })
    it('should have current document reference', () => {
        expect(document).to.not.be.null;
    })
    describe('createText', () => {
        it('should represent given string as text node', () => {
            const tn = createText('hello world')
            expect(tn.textContent).to.equal('hello world')
        })
    })
    describe('createElement', () => {
        it('should create given element as DOM node', () => {
            const divn = createElement('div');
            expect(divn).to.be.an.instanceOf(HTMLDivElement)
        })
    })
})