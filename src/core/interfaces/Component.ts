export interface Component {
    render(): HTMLElement;
    mount(element: HTMLElement): void;
    addChild(element): void;
    setStyleConstants(): void
    addClassToElement(className: string): void
    className?: string;

}

