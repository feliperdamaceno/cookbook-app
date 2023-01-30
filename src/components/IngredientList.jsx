export default function IngredientList({ ingredients }) {
  return (
    <div className="break-all">
      <h2 className="font-header font-medium text-2xl pb-2 border-b-2 border-zinc-200 dark:border-gray-100">
        Ingredients
      </h2>

      <ul>
        {ingredients?.map((ingredient) => (
          <li
            key={ingredient.id}
            className="border-b border-zinc-200 dark:border-gray-200 py-2"
          >
            {ingredient.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
