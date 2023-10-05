import getPostContent from "./getPostContent"
import Markdown from "markdown-to-jsx";
import Link from "next/link";

let previewWordCount = 30

const banner = (props: any, BANNERID:any) => {
  const post = getPostContent(BANNERID, "posts")
  let postContent = post.content.replace(/\n/g, ' ').split(' ').slice(0, previewWordCount).join(' ')
  postContent += '...'

  for (let i = 0; i < props.length; i++) {
    // console.log(props.slug, BANNERID)
    if (props[i].slug == BANNERID) {
      return (
        <div>
          <Link href={`/posts/${props[i].slug}`}>
              <h1 className="font-bold text-2xl pb-2">{props[i].title}</h1>
          </Link>
          <article className="pb-3 prose prose-xl lg:max-w-3xl text-slate-600">
            <Markdown >
              {postContent}
            </Markdown>
          </article>
        </div>
      )
    }
  }
}

export default banner