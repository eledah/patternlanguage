import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../components/getPostMetadata";
import getPostContent from "../../../components/getPostContent";

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent('quotes', "quotes")
    return (
        <div dir="rtl">
            <h2 className="font-bold text-3xl text-teal-600 text-center border-b-2 border-slate-100 pb-5">~ بریده‌ها ~</h2>
            <article className="prose prose-xl lg:max-w-3xl text-slate-600">
                <Markdown>{post.content}</Markdown>
            </article>

            <p className="text-center">
                <a href="javascript:history.go(-1)" className="border border-teal-600 border-6 p-1 rounded-md text-sm text-teal-500 hover:bg-teal-600 hover:text-white bg-none">
                        بازگشت
                </a>
            </p>
        </div>
    );
};

export default PostPage;