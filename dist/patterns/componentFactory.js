import { HeaderComponent } from "../components/Layout/Header.js";
import { LayoutComponent } from "../components/Layout/Layout.js";
export class ComponentFactory {
    createComponent(type) {
        switch (type) {
            case 'header':
                return new HeaderComponent();
            case 'layout':
                return new LayoutComponent();
            default:
                throw new Error(`Component type ${type} not found`);
        }
    }
}
