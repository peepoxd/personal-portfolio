export type Theme = 'light' | 'dark';
export type Content = 'About' | 'Stack' | 'Shop';

export interface AppState {
    theme: Theme;
    mainContent: Content;
}