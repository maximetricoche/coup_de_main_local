// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import NotFound from "./components/notFound/NotFound";
import DirectoryDetails from "./pages/directoryDetails/DirectoryDetails";
import DirectoryPage from "./pages/directoryPage/DirectoryPage";
import HomePage from "./pages/homePage/HomePage";
import ServicesDetails from "./pages/servicesDetails/ServicesDetails";
import ServicesPage from "./pages/servicesPage/ServicesPage";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const response = await fetch("http://localhost:3310/api/");
          const data = await response.json();

          return {
            directories: data.directory || [],
            services: data.services || [],
          };
        },
      },
      {
        path: "/directory",
        element: <DirectoryPage />,
        loader: () => fetch("http://localhost:3310/api/directory"),
      },
      {
        path: "/services",
        element: <ServicesPage />,
        loader: () => fetch("http://localhost:3310/api/services"),
      },
      {
        path: "/directory/:id",
        element: <DirectoryDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3310/api/directory/${params.id}`),
      },
      {
        path: "/services/:id",
        element: <ServicesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3310/api/services/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
