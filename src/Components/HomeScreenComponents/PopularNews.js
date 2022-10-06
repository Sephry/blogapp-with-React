import { Link } from "react-router-dom";
import PopularNewsPosts from "./PopularNewsPosts";

export default function PopularNews(params) {
    return (

        <div >
            <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                <h2 className="font-bold text-3xl">Popular news</h2>
                <Link to="/archive" className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
                    View all
                </Link>
            </div>

            <div className="block space-x-0 lg:flex lg:space-x-6">

                <PopularNewsPosts />
                <PopularNewsPosts />
                <PopularNewsPosts />

            </div>
        </div>
    );
}