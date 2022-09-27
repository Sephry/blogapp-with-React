import React from "react"
import LoadingPage from "./LoadingPage";

const PostsCard = ({ posts, loading }) => {

  if (loading) {
    return <LoadingPage />;
  }

  return (

    <ul >

      {posts.map((post) => (

        <div key={post.id} className="w-full md:w-4/7">
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block">
                Cryptocurrency
              </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet
                new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand
                tears ten joy there terms any widen.
              </p>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default PostsCard;