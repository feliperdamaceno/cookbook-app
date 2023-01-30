// Styles
import { MdPostAdd as CreateIcon } from 'react-icons/md'

// Components
import SearchBar from './SearchBar'
import Button from './Button'

// Routes
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-zinc-900 shadow-md">
      <nav className="container mx-auto flex flex-col gap-2 justify-between items-center p-4 sm:flex-row">
        <ul className="flex-1">
          <li className="font-brand font-semibold text-white dark:text-gray-100 text-4xl tracking-wider italic skew-x-6 cursor-pointer select-none">
            <Link to="/">Cookbook</Link>
          </li>
        </ul>
        <ul className="flex gap-3 md:gap-6 flex-1 justify-end">
          <SearchBar />
          <Button
            variant="regular"
            render={(styles) => (
              <Link className={styles} to="/create">
                <CreateIcon className="text-lg" />
                New
              </Link>
            )}
          />
        </ul>
      </nav>
    </header>
  )
}
