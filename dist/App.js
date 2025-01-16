import { ComponentFactory } from './patterns/ComponentFactory.js';
export class App {
    constructor(rootElement) {
        this.root = rootElement;
        this.componentFactory = new ComponentFactory();
        this.initializeApp();
    }
    initializeApp() {
        this.componentFactory.createComponent('header').mount(this.root);
        // this.componentFactory.createComponent('layout').mount(this.root);
    }
}
