import { useState } from "react";
import AddPost from "./AddPost";


const Home = () => {

  const [posts, setPosts] = useState([]);

  //add POST
  const addPost = async (post) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    //new data is added
    const data = await res.json();
    setPosts([...posts, data]);
  };

  return (
    <>
    <div>Home</div>
    <AddPost onAdd={addPost} />
    </>
  )
}

export default Home