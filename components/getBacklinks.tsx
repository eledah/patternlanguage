import fs from 'fs';
import path from 'path';
import getPostContent from './getPostContent';

interface Backlink {
  fileName: string;
  title: string
}

const PostsDirectory = path.join(process.cwd(), 'posts');

const findReferencingNotes = (slug: string): Backlink[] => {
  const referencingNotes: Backlink[] = [];

  fs.readdirSync(PostsDirectory).forEach((fileName) => {
    if (fileName.endsWith('.md')) {
        const fileContent = fs.readFileSync(path.join(PostsDirectory, fileName), 'utf8');

        // Define regular expressions for both link patterns
        const linkPattern1 = new RegExp(`\\[\\[(${slug})\\]\\]`, 'g');
        const linkPattern2 = new RegExp(`\\[\\[(${slug})\\|([^\\]]+?)\\]\\]`, 'g');

        // Search for matches in the content
        const matches1 = fileContent.match(linkPattern1);
        const matches2 = fileContent.match(linkPattern2);

        // Get the contents of the target post.
        const post = getPostContent(fileName.replace('.md', ''), "posts")

        if (matches1 || matches2) {
        referencingNotes.push({ fileName: fileName.replace('.md', ''), title: post.data.title});
        }
    }
  });

  return referencingNotes;
};


const getBacklinks = (slug: string) => {
    const referencingNotes = findReferencingNotes(slug);
    // console.log(referencingNotes)
    return (
        <div>
            <ul className='list-disc text-lg text-teal-500'>
            {referencingNotes.map((note) => (
                <li key={note.fileName}>
                <a href={`${note.fileName}`}>{note.title}</a>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default getBacklinks;
