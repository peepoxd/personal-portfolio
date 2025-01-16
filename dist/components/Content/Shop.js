import { BaseComponent } from "../../core/abstract/BaseComponent.js";
import { StateManager } from '../../patterns/StateManager.js';
export class ShopComponent extends BaseComponent {
    constructor() {
        super();
        StateManager.getInstance().attach(this);
    }
    update(state) {
    }
    render() {
        this.element = document.createElement('section');
        ;
        this.element.className = "bg-purple-600 text-white p-8 md:p-16";
        this.element.innerHTML = `
            <h2 className="text-4xl font-bold mb-8">Shop</h2>
            <p className="mb-8">Check out my digital products and resources...</p>
        `;
        return this.element;
    }
}
