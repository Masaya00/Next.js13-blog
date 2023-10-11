import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"}) //SSRになる
  // const res = await fetch(`http://localhost:3001/posts`, {cache: "force-cache"}) //SSGになる
  // const res = await fetch(`http://localhost:3001/posts`, {next: "revalidate: 10"}) //ISRになる

  if (!res.ok) {
    throw new Error("エラーが発生しました")
  }

  // await new Promise((resolve: any) => setTimeout(resolve, 1500))

  const articles = await res.json();
  return articles
}

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {next: "revalidate: 60"}) //SSRになる
  // const res = await fetch(`http://localhost:3001/posts`, {cache: "force-cache"}) //SSGになる
  // const res = await fetch(`http://localhost:3001/posts`, {next: "revalidate: 10"}) //ISRになる

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました")
  }

  // await new Promise((resolve: any) => setTimeout(resolve, 1500))

  const articles = await res.json();
  return articles
}