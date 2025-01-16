export class BaseComponent {
    constructor() {
        this.children = [];
    }
    mount(element) {
        element.appendChild(this.render());
    }
    remove() {
        this.element.removeChild(this.element);
    }
    addChild(...component) {
        this.children.push(...component);
    }
    addClassToElement(className) {
        this.element.classList.add(className);
    }
    setStyleConstants() {
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
