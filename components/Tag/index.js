import Link from 'next/link'
import { kebabCase } from '@/lib/utils'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-sm font-black bg-gray-500 p-1 rounded-lg text-gray-50  uppercase hover:text-blue-200 dark:hover:text-blue-200">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
