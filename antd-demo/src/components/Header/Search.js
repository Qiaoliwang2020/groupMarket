import React from "react";

export default function Search() {
    return <div className="flex search-bar bg-gray-100 w-full rounded-full py-1 my-4 pl-2">
        <input className="flex-1 text-md bg-gray-100 pl-2 rounded-full focus:outline-none" type="text"
               placeholder="Search stores..."/>
        <div className="px-3 py-2 cursor-pointer">
            <svg className="h-5 w-5 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <circle cx="10" cy="10" r="7"/>
                <line x1="21" y1="21" x2="15" y2="15"/>
            </svg>
        </div>
    </div>;
}