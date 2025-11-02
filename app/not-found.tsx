import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream-50 to-beige-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-rosegold-600 mb-4">404</h1>
        <h2 className="text-3xl font-serif text-gray-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-rosegold-500 text-white rounded-full hover:bg-rosegold-600 transition-all font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
