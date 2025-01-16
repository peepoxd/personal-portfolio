import { Observer } from "../core/interfaces/Observer.js";
import { Subject } from "../core/interfaces/Subject.js";
import { AppState, Content } from "../core/types/State.js"

export class StateManager implements Subject {
    private static instance: StateManager | null = null;
    private observer: Observer[] = [];
    private state: AppState = {
        theme: 'light',
        mainContent: 'About'
    }
    
    public static getInstance(): StateManager {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager();
        }
        return StateManager.instance;
    }

    attach(observer: Observer): void {
        this.observer.push(observer);
    }

    detach(observer: Observer): void {
        this.observer = this.observer.filter(obj => obj != observer);
    }

    notify(): void {
        this.observer.forEach(observer => observer.update(this.state))
    }

    setState(newState: Partial<typeof this.state>) {
        this.state = {...this.state, ...newState};
        this.notify();
    }

    changeTheme(): void {
        const newTheme = this.state.theme === 'light' ? 'dark': 'light';
        this.state.theme = newTheme;
        StateManager.instance.setState({ theme: newTheme });
    }

    chageContent(action: Content){
        this.state.mainContent = action
        StateManager.instance.setState({ mainContent: action })
    }

}