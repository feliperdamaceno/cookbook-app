// Styles
import { TbToolsKitchen2 as CookIcon } from 'react-icons/tb'

// Components
import Button from './Button'

// Routes
import { Link } from 'react-router-dom'

// Helpers
import calculateTime from '../helpers/calculateTime'
import generateTimeString from '../helpers/generateTimeString'

export default function Card({ recipe }) {
  const content = recipe.method[0]?.content.substring(0, 200)
  const totalTime = recipe.prepTime + recipe.cookTime
  const [hours, minutes] = calculateTime(totalTime)
  const timeString = generateTimeString(hours, minutes, 'to make.')

  return (
    <div className="bg-white shadow-md min-w-full max-w-md md:max-w-full p-4 rounded-md flex flex-col hover:rotate-2 transition-transform ease dark:text-gray-100 dark:bg-neutral-700 break-all">
      <h1 className="font-header font-medium text-3xl pb-1">{recipe.name}</h1>
      <h2 className="text-zinc-400 pb-2 dark:text-gray-400">
        {totalTime > 0 ? timeString : 'Already made 😉'}
      </h2>
      <p className="pb-4">{content}...</p>

      <Button
        variant="outline"
        render={(styles) => (
          <Link className={`${styles}  mt-auto`} to={`recipes/${recipe.id}`}>
            <CookIcon />
            Cook
          </Link>
        )}
      />
    </div>
  )
}
