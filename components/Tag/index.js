import Link from 'next/link'
import { kebabCase } from '@/lib/utils'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-sm font-black bg-gray-500 p-1 rounded-lg text-gray-50 font-headline uppercase hover:text-gray-200 dark:hover:text-gray-200">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
