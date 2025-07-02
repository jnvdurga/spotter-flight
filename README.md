# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


##  Enabling Real-Time Flight Data

By default, the app uses dummy flight data to ensure smoother development and avoid API rate limits or CAPTCHA blocks.

To enable **real-time flight results from the Sky-Scrapper API**, follow these steps:

1. Open the file where the `USE_DUMMY` flag is set (in `SearchContext.jsx`).
   const useDummyData = true;
   once it will false and if the authorized api key will call it will show the real time data 
