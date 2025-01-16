import { App } from "./App.js";

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('app');
    if(!rootElement) {
        throw new Error("Root element not found");       
    }
    new App(rootElement);
});
