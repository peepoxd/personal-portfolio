import { BaseComponent } from "../../core/abstract/BaseComponent.js";
import { StateManager } from "../../patterns/StateManager.js";
export class AboutComponent extends BaseComponent {
    constructor() {
        super();
        StateManager.getInstance().attach(this);
    }
    update(state) {
        setTimeout(() => {
        }, 100);
    }
    render() {
        this.element = document.createElement('header');
        this.element.className = 'relative p-8 md:p-16';
        this.element.innerHTML = `
            <div class="about">
                <span classN="">About</span>
            </div>
            <div class="mt-16   max-w-4xl">
                <h1 class="text-6xl font-bold mb-4">Supawich</h1>
                <h2 class="text-2xl text-gray-600 mb-8">Full Stack Developer & UI/UX Enthusiast</h2>
                <p class="text-gray-700 mb-8">
                    Passionate about creating seamless digital experiences through
                    clean code and intuitive design. With 500 years of experience in web
                    development, I specialize in building scalable applications that
                    make a difference.
                </p>
            </div>
        `;
        return this.element;
    }
}
