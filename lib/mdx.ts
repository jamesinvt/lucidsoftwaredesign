import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export async  function getPostBySlug(slug: string, fields: string[] = []) {
// //   const realSlug = slug.replace(/\.mdx$/, '')
// //   const fullPath = join(postsDirectory, `${realSlug}.md`)
// //   const fileContents = fs.readFileSync(fullPath, 'utf8')
// //   const { data, content } = matter(fileContents)

// //   const mdxSource = await serialize(content, {
// //     mdxOptions: {
// //       remarkPlugins: [
// //         require('remark-slug'),
// //         [
// //           require('remark-autolink-headings'),
// //           {
// //             linkProperties: {
// //               className: ['anchor']
// //             }
// //           }
// //         ],
// //         require('remark-code-titles')
// //       ],
// //       rehypePlugins: [mdxPrism]
// //     }
// //   });

// //   return {
// //     mdxSource,
// //     frontMatter: {
// //       wordCount: content.split(/\s+/gu).length,
// //       readingTime: readingTime(content),
// //       slug: slug || null,
// //       ...data
// //     }
//   };
// return { slug: realSlug, meta: data, content }

}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}