import React from 'react';

export default function Narwhal() {
    return <div className="store-list md:flex">
    <div className="divide-y divide-gray-100 mt-5 md:mr-4">
        <div className="max-w-2xl mx-auto bg-white rounded-row-item shadow-md overflow-hidden md:max-w-xs ">
            <div className="flex md:block">
                <div className="flex-shrink-0">
                    <img className="h-36 w-36  object-cover md:w-full"
                         src="https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3lkbmV5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                         alt="Man looking at item at a store" />
                </div>
                <div className="p-4">
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Big
                        Mouth Burgers</a>
                    <p className="mt-2 text-gray-500">American food</p>
                    <p className="mt-2 text-gray-500">1.6</p>
                </div>
            </div>
        </div>
    </div>
   </div>;
}