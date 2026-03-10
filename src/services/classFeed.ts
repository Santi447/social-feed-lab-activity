/*
TODO: Create the following functions:
- login
- getFeed (with optional authors argument added to it if you have time)
- createPost
- createComment
*/
import api from "./api";
import { User } from "../types";
import { Comment } from "../types";
import { Post } from "../types";
import { getApiErrorMessage } from "./api";

export async function Login(User: User) {
  try {
    const response = await api.post("/login", { username: User.username });
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}
export async function getFeed(token: string, author: string) {
  try {
    const response = await api.get(`/feed?=${author}`);
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}
export async function createPost(Post: Post) {
  try {
    const response = await api.post("/feed", {
      posts: {
        id: Post.id,
        author: Post.author,
        text: Post.text,
        createdAt: Post.createdAt,
        commentCount: Post.commentCount,
        comments: Post.comments,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}
export async function UpdatePost(Post: Post) {
  try {
    const response = await api.put(`/posts/${Post.id}`, { text: Post.text });
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
  
};
export async function CreateComment(Comment:Comment){
  try{
    const response = await api.post(`/posts/${Comment.postId}/comments`,{text:Comment.text});
    return response.data;
  }catch(error){
    throw new Error(getApiErrorMessage(error));
  }
}
