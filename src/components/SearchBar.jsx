// Styles
import { MdSearch as SearchIcon } from 'react-icons/md'

// Routes
import { useLocation } from 'react-router-dom'

// Hooks
import { useContext, useEffect } from 'react'

// Context
import { SearchContext } from '../context/SearchContext'

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext)
  const location = useLocation()

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    setSearchQuery('')
  }, [location])

  return (
    <div className="flex relative items-center flex-1 md:max-w-[60%] lg:max-w-[50%]">
      <input
        className="placeholder:text-zinc-400 rounded-md px-4 py-2 w-full dark:placeholder:text-gray-400 dark:text-gray-100 dark:bg-neutral-700"
        placeholder="Search..."
        onChange={handleChange}
        value={searchQuery}
        required
      />
      <div className="bg-white text-xl h-4/5 grid place-items-center pr-3 dark:bg-neutral-700 absolute right-1">
        <SearchIcon />
      </div>
    </div>
  )
}
