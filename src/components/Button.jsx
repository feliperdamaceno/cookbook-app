// Hooks
import { useContext } from 'react'

// Context
import { ThemeContext } from '../context/ThemeContext'

export default function Button({ variant, render }) {
  const { theme, colors, createColorClasses } = useContext(ThemeContext)

  const regularVariant = createColorClasses([colors.bg[theme.color]])
  const outlineVariant = createColorClasses([
    colors.text[theme.color],
    colors.border[theme.color],
    colors.bgHover[theme.color]
  ])

  const buttonVariants = {
    regular: `${regularVariant} flex place-items-center gap-1 font-medium rounded-md px-3 py-2 text-white hover:underline cursor-pointer dark:text-gray-100`,

    outline: `${outlineVariant} flex place-items-center self-center gap-1 font-medium rounded-md px-3 py-2 bg-transparent border-2 hover:bg-rose-700 hover:text-white transition-colors duration-150 cursor-pointer dark:hover:text-gray-100`
  }

  return render(buttonVariants[variant])
}
