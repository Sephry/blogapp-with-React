import { Link } from "react-router-dom";


export default function PostTitle(params) {

    return (
        <div className="font-sans">
            <p className="text-base md:text-xl text-green-500 font-bold">&lt;
                <Link to="/" className="text-base md:text-xl text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</Link>
            </p>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to Minimal Blog</h1>
            <p className="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
        </div>
    );

}