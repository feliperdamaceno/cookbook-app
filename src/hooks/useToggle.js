import { useState } from 'react'

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  function toggleValue(value) {
    setValue((previous) => (typeof value === 'boolean' ? value : !previous))
  }

  return [value, toggleValue]
}
