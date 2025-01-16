import { ButtonComponent } from '../Header/Button.js';
import { StateManager } from '../../patterns/StateManager.js';
import { LayoutComponent } from './Layout.js';
export class Navigation {
    static getInstance() {
        if (!Navigation.instance) {
            Navigation.instance = new Navigation();
        }
        return Navigation.instance;
    }
    constructor() {
        this.activeItem = 'about';
        this.layoutComponent = new LayoutComponent;
        this.button = new ButtonComponent;
        this.initializeNavigation();
    }
    getItemClass(action) {
        const baseClass = `
            
            `;
        if (action == 'about')
            return `${baseClass}  
                    ${this.activeItem === action
                ? ''
                : ''} `;
        if (action == 'stack')
            return `${baseClass} transform transition-all duration-500 hover:font-bold hover:scale-105 hover:text-red-700 text-black
                        ${this.activeItem === action
                ? 'scale-105 text-red-700'
                : ''} `;
        if (action == 'shop')
            return `${baseClass} transform transition-all duration-200 hover:translate-y-4 hover:scale-105 text-white bg-ct-purple
                    ${this.activeItem === action
                ? 'translate-y-4 scale-105'
                : ''} `;
    }
    initializeNavigation() {
        // this.element = document.getElementById('app');
        this.element = document.createElement('div');
        this.layoutComponent.mount(this.element);
        this.element?.addEventListener('click', (e) => {
            const action = e.target;
            const act = action?.dataset.action;
            if (act) {
                this.activeItem = act;
                this.updateActiveState();
                action.classList.add();
                StateManager.getInstance().chageContent(act);
            }
        });
    }
    updateActiveState() {
        // this.element.querySelectorAll('span').forEach(span => {
        //     const action = span.dataset.action;
        //     span.className = this.getItemClass(action || '');
        // });
        // this.element.querySelectorAll('[data-content]').forEach(container => {
        //     const contentType = (container as HTMLElement).dataset.content;
        //     if (contentType === this.activeItem) {
        //         container.classList.remove('hidden');
        //         container.innerHTML = '';
        //         this.layoutComponent.mount(container as HTMLElement);
        //     } else {
        //         container.classList.add('duration-500','hidden');
        //     }
        // });
    }
    getElement() {
        return this.element;
    }
}
Navigation.instance = null;
