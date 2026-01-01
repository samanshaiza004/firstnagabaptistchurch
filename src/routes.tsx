import { createBrowserRouter } from "react-router";
import Layout from './components/Layout';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import EventsPage from './events/events';
import GivePage from './give/Give';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "give",
        element: <GivePage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
