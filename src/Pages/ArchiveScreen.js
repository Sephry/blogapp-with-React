import { Disclosure } from '@headlessui/react';
import ArchiveFilter from '../Components/ArchiveScreenComponents/ArchiveFilter';
import ArchivePosts from '../Components/ArchiveScreenComponents/ArchivePosts';
import ArchiveSort from "../Components/ArchiveScreenComponents/ArchiveSort";
import ArchivePagination from "../Components/ArchiveScreenComponents/ArchivePagination";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function ArchiveScreen(params) {


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
        <div className="bg-white mt-10 ">
            {/* Filters */}
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="relative z-10 border-t border-b border-gray-200 flex flex-row items-center mb-10"
            >
                <ArchiveFilter />
                <ArchiveSort />

                {/* burada redux kullanılacak archive fiterdan ve sortdan gelen bilgilere göre ArchivePosts düzenlenecek */}

            </Disclosure>

            <ArchivePosts posts={currentPosts} />
            <ArchivePagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />

        </div>
    )
}