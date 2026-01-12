import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
