export default function ErrorAlert({ children }) {
  if (!children) return null
  return (
    <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
      {children}
    </p>
  )
}
