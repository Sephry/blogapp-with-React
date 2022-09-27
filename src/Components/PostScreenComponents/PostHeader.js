
const PostHeader = () => {

    return (
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
                <a className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
                    Cryptocurrency
                </a>
            </div>

            <img
                src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="w-full object-cover lg:rounded h-96"
            />
        </div>

    );
}

export default PostHeader;