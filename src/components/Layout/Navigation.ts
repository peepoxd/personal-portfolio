
import { ButtonComponent } from '../Header/Button.js';
import { StateManager } from '../../patterns/StateManager.js';
import { Content } from '../../core/types/State.js';
import { LayoutComponent } from './Layout.js';

export class Navigation {
    private static instance: Navigation | null = null;
    private activeItem: string = 'about';
    private layoutComponent = new LayoutComponent;
    private button = new ButtonComponent;
    private element: HTMLElement;

    public static getInstance(): Navigation {
        if (!Navigation.instance){
            Navigation.instance = new Navigation();
        }
        return Navigation.instance; 
    }

    private constructor() {    
        this.initializeNavigation();
    }

    private getItemClass(action: string): string {
        const baseClass = `
            
            `;
        if(action == 'about')
            return `${baseClass}  
                    ${this.activeItem === action 
                        ? ''
                        : ''} `; 
        if(action == 'stack')
            return `${baseClass} transform transition-all duration-500 hover:font-bold hover:scale-105 hover:text-red-700 text-black
                        ${this.activeItem === action 
                        ? 'scale-105 text-red-700'
                        : ''} `;
        if(action == 'shop')
            return `${baseClass} transform transition-all duration-200 hover:translate-y-4 hover:scale-105 text-white bg-ct-purple
                    ${this.activeItem === action 
                        ? 'translate-y-4 scale-105'
                        : ''} `;
    }

    private initializeNavigation(): void {

        // this.element = document.getElementById('app');
        this.element = document.createElement('div');
        this.layoutComponent.mount(this.element);

        this.element?.addEventListener('click', (e) => {
            const action = e.target as HTMLElement;
            const act = action?.dataset.action as Content;
            if(act) {
                this.activeItem = act;
                this.updateActiveState();
                action.classList.add();
                StateManager.getInstance().chageContent(act);
            }
        });
    }

    private updateActiveState(): void {
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

    public getElement(): HTMLElement {
        return this.element;
    }
}