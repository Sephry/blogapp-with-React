export default function NewsletterCard(params) {
    return (

        <div className="rounded flex md:shadow mt-12">
            <img
                src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="w-0 md:w-1/4 object-cover rounded-l"
            />
            <div className="px-4 py-2">
                <h3 className="text-3xl text-gray-800 font-bold">
                    Subscribe to newsletter
                </h3>
                <p className="text-xl text-gray-700">
                    We sent latest news and posts once in every week, fresh from the
                    oven
                </p>
                <form className="mt-4 mb-10">
                    <input
                        type="email"
                        className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
                        placeholder="john@tech.com"
                    />
                    <button className="px-4 py-2 rounded bg-green-800 text-gray-100">
                        Subscribe
                        <i className="bx bx-right-arrow-alt"></i>
                    </button>
                    <p className="text-green-900 opacity-50 text-sm mt-1">
                        No spam. We promise
                    </p>
                </form>
            </div>
        </div>

    );
}