import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/SocialIcons/index'
import { PageSeo } from '@/components/SEO/index'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-gray-500 dark:text-gray-300">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-300">
              Full Stack Web Developer, <br />
              Linux Professional, <br />
              Digital Artist
            </div>
            <div className="text-gray-500 dark:text-gray-400">Stanford University</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Thomas Leon Highbaugh is a full stack web developer, Linux professional and digital
              artist living in beautiful San Francisco, California.{' '}
            </p>
            <p>
              In regards to web development, his primary language is Javascript, which he employs in
              various frameworks and on its own in websites with a particular emphasis on creating
              an attractive and intuitive interface written according to best standards and a color
              scheme carefully balanced as to be pleasant to look at without compromising on its
              artistic quality.
            </p>
            {/* <p>
              He has experience with the following languages, frameworks and tools:
              <ul className="flex px-3 space-x-4 text-xs text-gray-800 bg-gray-200 border-2 border-gray-500 rounded-2xl ">
                <li>
                  HTML
                  <ul>
                    <li>XHTML</li>
                    <li>HTML5</li>
                    <li>JSX</li>
                  </ul>
                </li>
                <li>
                  CSS
                  <ul>
                    <li>CSS3</li>
                    <li>SCSS/SASS</li>
                    <li>LESS</li>
                    <li>CSS-in-JS</li>
                  </ul>
                </li>
                <li>
                  Javascript
                  <ul>
                    <li>vanilla JS</li>
                    <li>es6</li>
                    <li>es7</li>
                    <li>Vue.js</li>
                    <li>Electron.js</li>
                  </ul>
                </li>
                <li>React.js
                <ul>
                    <li>Next.js</li>
                    <li>Gatsby.js</li>
                    <li>Styled Components</li>
                    <li>React Native</li>
                  </ul>
                </li>

              </ul>
            </p> */}
          </div>
        </div>
      </div>
    </>
  )
}
