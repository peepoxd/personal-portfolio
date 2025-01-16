import { BaseComponent } from '../../core/abstract/BaseComponent.js';
import { Observer } from '../../core/interfaces/Observer.js';
import { StateManager } from '../../patterns/StateManager.js';
import { StackComponent } from '../Content/Stack.js';
import { AboutComponent } from '../Content/About.js';
import { ShopComponent } from '../Content/Shop.js';

export class LayoutComponent extends BaseComponent implements Observer {
    private aboutComponent = new AboutComponent();
    private stackComponent = new StackComponent();
    private shopComponent = new ShopComponent();

    constructor() {
        super();
        StateManager.getInstance().attach(this);
             
    }
    
    update(state: any): void {
        this.element.removeChild(this.element.firstChild);
        if (state.mainContent == 'about') {
            this.aboutComponent.mount(this.element);
        }
        if (state.mainContent == 'stack') {
            this.stackComponent.mount(this.element);
            
        }

        this.children.forEach(child => {
           console.log();
        });

    }

    render(): HTMLElement {
        this.element = document.createElement('div');
        this.element.className = 'min-h-screen bg-gradient-to-br from-gray-50 to-gray-200';

        this.addChild(this.aboutComponent, this.stackComponent, this.shopComponent);
        this.children.map(child => {
            child.mount(this.element);    
        });
             
        return this.element;
    }
}