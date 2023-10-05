import Link from "next/link"
import { PostMetadata } from "./PostMetadata"
import fs from "fs";
import matter from "gray-matter"

const BannerPost = (props: PostMetadata, banner: string) => {
    console.log(banner, props.slug)
    if (props.slug == banner) {
        return ( 
            <div>
                <Link href={`/posts/${props.slug}`}>
                    <h2 className="text-2xl pr-2 text-slate-600 hover:text-teal-600">{props.title}</h2>
                </Link>
            </div>
        );
    } else {
        return null
    }
}

export default BannerPost