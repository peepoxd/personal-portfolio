export class StateManager {
    constructor() {
        this.observer = [];
        this.state = {
            theme: 'light',
            mainContent: 'About'
        };
    }
    static getInstance() {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager();
        }
        return StateManager.instance;
    }
    attach(observer) {
        this.observer.push(observer);
    }
    detach(observer) {
        this.observer = this.observer.filter(obj => obj != observer);
    }
    notify() {
        this.observer.forEach(observer => observer.update(this.state));
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }
    changeTheme() {
        const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
        this.state.theme = newTheme;
        StateManager.instance.setState({ theme: newTheme });
    }
    chageContent(action) {
        this.state.mainContent = action;
        StateManager.instance.setState({ mainContent: action });
    }
}
StateManager.instance = null;
