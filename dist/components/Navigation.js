export class Navigation {
    static getInstance() {
        if (!Navigation.instance) {
            Navigation.instance = new Navigation();
        }
        return Navigation.instance;
    }
    constructor() {
        this.element = document.createElement('nav');
        this.initializeNavigation();
    }
    initializeNavigation() {
        this.element.innerHTML = `
            <div class="nav-content bg-gray-800">
                <div class="logo">My Portfolio</div>
                <button class="menu-toggle">'☰'</button>
                <ul class="nav-links ">
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#projects" >Projects</a></li>
                    <li><a href="#about" >About</a></li>
                    <li><a href="#contact" >Contact</a></li>
                </ul>
            </div>
        `;
    }
    getElement() {
        return this.element;
    }
}
Navigation.instance = null;
