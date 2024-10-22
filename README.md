# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Used libraries and frameworks

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [PrimeVue](https://www.primefaces.org/primevue/)
- [Axios](https://github.com/axios/axios)

## Architecture

1. **public/**:

   - Contains static files that will not be processed by the build system. For example, `index.html` is the main entry point for the Vue application.

2. **src/**:

   - This is the main source folder where all the application code resides.

   - **assets/**: Contains static assets like images, fonts, or any other media files.

   - **components/**: Contains reusable Vue components, like buttons, headers, footers, and any other UI elements that are used in multiple parts of the application.

   - **router/**: Contains the routing configuration, typically with `Vue Router`, to define paths and associated components.

   - **views/**: Contains the main page components or views, each representing a different page in the application.

   - **App.vue**: The root component of the application, where the overall layout of the app is structured.

   - **main.ts**: The main entry point of the application where Vue is initialized, and the root component (`App.vue`) is mounted. If using TypeScript, this file will have a `.ts` extension.

3. **package.json**:

   - This file contains metadata about the project, such as its name, version, and author. It also lists dependencies and scripts for running and building the project.

4. **vite.config.js**:

   - Configuration file for **Vite**, where you can customize build options, set up aliases, and configure plugins.

5. **tsconfig.json** (if applicable):

   - Configuration file for **TypeScript**, containing settings that control the compilation of TypeScript files.

6. **tailwind.config.js**:

   - This is the configuration file for **Tailwind CSS**, where you can extend or customize the default Tailwind settings, such as colors, spacing, and breakpoints.

7. **.env.example**:

   - Rename the Template: To create your own environment file, rename .env.example to .env

This structure promotes modularity and scalability, making it easier to maintain and expand the application.
