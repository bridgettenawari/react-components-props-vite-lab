import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Sunset from '../../images/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.avif';

console.log(blogData);


function App() {
  return (
    <div className="App">
      <Header name="Bri's blog"/>
      <About 
      image={Sunset}
      about="This is a blog where I talk about things that are important to me. Thank you for visiting!"
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
