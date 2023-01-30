// Components
import Card from '../components/Card'

// Hooks
import { useContext } from 'react'

// Context
import { RecipesContext } from '../context/RecipesContext'
import { SearchContext } from '../context/SearchContext'

export default function Home() {
  const { recipes } = useContext(RecipesContext)
  const { searchQuery, filterRecipes } = useContext(SearchContext)

  return (
    <main className="container mx-auto px-4 pt-2 mb-4 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
      {filterRecipes(recipes, searchQuery)?.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </main>
  )
}
