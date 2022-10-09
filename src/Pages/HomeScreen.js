import Pagination from "../Components/HomeScreenComponents/Pagination";
import PostsCard from "../Components/HomeScreenComponents/PostsCard"
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsletterCard from "../Components/HomeScreenComponents/NewsletterCard";
import PopularNews from "../Components/HomeScreenComponents/PopularNews";
import HomeDatePicker from "../Components/HomeScreenComponents/HomeDatePicker";
import ChairMansLetter from "../Components/HomeScreenComponents/ChairMansLetter";

const HomeScreen = (params) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <main className="mt-12">
      
      
      <div className="flex" >
        
        <ChairMansLetter />
        <HomeDatePicker />
        
      </div>

      <div className="" >
        <PostsCard posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>

      <PopularNews />

      <NewsletterCard />

    </main>
  );
}

export default HomeScreen;