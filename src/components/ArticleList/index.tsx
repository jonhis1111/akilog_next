import Link from "next/link";
import classes from "src/components/ArticleList/ArticleList.module.css"

export interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
}

interface Props {
  posts: Post[];
}

export function ArticleList({posts}: Props) {
  return (
    <div className={classes.wrap}>
      <div className={classes.listsWrap}>
        <ul className={classes.lists}>
          {posts.map((post) => (
            <li className={classes.list} key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <h2 className={classes.listTitle}>{post.title.rendered}</h2>
                <time className={classes.time}>{new Date(post.date).toLocaleDateString()}</time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}