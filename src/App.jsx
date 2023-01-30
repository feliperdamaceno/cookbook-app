// Components
import Navbar from './components/Navbar'
import ThemeSettings from './components/ThemeSettings'

// Pages
import Home from './pages/Home'
import Create from './pages/Create'
import Recipe from './pages/Recipe'
import NotFound from './pages/NotFound'

// Routes
import { Routes, Route } from 'react-router-dom'

// Context
import ThemeProvider from './context/ThemeContext'
import RecipesProvider from './context/RecipesContext'
import SearchProvider from './context/SearchContext'

export default function App() {
  return (
    <ThemeProvider>
      <RecipesProvider>
        <SearchProvider>
          <Navbar />
          <ThemeSettings />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SearchProvider>
      </RecipesProvider>
    </ThemeProvider>
  )
}
