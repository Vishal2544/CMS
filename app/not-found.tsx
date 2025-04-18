import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="mt-4">Could not find the requested resource</p>
      <Link href="/login" className="mt-4 text-blue-500 hover:underline">
        Return to Login
      </Link>
    </div>
  )
}
