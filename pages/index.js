import Head from 'next/head';

import { FeaturedPosts } from '../sections/index';

import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>BlogMesh</title>
        <link rel="icon" href="https://i.ibb.co/KbYT9gS/note-2389227-1280-modified.png" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) =>
            <PostCard post={post.node} key={post.title} />
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-12">
          <p className="text-center mt-4 font-semibold text-xl mx-auto text-white">Created By &copy; ARYAN GARG @2021</p>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
