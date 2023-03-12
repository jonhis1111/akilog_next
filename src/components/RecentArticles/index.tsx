import Link from 'next/link';
import classes from "src/components/RecentArticles/RecentArticles.module.css"


interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
}

interface Props {
  posts: Post[];
}

export const RecentArticles =({ posts }: Props) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.titleWrap}>
        <h2 className={classes.title}>最近の記事</h2>
      </div>
      <div className={classes.listsWrap}>
        <ul className={classes.lists}>
          {posts.map((post) => (
            <li className={classes.list} key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <h2 className={classes.listTitle}>{post.title.rendered}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
