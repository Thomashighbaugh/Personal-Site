import Link from '@/components/Link/index'
import { PageSeo } from '@/components/SEO/index'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <img
        className="border-2  m-0 p-0 box-border bg-white rounded-2xl border-gray-500"
        src="/static/images/twitter-card.png"
        alt="twitter card & banner"
      />
    </div>
  )
}
