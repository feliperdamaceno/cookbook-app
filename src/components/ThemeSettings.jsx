// Styles
import {
  MdSettings as SettingsIcon,
  MdDarkMode as DarkThemeIcon,
  MdWbSunny as LightThemeIcon,
  MdCircle as ColorThemeIcon
} from 'react-icons/md'

// Hooks
import { useContext, useEffect } from 'react'
import useToggle from '../hooks/useToggle'

// Context
import { ThemeContext, THEME_ACTIONS } from '../context/ThemeContext'

export default function ThemeSettings() {
  const [isSettingsOpen, toggleSettings] = useToggle(false)
  const { theme, colors, dispatch } = useContext(ThemeContext)
  const [isDarkTheme, toggleDarkTheme] = useToggle(initialTheme)

  function initialTheme() {
    return theme.scheme === 'dark' ? true : false
  }

  function changeColor(event) {
    const color = event.currentTarget.name
    dispatch({ type: THEME_ACTIONS.CHANGE_COLOR, payload: { color } })
  }

  useEffect(() => {
    const currentScheme = isDarkTheme ? 'dark' : 'light'
    dispatch({
      type: THEME_ACTIONS.CHANGE_SCHEME,
      payload: { scheme: currentScheme }
    })
  }, [isDarkTheme])

  return (
    <div className="container mx-auto p-2 text-2xl gap-2 relative">
      <button className="p-2 active:scale-105" onClick={toggleSettings}>
        <SettingsIcon />
      </button>

      {isSettingsOpen && (
        <div className="flex gap-2 items-center p-2 bg-zinc-900 text-zinc-100 rounded-md absolute -bottom-8 left-4 shadow-md z-50">
          <button onClick={toggleDarkTheme} className="shadow active:scale-105">
            {theme.scheme === 'dark' ? <DarkThemeIcon /> : <LightThemeIcon />}
          </button>
          <button
            onClick={changeColor}
            className={`${colors.text.primary} active:scale-105`}
            name="primary"
          >
            <ColorThemeIcon />
          </button>
          <button
            onClick={changeColor}
            className={`${colors.text.secondary} active:scale-105`}
            name="secondary"
          >
            <ColorThemeIcon />
          </button>
          <button
            onClick={changeColor}
            className={`${colors.text.tertiary} active:scale-105`}
            name="tertiary"
          >
            <ColorThemeIcon />
          </button>
        </div>
      )}
    </div>
  )
}
