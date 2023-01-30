// Styles
import { MdOutlineAccessTime as TimeIcon } from 'react-icons/md'

// Hooks
import { useContext } from 'react'

// Context
import { ThemeContext } from '../context/ThemeContext'

// Helpers
import calculateTime from '../helpers/calculateTime'
import generateTimeString from '../helpers/generateTimeString'

export default function CookTime({ prepTime, cookTime }) {
  const { theme, colors, createColorClasses } = useContext(ThemeContext)
  const colorScheme = createColorClasses([colors.text[theme.color]])
  const [prepHours, prepMinutes] = calculateTime(prepTime)
  const [cookHours, cookMinutes] = calculateTime(cookTime)
  const prepTimeString = generateTimeString(prepHours, prepMinutes)
  const cookTimeString = generateTimeString(cookHours, cookMinutes)

  return (
    <ul className="self-start sm:self-center flex gap-4 flex-col sm:flex-row">
      <li className="flex items-center ">
        <TimeIcon className={`${colorScheme} text-xl mr-1`} />
        <span className="font-semibold mr-2">Prep:</span>
        <span>{prepTime ? prepTimeString : 'No Prep'}</span>
      </li>

      <li className="flex items-center">
        <TimeIcon className={`${colorScheme} text-xl mr-1`} />
        <span className="font-semibold mr-2">Cook:</span>
        <span>{cookTime ? cookTimeString : 'No Cook'}</span>
      </li>
    </ul>
  )
}
