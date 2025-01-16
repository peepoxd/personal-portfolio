import { BaseComponent } from '../../core/abstract/BaseComponent.js';
import { StateManager } from '../../patterns/StateManager.js';
import { Navigation } from './Navigation.js';
export class HeaderComponent extends BaseComponent {
    constructor() {
        super();
        this.navigation = Navigation.getInstance();
        StateManager.getInstance().attach(this);
    }
    update(state) {
        if (state.theme) {
            console.log(state.theme);
        }
    }
    render() {
        this.element = document.createElement('header');
        this.element.className = 'main-header';
        this.element.appendChild(this.navigation.getElement());
        return this.element;
    }
}
