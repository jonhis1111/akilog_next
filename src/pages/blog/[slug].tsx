import { FirstView } from '@/components/FirstView';
import Head from 'next/head';
import { PageNavigation } from '@/components/PageNavigation';
import { Profile } from '@/components/Profile';
import { RecentArticles } from '@/components/RecentArticles';
import classes from "src/components/Top/Top.module.css"
import { PostContent } from '@/components/PostContent';


export async function getStaticPaths() {
  const res = await fetch('https://late-arita-7120.under.jp/wp-json/wp/v2/posts');
  const posts = await res.json();
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }:any) {
  const { slug } = params;
  const res = await fetch(`https://late-arita-7120.under.jp/wp-json/wp/v2/posts?slug=${slug}`);
  const [posts] = await res.json();
  return {
    props: {
      posts,
    },
  };
}

type Props = {
  posts: {
    title: { rendered: string };
    content: { rendered: string };
  };
}

const Post: React.FC<Props> = ({ posts }) => {
  return (
    <div className={classes.allWrap}>
      <Head>
        <title>{posts.title.rendered}</title>
      </Head>
      <div>
        <FirstView />
      </div>

      <div className={classes.contentWrap}>
        <div className={classes.leftWrap}>
          <div className={classes.naviWrap}>
            <PageNavigation />
          </div>
          <div className={classes.mainWrap}>
            <PostContent title={posts.title.rendered} content={posts.content.rendered} />
          </div>
        </div>

        <div className={classes.rightWrap}>
          <div className={classes.profileWrap}>
            <Profile />
          </div>
          <div className={classes.recentArticlesWrap}>
            <RecentArticles
              posts={[posts]}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Post;