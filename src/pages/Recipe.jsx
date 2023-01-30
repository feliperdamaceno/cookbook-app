// Styles
import { MdDeleteForever as DeleteIcon } from 'react-icons/md'

// Components
import IngredientList from '../components/IngredientList'
import MethodList from '../components/MethodList'
import CookTime from '../components/CookTime'
import { useNavigate } from 'react-router-dom'

// Routes
import { useParams } from 'react-router-dom'

// Hooks
import { useContext } from 'react'

// Context
import { ThemeContext } from '../context/ThemeContext'
import { RecipesContext, RECIPES_ACTIONS } from '../context/RecipesContext'

export default function Recipe() {
  const { theme, colors, createColorClasses } = useContext(ThemeContext)
  const { recipes, dispatch } = useContext(RecipesContext)
  const colorScheme = createColorClasses([colors.text[theme.color]])
  const navigate = useNavigate()
  const { id } = useParams()
  const currentRecipe = recipes?.find((recipe) => recipe.id === parseInt(id))

  function handleClick() {
    dispatch({ type: RECIPES_ACTIONS.DELETE, payload: { id: parseInt(id) } })
    navigate('/')
  }

  return (
    <main className="container max-w-screen-lg mx-auto mb-4 px-4 pt-2 relative">
      <article className="bg-white shadow-md rounded-md flex flex-col dark:text-gray-100 dark:bg-neutral-700 break-all">
        <header className="rounded-t-md p-8 pb-4 bg-zinc-100 flex flex-col dark:text-gray-100 dark:bg-zinc-900">
          <h1 className="font-header sm:text-center font-medium text-4xl py-4">
            {currentRecipe.name}
          </h1>
          <CookTime
            prepTime={currentRecipe.prepTime}
            cookTime={currentRecipe.cookTime}
          />

          <button
            onClick={handleClick}
            className={`${colorScheme} flex place-items-center text-2xl p-2 cursor-pointer absolute top-2 right-4`}
          >
            <DeleteIcon className="active:scale-105" />
          </button>
        </header>

        <div className="text-left grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-3 px-8 pt-4 pb-8">
          <IngredientList ingredients={currentRecipe.ingredients} />
          <MethodList method={currentRecipe.method} />
        </div>
      </article>
    </main>
  )
}
