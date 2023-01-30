import { createContext, useReducer, useEffect } from 'react'
import useStorage from '../hooks/useStorage'

export const ThemeContext = createContext(null)

export const THEME_ACTIONS = {
  CHANGE_SCHEME: 'CHANGE_SCHEME',
  CHANGE_COLOR: 'CHANGE_COLOR'
}

function reducer(state, action) {
  switch (action.type) {
    case THEME_ACTIONS.CHANGE_SCHEME:
      document.documentElement.classList.remove(state.scheme)
      return { ...state, scheme: action.payload.scheme }
    case THEME_ACTIONS.CHANGE_COLOR:
      return { ...state, color: action.payload.color }
    default:
      return state
  }
}

const colors = {
  text: {
    primary: 'text-rose-700 dark:text-rose-500',
    secondary: 'text-sky-800 dark:text-sky-500',
    tertiary: 'text-amber-500 dark:text-amber-400'
  },
  bg: {
    primary: 'bg-rose-700 dark:bg-rose-500',
    secondary: 'bg-sky-800 dark:bg-sky-500',
    tertiary: 'bg-amber-500 dark:bg-amber-400'
  },
  border: {
    primary: 'border-rose-700 dark:border-rose-500',
    secondary: 'border-sky-800 dark:border-sky-500',
    tertiary: 'border-amber-500 dark:border-amber-400'
  },
  bgHover: {
    primary: 'hover:bg-rose-700 dark:hover:bg-rose-500',
    secondary: 'hover:bg-sky-800 dark:hover:bg-sky-500',
    tertiary: 'hover:bg-amber-500 dark:hover:bg-amber-400'
  }
}

export default function ThemeProvider({ children }) {
  const { storage, updateStorage } = useStorage('theme', initialTheme)
  const [theme, dispatch] = useReducer(reducer, storage)

  function initialTheme() {
    return {
      scheme: 'light',
      color: 'primary'
    }
  }

  function createColorClasses(classes) {
    return classes.join(' ')
  }

  useEffect(() => {
    document.documentElement.classList.add(theme.scheme)
    updateStorage(theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, dispatch, colors, createColorClasses }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
