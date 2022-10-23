import React from "react";
import LoadingPage from "../LoadingPage";

const ArchivePosts = ({ posts, loading, colTable }) => {

  const twoCols = "grid grid-cols-2";
  const oneCols = "grid grid-cols-1";

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <ul className="">
        
      <li className={colTable ? twoCols : oneCols}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 hover:border-gray-500 hover:bg-gray-100 m-1 p-3  rounded-xl flex flex-col md:flex-row mb-10"
          >
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className=" rounded px-4">
              <span className="text-green-700 text-sm hidden md:block">
                {post.title}
              </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                {post.body}
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Integer commodo, sapien ut vulputate viverra, Integer commodo
              </p>
            </div>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default ArchivePosts;
