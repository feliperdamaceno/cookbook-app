// Components
import IngredientList from '../components/IngredientList'
import MethodList from '../components/MethodList'
import Button from '../components/Button'

// Routes
import { useNavigate } from 'react-router-dom'

// Hooks
import { useState, useContext } from 'react'

// Context
import { RecipesContext, RECIPES_ACTIONS } from '../context/RecipesContext'

export default function Create() {
  const { dispatch } = useContext(RecipesContext)
  const [recipe, setRecipe] = useState(initialRecipe)
  const [ingredient, setIngredient] = useState('')
  const [method, setMethod] = useState('')
  const navigate = useNavigate()

  function initialRecipe() {
    return {
      id: '',
      name: '',
      prepTime: '',
      cookTime: '',
      ingredients: [],
      method: []
    }
  }

  function sanitizeRecipe() {
    const prepTime = parseInt(recipe.prepTime)
    const cookTime = parseInt(recipe.cookTime)

    return {
      ...recipe,
      id: Date.now(),
      prepTime: cookTime >= 0 ? cookTime : 0,
      cookTime: prepTime >= 0 ? prepTime : 0
    }
  }

  function addIngredient(event) {
    event.preventDefault()
    if (ingredient.length === 0) return
    setRecipe((previous) => ({
      ...previous,
      ingredients: [
        ...previous.ingredients,
        { id: Date.now(), content: ingredient }
      ]
    }))
    setIngredient('')
  }

  function addMethodStep(event) {
    event.preventDefault()
    if (method.length === 0) return
    setRecipe((previous) => ({
      ...previous,
      method: [...previous.method, { id: Date.now(), content: method }]
    }))
    setMethod('')
  }

  function handleChange(event) {
    const { name, value } = event.target
    if (name === 'ingredient') return setIngredient(value)
    if (name === 'method') return setMethod(value)
    setRecipe((previous) => ({ ...previous, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch({
      type: RECIPES_ACTIONS.ADD,
      payload: { recipe: sanitizeRecipe() }
    })
    setRecipe(initialRecipe())
    navigate('/')
  }

  return (
    <main className="container mx-auto px-4 pt-2 mb-4">
      <h1 className="font-header text-3xl text-center pb-8">
        Create a New Recipe
      </h1>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              className="border rounded-md border-zinc-300 placeholder:text-zinc-400 px-4 py-2 w-full dark:border-none dark:placeholder:text-gray-400 dark:bg-neutral-700"
              placeholder="Recipe name *"
              type="text"
              name="name"
              onChange={handleChange}
              value={recipe.name}
              required
            />
          </div>

          <div className="flex gap-2">
            <input
              className="border rounded-md border-zinc-300 placeholder:text-zinc-400 px-4 py-2 w-full dark:border-none dark:placeholder:text-gray-400 dark:bg-neutral-700"
              placeholder="Ingredient name *"
              type="text"
              name="ingredient"
              onChange={handleChange}
              value={ingredient}
            />

            <Button
              variant="regular"
              render={(styles) => (
                <button className={styles} onClick={addIngredient}>
                  Add
                </button>
              )}
            />
          </div>

          <div>
            <textarea
              className="block border rounded-md border-zinc-300 placeholder:text-zinc-400 px-4 py-2 w-full resize-y mb-2 dark:border-none dark:placeholder:text-gray-400 dark:bg-neutral-700"
              placeholder="Describe the method *"
              rows="4"
              name="method"
              onChange={handleChange}
              value={method}
            />

            <Button
              variant="regular"
              render={(styles) => (
                <button className={styles} onClick={addMethodStep}>
                  Add next step
                </button>
              )}
            />
          </div>

          <div className="flex gap-4">
            <input
              className="border rounded-md border-zinc-300 placeholder:text-zinc-400 px-4 py-2 w-full dark:border-none dark:placeholder:text-gray-400 dark:bg-neutral-700"
              placeholder="Prep time (min.) *"
              type="number"
              name="prepTime"
              onChange={handleChange}
              value={recipe.prepTime}
              required
            />

            <input
              className="border rounded-md border-zinc-300 placeholder:text-zinc-400 px-4 py-2 w-full dark:border-none dark:placeholder:text-gray-400 dark:bg-neutral-700"
              placeholder="Cook time (min.) *"
              type="number"
              name="cookTime"
              onChange={handleChange}
              value={recipe.cookTime}
              required
            />
          </div>

          <Button
            variant="regular"
            render={(styles) => (
              <button className={`${styles} self-start`}>Create</button>
            )}
          />
        </form>

        <div className="flex flex-col gap-4">
          <IngredientList ingredients={recipe.ingredients} />
          <MethodList method={recipe.method} />
        </div>
      </article>
    </main>
  )
}
