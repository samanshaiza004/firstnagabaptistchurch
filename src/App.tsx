import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Home from './home/Home'
import About from './components/About'
import Services from './components/Services'
import Ministries from './components/Ministries'
import Contact from './components/Contact'

type PageType = 'home' | 'about' | 'services' | 'ministries' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'services':
        return <Services />
      case 'ministries':
        return <Ministries />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  // Handle navigation clicks
  const handleNavigation = (pageId: string) => {
    const pageMap: { [key: string]: PageType } = {
      'home': 'home',
      'about': 'about',
      'services': 'services',
      'ministries': 'ministries',
      'contact': 'contact'
    }
    setCurrentPage(pageMap[pageId] || 'home')
  }

  // Override global click handler for navigation
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')?.substring(1)
        if (href) {
          handleNavigation(href)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <Layout>
      {renderPage()}
    </Layout>
  )
}

export default App
