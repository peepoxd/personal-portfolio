import { BaseComponent } from '../../core/abstract/BaseComponent.js'
import { Observer } from '../../core/interfaces/Observer.js';
import { StateManager } from '../../patterns/StateManager.js';
import { Navigation } from './Navigation.js';

export class HeaderComponent extends BaseComponent implements Observer {
    private navigation = Navigation.getInstance();
    
    constructor() {
        super();
        StateManager.getInstance().attach(this);
    }

    update(state: any): void {
        if(state.theme) {
            
        }
    }

    render(): HTMLElement {
        return this.navigation.getElement();  
    }
}
