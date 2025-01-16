import { StateManager } from '../../patterns/StateManager.js';
export class Navigation {
    update(state) {
        const themeToggle = this.element.querySelector('#theme-toggle');
        if (state.theme === 'dark') {
            this.element.className = 'w-full bg-gray-900 shadow-md';
            themeToggle.checked = true;
            themeToggle.nextElementSibling?.classList.add('bg-indigo-600', 'dark:bg-indigo-400');
            themeToggle.nextElementSibling?.classList.remove('bg-gray-200', 'dark:bg-gray-700');
        }
        else {
            this.element.className = 'w-full dark:bg-red-900 shadow-md';
            themeToggle.checked = false;
            themeToggle.nextElementSibling?.classList.add('bg-gray-200', 'dark:bg-red-700');
            themeToggle.nextElementSibling?.classList.remove('bg-indigo-600', 'dark:bg-indigo-400');
        }
    }
    static getInstance() {
        if (!Navigation.instance) {
            Navigation.instance = new Navigation();
        }
        return Navigation.instance;
    }
    constructor() {
        StateManager.getInstance().attach(this);
        this.element = document.createElement('nav');
        this.initializeNavigation();
    }
    initializeNavigation() {
        this.element.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between py-4">
                    <button id="theme-toggle"class="logo text-xl font-bold text-gray-800 dark:text-white">Mode</button>
                </div>
            </div>
        `;
        this.element.className = 'w-full bg-white dark:bg-red-900 shadow-md';
        const themeButton = this.element.querySelector('#theme-toggle');
        themeButton?.addEventListener('click', () => {
            StateManager.getInstance().changeTheme();
        });
    }
    getElement() {
        return this.element;
    }
}
Navigation.instance = null;
