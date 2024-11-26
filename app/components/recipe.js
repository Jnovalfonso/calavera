"use client";

import Link from "next/link";

export default function Notebook(props) {
    let {id, title, author, imageUrl, category, lastModified, ingredients, instructions} = props;

      return (  
        <div className="w-80 border-gray-100 rounded-2xl shadow-lg border-2">
            <Link href={`/${id}`} passHref>
                <img src={imageUrl}
                    alt="Recipe Image" 
                    className="w-full h-40 object-cover rounded-t-2xl" />
                <div className="p-6">
                    <h2 className="text-md font-bold">{title}</h2>
                    <p className="text-sm text-gray-500 mt-1">Last modified: {lastModified}</p>
                    <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
                </div>
            </Link>    
        </div>
      );
}