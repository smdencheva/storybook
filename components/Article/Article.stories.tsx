import React from "react";
import { Article } from "./Article";

export default {
  title: "Components/Article",
  component: Article,
};

export const MyArticle = () => (
  <Article
    title="Understanding React Hooks"
    excerpt="Learn the basics of useState, useEffect, and building custom hooks..."
    publishedAt="2023-04-10"
    authorName="Jane Doe"
  />
);
