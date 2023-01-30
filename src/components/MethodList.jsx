export default function MethodList({ method }) {
  return (
    <div className="sm:col-span-2 break-all">
      <h2 className="font-header font-medium text-2xl pb-3">Method</h2>

      <ul className="flex flex-col gap-4">
        {method?.map((step, index) => (
          <li key={step.id}>
            <h3 className="font-semibold pb-2">STEP {index + 1}</h3>
            <p>{step.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
