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
        }
    }
    render() {
        return this.navigation.getElement();
    }
}
