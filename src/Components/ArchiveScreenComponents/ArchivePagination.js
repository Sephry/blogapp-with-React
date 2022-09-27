import React from "react";

export default function ArchivePagination({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
  }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
  
  
      <div className='py-2'>
        <div>
  
          <p className='text-base text-gray-700'>
            Showing
            <span className='font-medium'>
              {" "}
              {currentPage * postsPerPage - 8}{" "}
            </span>
            to
            <span className='font-medium'> {currentPage * postsPerPage} </span>
            of
            <span className='font-medium'> {totalPosts} </span>
            results
          </p>
  
        </div>
        <nav className=''>
          <ul className='isolate inline-flex -space-x-px rounded-md shadow-sm'>
            <li>
              {pageNumbers.map((number) => (
                <a
                  onClick={() => {
                    paginate(number);
                  }}
                  href='#'
                  className={
                    currentPage === number
                      ? "relative rounded-sm z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                      : "relative rounded-sm inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  }
                >
                  {number}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    );
}