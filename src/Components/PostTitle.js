import { Link } from "react-router-dom";


export default function PostTitle(params) {

    return (
        <div class="font-sans">
            <p class="text-base md:text-xl text-green-500 font-bold">&lt;
                <Link to="/" class="text-base md:text-xl text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</Link>
            </p>
            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to Minimal Blog</h1>
            <p class="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
        </div>
    );

}