import { Link } from "react-router-dom";
import Pagination from "../Components/HomeScreenComponents/Pagination";
import PostsCard from "../Components/HomeScreenComponents/PostsCard"
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsletterCard from "../Components/HomeScreenComponents/NewsletterCard";
import PopularNews from "../Components/HomeScreenComponents/PopularNews";


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

      <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6">
        <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
          <img
            src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            className="rounded-md object-cover w-full h-64"
          />
          <span className="text-green-700 text-sm hidden md:block mt-4">
            Technology
          </span>
          <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            Ignorant branched humanity led now marianne too.
          </h1>
          <p className="text-gray-600 mb-4">
            Necessary ye contented newspaper zealously breakfast he prevailed.
            Melancholy middletons yet understood decisively boy law she. Answer
            him easily are its barton little. Oh no though mother be things
            simple itself. Oh be me, sure wise sons, no. Piqued ye of am spirit
            regret. Stimulated discretion impossible admiration in particular
            conviction up.
          </p>
          <Link
            to="/post"
            className="inline-block px-6 py-3 mt-2 mb-20 rounded-md bg-green-700 text-gray-100"
          >
            Read more
          </Link>
        </div>
      </div>

      <div >
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