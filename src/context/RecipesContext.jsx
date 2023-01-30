import { createContext, useReducer, useEffect } from 'react'
import useStorage from '../hooks/useStorage'

export const RecipesContext = createContext(null)

export const RECIPES_ACTIONS = {
  ADD: 'ADD',
  DELETE: 'DELETE'
}

function reducer(state, action) {
  switch (action.type) {
    case RECIPES_ACTIONS.ADD:
      return [...state, action.payload.recipe]
    case RECIPES_ACTIONS.DELETE:
      return state.filter((recipe) => recipe.id !== action.payload.id)
    default:
      return state
  }
}

export default function RecipesProvider({ children }) {
  const { storage, updateStorage } = useStorage('cookbook_recipes', [])
  const [recipes, dispatch] = useReducer(reducer, storage)

  useEffect(() => {
    updateStorage(recipes)
  }, [recipes])

  return (
    <RecipesContext.Provider value={{ recipes, dispatch }}>
      {children}
    </RecipesContext.Provider>
  )
}
