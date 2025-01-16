import { Component } from "../interfaces/Component.js";
import { STYLECLASS } from "../types/Styles.js";

export abstract class BaseComponent implements Component {
    protected element: HTMLElement;
    protected styleclass : STYLECLASS;
    protected children: Component[] = [];

    abstract render(): HTMLElement;

    mount(element: HTMLElement): void {
        element.appendChild(this.render());
    }

    remove(): void {
        this.element.removeChild(this.element);
    }

    addChild(...component: Component[]): void {
        this.children.push(...component);
    }

    addClassToElement(className: string): void {
        this.element.classList.add(className);
    }

    setStyleConstants() : void  {
        this.styleclass = {
            BASE: {
                CONTAINER: 'layout-container',
                WRAPPER: 'w-full h-full'
            },
            LAYOUT: {
                FLEX: 'flex flex-auto',
                SPACING: 'p-8 gap-4',
                ALIGNMENT: 'items-center justify-between'
            },
            THEME: {
                BACKGROUND: 'bg-ev-8',
                TEXT: 'text-ev-9'
            },
            BORDER: {
                STYLE: 'border-solid',
                WIDTH: 'border-2',
                COLOR: 'border-ev-3',
                RADIUS: 'rounded-md'
            },
            STATES: {
                HOVER: 'hover:bg-ev-2 hover:border-ev-1',
                ACTIVE: 'active:bg-ev-3',
                FOCUS: 'focus:ring-2 focus:ring-ev-5w'
            },
            RESPONSIVE: {
                SM: 'sm:p-4 sm:text-sm',
                MD: 'md:p-6 md:text-base',
                LG: 'lg:p-8 lg:text-lg'
            },
            ANIMATION: {
                TRANSITION: 'transition-all duration-300 ease-in-out',
                TRANSFORM: 'transform hover:scale-105'
            },
            UTILITIES: {
                SHADOW: 'shadow-md',
                OVERFLOW: 'overflow-hidden',
                CURSOR: 'cursor-pointer'
            }
        };
    }

}