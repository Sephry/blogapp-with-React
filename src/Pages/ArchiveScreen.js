import { Disclosure, Menu, Transition } from '@headlessui/react';
import ArchiveSort from '../Components/ArchiveScreenComponents/ArchiveSort';

const filters = {
    author: [
        { value: 'Ismail', label: 'İsmail', checked: false },
        { value: 'Yekta', label: 'Yekta', checked: false },
        { value: 'Ahmet', label: 'Ahmet', checked: true },
        { value: 'Mehmet', label: 'Mehmet', checked: false },
        { value: 'Ali', label: 'Ali', checked: false },
        { value: 'Veli', label: 'Veli', checked: false },
    ],
    hashtag: [
        { value: 'xs', label: 'XS', checked: false },
        { value: 's', label: 'S', checked: true },
        { value: 'm', label: 'M', checked: false },
        { value: 'l', label: 'L', checked: false },
        { value: 'xl', label: 'XL', checked: false },
        { value: '2xl', label: '2XL', checked: false },
    ],
    category: [
        { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
        { value: 'tees', label: 'Tees', checked: false },
        { value: 'objects', label: 'Objects', checked: false },
        { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
        { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
    ],
}


export default function ArchiveScreen() {
    return (
        <div className="bg-white mt-10 ">
            {/* Filters */}
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="relative z-10 border-t border-b border-gray-200 grid items-center mb-10"
            >
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>
                <div className="relative col-start-1 row-start-1 py-4 ">
                    <div className="max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8">
                        <div>
                            <Disclosure.Button className="group text-gray-700 font-medium flex items-center">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500">
                                    <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z" clip-rule="evenodd" />
                                </svg>

                                2 Filters
                            </Disclosure.Button>
                        </div>
                        <div className="pl-6">
                            <button type="button" className="text-gray-500">
                                Clear all
                            </button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="border-t border-gray-200 py-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-3 md:gap-x-6">
                            <fieldset>
                                <legend className="block font-medium">Author</legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.author.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center text-base sm:text-sm">
                                            <input
                                                id={`author-${optionIdx}`}
                                                name="author[]"
                                                defaultValue={option.value}
                                                type="checkbox"
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                defaultChecked={option.checked}
                                            />
                                            <label htmlFor={`author-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="block font-medium">Hashtag</legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.hashtag.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center text-base sm:text-sm">
                                            <input
                                                id={`hashtag-${optionIdx}`}
                                                name="hashtag[]"
                                                defaultValue={option.value}
                                                type="checkbox"
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                defaultChecked={option.checked}
                                            />
                                            <label htmlFor={`hashtag-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="block font-medium">Category</legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.category.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center text-base sm:text-sm">
                                            <input
                                                id={`category-${optionIdx}`}
                                                name="category[]"
                                                defaultValue={option.value}
                                                type="checkbox"
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                defaultChecked={option.checked}
                                            />
                                            <label htmlFor={`category-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </Disclosure.Panel>

                <ArchiveSort />


            </Disclosure>


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
            </div>
        </div>
    )
}