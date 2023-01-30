// Styles
import { HiOutlineHome as HomeIcon } from 'react-icons/hi'

// Components
import Button from '../components/Button'

// Routes
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="container mx-auto flex flex-col items-center gap-4 text-center px-4 pt-2">
      <header className="font-header font-medium pt-4">
        <h1 className="font-semibold text-8xl">404</h1>
        <h2 className="text-4xl">Ops! Page Not Found</h2>
      </header>
      <p>The page you're looking for is not available...</p>

      <Button
        variant="outline"
        render={(styles) => (
          <Link className={styles} to="/">
            <HomeIcon className="text-xl" />
            Go Home
          </Link>
        )}
      />
    </main>
  )
}
