import { useState, useEffect } from 'react'

export default function useStorage(key, defaultValue) {
  const [storage, updateStorage] = useState(getStorage)

  function getStorage() {
    const response = window.localStorage.getItem(key)
    if (response) return JSON.parse(response)

    if (typeof defaultValue === 'function') return defaultValue()
    return defaultValue
  }

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage))
  }, [storage])

  return { storage, updateStorage }
}
