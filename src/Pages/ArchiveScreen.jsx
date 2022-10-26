import { Disclosure } from "@headlessui/react";
import ArchiveFilter from "../Components/ArchiveScreenComponents/ArchiveFilter";
import ArchivePosts from "../Components/ArchiveScreenComponents/ArchivePosts";
import ArchivePagination from "../Components/ArchiveScreenComponents/ArchivePagination";
import SearchBar from "../Components/ArchiveScreenComponents/SearchBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const filters = {
  author: [
    { value: "ismail", label: "İsmail", checked: false },
    { value: "yekta", label: "Yekta", checked: false },
    { value: "ahmet", label: "Ahmet", checked: false },
    { value: "mehmet", label: "Mehmet", checked: false },
    { value: "ali", label: "Ali", checked: false },
    { value: "veli", label: "Veli", checked: false },
  ],
  category: [
    { value: "cs", label: "Computer Science", checked: false },
    { value: "ai", label: "Artificial Intelligence", checked: false },
    { value: "objects", label: "Objects", checked: false },
    { value: "ml", label: "Machine Learning", checked: false },
    { value: "js", label: "JavaScript", checked: false },
  ],
};

export default function ArchiveScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [search, setSearch] = useState("");

  const searchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
  };

  const filteredPost = posts.filter((post) => {
    const searchText = post.body.toLowerCase().includes(search);
    return searchText;
  });

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
  const currentPosts = filteredPost.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white mt-10 ">
      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="relative z-10 border-t border-b border-gray-200 flex  items-center"
      >
        <ArchiveFilter filters={filters} />
        <SearchBar searchChange={searchChange} />
      </Disclosure>

      <ArchivePosts posts={currentPosts} loading={loading} colTable={true} highlight={search} />

      <ArchivePagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
