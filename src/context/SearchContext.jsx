import { createContext, useState } from 'react'

export const SearchContext = createContext(null)

export default function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')

  function filterRecipes(recipes, searchQuery) {
    return recipes?.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, filterRecipes }}
    >
      {children}
    </SearchContext.Provider>
  )
}
