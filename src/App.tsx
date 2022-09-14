import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ExampleUseEffectPrimitives } from "./ExampleUseEffectPrimitives";
import { ExampleUseMemo } from "./ExampleUseMemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "examples/1",
        element: <ExampleUseMemo />,
      },
      {
        path: "examples/2",
        element: <ExampleUseEffectPrimitives />,
      },
    ],
  },
]);

const App = () => (
  <>
    <h1>Performance Workshop</h1>
    <nav>
      <ul>
        <li>
          <a href={"/examples/1"}>useMemo to avoid re-rendering</a>
        </li>
        <li>
          <a href={"/examples/2"}>
            Prefer primitives in useEffect dependencies
          </a>
        </li>
      </ul>
    </nav>

    <RouterProvider router={router} />
  </>
);

export default App;
