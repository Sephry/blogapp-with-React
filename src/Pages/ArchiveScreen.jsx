import { Disclosure } from "@headlessui/react";
import ArchiveFilter from "../Components/ArchiveScreenComponents/ArchiveFilter";
import ArchivePosts from "../Components/ArchiveScreenComponents/ArchivePosts";
import ArchivePagination from "../Components/ArchiveScreenComponents/ArchivePagination";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { dataList } from "../Constants";

export default function ArchiveScreen() {

  // const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState(dataList);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  // search 
  const [search, setSearch] = useState("");

  const searchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
  };

  const filteredPost = posts.filter((post) => {
    const searchText = post.body.toLowerCase().includes(search);
    return searchText;
  });

  // filters 
  const [cuisinesAuthor, setCuisinesAuthor] = useState([
    { id: 1, value: "ismail", label: "Ismail", checked: false },
    { id: 2, value: "yekta", label: "Yekta", checked: false },
    { id: 3, value: "ahmet", label: "Ahmet", checked: false },
    { id: 4, value: "mehmet", label: "Mehmet", checked: false },
    { id: 5, value: "ali", label: "Ali", checked: false },
    { id: 6, value: "veli", label: "Veli", checked: false },
  ]);

  const [cuisinesCategory, setCuisinesCategory] = useState([
    { id: 1, value: "cs", label: "Computer Science", checked: false },
    { id: 2, value: "ai", label: "Artificial Intelligence", checked: false },
    { id: 3, value: "objects", label: "Objects", checked: false },
    { id: 4, value: "ml", label: "Machine Learning", checked: false },
    { id: 5, value: "js", label: "JavaScript", checked: false },
  ]);

  const handleChangeCheckedAuthor = (id) => {
    const cusinesStateListAuthor = cuisinesAuthor;

    const changeCheckedCuisinesAuthor = cusinesStateListAuthor.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisinesAuthor(changeCheckedCuisinesAuthor);
  };

  const handleChangeCheckedCategory = (id) => {
    const cusinesStateListCategory = cuisinesCategory;

    const changeCheckedCuisinesCategory = cusinesStateListCategory.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisinesCategory(changeCheckedCuisinesCategory);
  };

  const applyFilters = () => {
    let updatedList = posts;

    const cuisinesCheckedAuthor = cuisinesAuthor
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());

    const cuisinesCheckedCategory = cuisinesCategory
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());

    if (cuisinesCheckedAuthor.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesCheckedAuthor.includes(item.author)
      );
      console.log(cuisinesCheckedAuthor);

    }

    if (cuisinesCheckedCategory.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesCheckedCategory.includes(item.category)
      );
    }

    setPosts(updatedList);

    !updatedList.length ? setLoading(true) : setLoading(false);
  };

  useEffect(() => {
    applyFilters();
  }, [cuisinesAuthor, cuisinesCategory]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

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
        <ArchiveFilter
          changeCheckedAuthor={handleChangeCheckedAuthor}
          changeCheckedCategory={handleChangeCheckedCategory}
          searchChange={searchChange}
          cuisinesAuthor={cuisinesAuthor}
          cuisinesCategory={cuisinesCategory}
        />
      </Disclosure>

      <ArchivePosts
        posts={currentPosts}
        loading={loading}
        colTable={true}
        highlight={search}
      />

      <ArchivePagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPost.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
