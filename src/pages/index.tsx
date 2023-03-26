import Link from 'next/link';
import { RecentArticles } from '@/components/RecentArticles'
import { Profile } from '@/components/Profile';
import { FirstView } from '@/components/FirstView';
import { PageNavigation } from '@/components/PageNavigation';
import { ArticleList } from '@/components/ArticleList';
import classes from "src/components/Top/Top.module.css"
import { Post } from '@/components/ArticleList';

interface Props {
  posts: Post[];
}

export default function Blog({ posts } : Props) {
  return (
    <div className={classes.allWrap}>
      <div>
        <FirstView />
      </div>

      <div className={classes.contentWrap}>
        <div className={classes.leftWrap}>
          <div className={classes.naviWrap}>
            <PageNavigation />
          </div>
          <div className={classes.mainWrap}>
            <ArticleList
              posts={posts}
            />
          </div>
         </div>

        <div className={classes.rightWrap}>
          <div className={classes.profileWrap}>
            <Profile />
          </div>
          <div className={classes.recentArticlesWrap}>
            <RecentArticles
              posts={posts}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://late-arita-7120.under.jp/wp-json/wp/v2/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
