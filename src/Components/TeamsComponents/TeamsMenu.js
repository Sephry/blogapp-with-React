function TeamsMenu(params) {

    return (
        <div class="flex items-center p-1 border border-blue-600 ">
            <button class="px-4 py-2 text-sm font-medium text-white capitalize bg-blue-600 md:py-3 rounded-xl md:px-12">Author</button>
            <button class="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12 md:mx-8 mx-4">development</button>
            <button class="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl  md:px-12">marketing</button>
        </div>
    );




}
export default TeamsMenu;