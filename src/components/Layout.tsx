import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "First Naga Baptist Church | DFW, Texas",
    description:
      "First Naga Baptist Church in DFW, Texas—a community for worship, fellowship, discipleship, and outreach.",
  },
  "/about": {
    title: "About | First Naga Baptist Church",
    description:
      "Learn the history, mission, objectives, and founding story of First Naga Baptist Church.",
  },
  "/events": {
    title: "Events | First Naga Baptist Church",
    description:
      "See worship services, prayer gatherings, ministry events, and special events at First Naga Baptist Church.",
  },
  "/give": {
    title: "Give | First Naga Baptist Church",
    description:
      "Support the ministries and community outreach of First Naga Baptist Church.",
  },
  "/contact": {
    title: "Contact | First Naga Baptist Church",
    description:
      "Contact First Naga Baptist Church, send a prayer request, or find our Sunday worship location in Fort Worth.",
  },
};

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const metadata = pageMetadata[pathname] ?? {
      title: "Page Not Found | First Naga Baptist Church",
      description: "First Naga Baptist Church in DFW, Texas.",
    };
    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
  }, [pathname]);

  return null;
}

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-background px-4 py-2 text-foreground shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
