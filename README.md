# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Here’s a step-by-step guide to create a new project using Vite, React, and Tailwind CSS:

1. Create a New Vite Project
   Run the following commands in your terminal:

Copy code

# Create a new Vite project

npm create vite@latest my-project

# Navigate to the project directory

cd my-project 2. Install Tailwind CSS
Install Tailwind CSS and its dependencies:

Copy code
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
This will generate a tailwind.config.js file in your project.

3. Configure Tailwind CSS
   Update the tailwind.config.js file to include your content paths:

Copy code
/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
} 4. Add Tailwind Directives to CSS
In your src folder, create a new CSS file (e.g., src/index.css) and add the following:

Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
Then, import this CSS file in your main.jsx:

Copy code
import './index.css'; 5. Start the Development Server
Run the following command to start your development server:

Copy code
npm run dev
Your project is now set up with Vite, React, and Tailwind CSS! You can start building your application and styling it with Tailwind's utility classes.
