import React, {useEffect, useState} from 'react';
import {IPost} from '../types/types'
import axios, {AxiosError} from "axios";
import {Post} from '../components/Post/Post'
import {Loader} from '../components/Loader/Loader'

export function PostsPage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [load, setLoad] = useState(false);

  async function fetchPosts() {
    try {
      setLoad(true);
      const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
      setPosts(response.data);
    } catch (e: unknown) {
      console.log(e as AxiosError)
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      { load && <Loader /> }
      { posts.map(post => <Post post={post} key={post.id} />) }
    </div>
  );
}
