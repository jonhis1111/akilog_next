import Head from 'next/head';

export async function getStaticPaths() {
  const res = await fetch('https://late-arita-7120.under.jp/wp-json/wp/v2/posts');
  const posts = await res.json();
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`https://late-arita-7120.under.jp/wp-json/wp/v2/posts?slug=${slug}`);
  const [post] = await res.json();
  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <div>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </>
  );
}