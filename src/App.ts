import { ComponentFactory } from './patterns/ComponentFactory.js';

export class App {
    private root: HTMLElement;
    private componentFactory: ComponentFactory;

    constructor(rootElement: HTMLElement) {
        this.root = rootElement;
        this.componentFactory = new ComponentFactory();
        this.initializeApp();
    }

    private initializeApp(): void {
        this.componentFactory.createComponent('header').mount(this.root);
        // this.componentFactory.createComponent('layout').mount(this.root);
    }    
}