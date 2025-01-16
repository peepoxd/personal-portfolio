export type STYLECLASS = {
    // Layout & Container
    BASE: {
        CONTAINER: string,
        WRAPPER: string,
    },
    
    // Flexbox & Spacing
    LAYOUT: {
        FLEX: string,
        SPACING: string,
        ALIGNMENT: string,
    },
    
    // Background & Colors
    THEME: {
        BACKGROUND: string,
        TEXT: string,
    },
    
    // Borders & Decoration
    BORDER: {
        STYLE: string,
        WIDTH: string,
        COLOR: string,
        RADIUS: string,
    },
    
    // Interactive States
    STATES: {
        HOVER: string,
        ACTIVE: string,
        FOCUS: string,
    },

    // Responsive Design
    RESPONSIVE: {
        SM: string,
        MD: string,
        LG: string,
    },

    // Transitions & Animations
    ANIMATION: {
        TRANSITION: string,
        TRANSFORM: string,
    },

    // Utilities
    UTILITIES: {
        SHADOW: string,
        OVERFLOW: string,
        CURSOR: string
    }
};