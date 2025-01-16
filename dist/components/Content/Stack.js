import { BaseComponent } from "../../core/abstract/BaseComponent.js";
import { StateManager } from '../../patterns/StateManager.js';
export class StackComponent extends BaseComponent {
    constructor() {
        super();
        StateManager.getInstance().attach(this);
    }
    update(state) {
        setTimeout(() => {
        }, 100);
    }
    render() {
        this.element = document.createElement('section');
        this.element.className = 'p-8 md:p-16 bg-white';
        // Card
        const categories = ['Frontend', 'Backend', 'Database', 'DevOps'];
        const categoriesHTML = categories.map(category => `
            <div class="p-6 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <h3 class="font-bold mb-4">${category}</h3>
                <div class="text-gray-600">
                    Tech stack details...
                </div>
            </div>
        `).join('');
        this.element.innerHTML = `
            <h2 class="text-4xl font-bold mb-8">Stack</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                ${categoriesHTML}
            </div>
        `;
        // menu
        const stackMenu = document.createElement('section');
        stackMenu.className = 'p-8 md:p-16';
        const filters = ['all', 'web', 'mobile', 'ui/ux'];
        let activeFilter = filters[0];
        stackMenu.innerHTML = `
            <div class="flex space-x-4 mb-8">
                ${filters.map((filter) => `
                    <button
                        key="${filter}"
                        data-filter = "${filter}"
                        class="px-4 py-2 rounded-full ${activeFilter === filter
            ? 'bg-black text-white'
            : 'bg-gray-100 hover:bg-gray-200'}">
                        ${filter.toUpperCase()}
                    </button>
                `).join('')}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${[1, 2, 3].map((project) => `
                    <div key="${project}" class="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <div class="aspect-video bg-gray-100"></div>
                        <div class="p-6">
                            <h3 class="font-bold mb-2">Project ${project}</h3>
                            <p class="text-gray-600">Project description goes here...</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        stackMenu.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                if (filter)
                    console.log(filter);
            });
        });
        this.element.appendChild(stackMenu);
        return this.element;
    }
}
