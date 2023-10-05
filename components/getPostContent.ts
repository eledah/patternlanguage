import matter from "gray-matter";
import fs from "fs";

function replaceMarkdownImagePattern(content: any) {
    // Define a regular expression to match the old pattern: ![[*]]
    const regex = /!\[\[(.*?)\]\]/g;
  
    // Use the replace method to replace the matched pattern with the new one
    const replacedContent = content.replace(
      regex,
      '<img src="../$1">'
    );
  
    return replacedContent;
}

function convertMarkdownLinksToHTML(content: any) {
    // Pattern for the first case: [[Text1]]
    const pattern1 = /\[\[([^|\]]+?)\]\]/g;
    content = content.replace(pattern1, '<a href="$1">$1</a>');
  
    // Pattern for the second case: [[Text2|Text3]]
    const pattern2 = /\[\[([^|\]]+?)\|([^|\]]+?)\]\]/g;
    content = content.replace(pattern2, '<a href="$1">$2</a>');
  
    return content;
  }

function applyMarkdownPatterns(content: any) {
    return convertMarkdownLinksToHTML(replaceMarkdownImagePattern(content))
}


const getPostContent = (slug: string, foldername: string) => {
    const folder = foldername + "/"
    // console.log(folder)
    const file = `${folder}${slug}.md`;
    const content = applyMarkdownPatterns(fs.readFileSync(file, 'utf-8'));
    const matterResult = matter(content)
    return matterResult;
}

export default getPostContent;