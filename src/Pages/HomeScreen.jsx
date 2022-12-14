import Pagination from "../Components/HomeScreenComponents/Pagination";
import PostsCard from "../Components/HomeScreenComponents/PostsCard"
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsletterCard from "../Components/HomeScreenComponents/NewsletterCard";
import PopularNews from "../Components/HomeScreenComponents/PopularNews";
import ChairMansLetter from "../Components/HomeScreenComponents/ChairMansLetter";

const HomeScreen = () => {

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
      
      
      <div className="" >
        
        <ChairMansLetter />    
        
      </div>

      <div className="" >
        <PostsCard posts={currentPosts} loading={loading} />
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