import { BlogPosts } from 'app/components/posts'
import { SVG } from 'app/components/svg'
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <SVG/>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
