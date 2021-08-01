import Link from '@/components/Link/index'
import { PageSeo } from '../components/SEO/index'
import Image from 'next/image'
import siteMetadata from '../data/siteMetadata'
import Gallery from '../components/Gallery'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
export default function Home() {
  return (
    <div>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <Gallery />
    </div>
  )
}
