import { Link } from "react-router-dom";

export default function PopularNewsPosts() {
    return (

    
            <div className="block space-x-0 lg:flex lg:space-x-6 border border-gray-300 rounded-md p-2 hover:border-gray-600">
                <div className="rounded w-full p-4 lg:p-0">
                    <img
                        src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        className="rounded"
                        alt="technology"
                    />
                    <div className="p-4 pl-0">
                        <h2 className="font-bold text-2xl text-gray-800">
                            Put all speaking her delicate recurred possible.
                        </h2>
                        <p className="text-gray-700 mt-2">
                            Set indulgence inquietude discretion insensible bed why
                            announcing. Middleton fat two satisfied additions. So continued he
                            or commanded household smallness delivered. Door poor on do walk
                            in half. Roof his head the what.
                        </p>

                        <Link to="/post" className="inline-block py-2 rounded text-white mt-2 ml-auto border rounded-md border-gray-300 bg-green-800 p-4">
                            Read more
                        </Link>
                    </div>
                </div>
                
            </div>
    );
}