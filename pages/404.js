import Link from '@/components/Link/index'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry the page you navigated to doesn't exist!
        </p>
        <p className="mb-8">
          If you reached this from an internal link, please email me at{' '}
          <a href="admin@thomasleonhighbaugh.me">admin@thomasleonhighbaugh.me</a>.
        </p>
        <p>Either way, here is some of my artwork!</p>
        <img src="/static/images/1.png" alt="Swirling in Infinity" />
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
