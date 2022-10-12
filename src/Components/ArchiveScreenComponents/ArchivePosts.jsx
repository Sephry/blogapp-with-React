import React from "react";
import LoadingPage from "../LoadingPage"

const ArchivePosts = ({ posts, loading }) => {
    
    if (loading) {
        return <LoadingPage />;
    }

    return (
        <ul>
            <li className="grid grid-cols-2">
                {posts.map((post) => (
                    <div key={post.id} className="border border-gray-300 hover:border-gray-500 hover:bg-gray-100 m-1 p-3  rounded-xl flex flex-col md:flex-row mb-10">
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


/*
<div >
    <div className="w-full md:w-4/7">
        <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
                <span className="text-green-700 text-sm hidden md:block">
                    Gadgets
                </span>
                <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    At every tiled on ye defer do. No attention suspected oh
                    difficult.
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Wonder matter now can estate esteem assure fat roused. Am
                    performed on existence as discourse is. Pleasure friendly at
                    marriage blessing or
                </p>
            </div>
        </div>

        <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
                <span className="text-green-700 text-sm hidden md:block">
                    Bitcoin
                </span>
                <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Fond his say old meet cold find come whom. The sir park sake
                    bred.
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Integer commodo, sapien ut vulputate viverra, Integer commodo
                    Integer commodo, sapien ut vulputate viverra, Integer commodo
                </p>
            </div>
        </div>
        <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className="bg-white rounded px-4">
                <span className="text-green-700 text-sm hidden md:block">
                    Insights
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
</div>*/