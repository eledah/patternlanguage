import Link from "next/link"
import { PostMetadata } from "./PostMetadata"
import getPostMetadata from "./getPostMetadata"

const PostPreview = (props: PostMetadata) => {
    return ( 
        <>
            <div>
                <div>
                    <Link href={`/posts/${props.slug}`}>
                        <h2 className="text-lg pr-2 inline-block float-right">- {props.title}</h2>
                    </Link>
                    </div>
            </div>
        </>
    );
}

export default PostPreview