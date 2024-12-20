import React from "react";
import "./Post.css";
import {IPost} from '../../types/types';

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {

  return (
    <div className="container">
      <div className="post">
        <span>{post.id}</span>
        <span>{post.title}</span>
      </div>
    </div>
  )
}