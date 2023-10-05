import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../../components/getPostMetadata";
import getPostContent from "../../../../components/getPostContent";
import getBacklinks from "../../../../components/getBacklinks";

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug, "posts")
    const backlinks = getBacklinks(slug)
    return (
        <div dir="rtl">
            <h2 className="font-bold text-center ">{post.data.title}</h2>
            <article className="prose prose-lg lg:max-w-3xl text-justify">
                <Markdown>{post.content}</Markdown>
            </article>

            <br></br>

            <div>{backlinks}</div>
            
            <br></br>

            

            <p className="text-center">
                <a href="javascript:history.go(-1)" className="p-1 rounded-md text-sm bg-none">
                        بازگشت
                </a>
            </p>
        </div>
    );
};

export default PostPage;