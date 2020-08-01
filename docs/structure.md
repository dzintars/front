# Code Structure

Redux should be structured in features. The feature most commonly is related to some UI container. For example there could be a feature called `customer-orders` or `main-launcher`, etc.

Components should be structured in 4 directories:

- Elements
- Components
- Views
- Containers

**Elements** holds vanilla reusable components, like buttons, selectors, tooltips and kind. Later Elements directory will be extracted as stand alone design system with it's own Storybook and NPM packages.

**Components** are larger pieces of UI elements, like sidebars, menus, panels, modals, etc. Components can import and use Elements. Components has no any idea about the store or where is data coming from. Components later could be extracted into stand-alone component library with it's own Storybook, etc.

**Views** composes Components into complete view and are responsible for the general layout. Where the main menu sits, where the every menu, panel, sidebar, footer are located etc. Views are rendered by the router. Views can be extended by Containers to implement some data handling logic.

**Containers** extends Components and Views. Containers handles all the data logic and are directly connected to the store. Containers does map state to props, maps events to actions, etc.

## Reasoning

Overall this structure is implemented to enable scalability and simpler navigation so that developer can work in context of single feature or component without touching other pieces of the system. It also strives towards complete decoupling of different part of the system. If store is decoupled from UI, then in theory we could replace UI layer to whatever will be trendy after 3-5-10 years. Or we could replace Redux without rebuilding UI component layer.
