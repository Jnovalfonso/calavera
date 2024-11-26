"use client";

import React, { useState, useEffect } from "react";
import {Select, CheckboxSelect} from "./select";
import { recipes } from "./recipes";
import Recipe from "./recipe";

export default function RecipeList() {

    const [recipeList, setRecipeList] = useState(recipes);
    
    useEffect(() => {
        setRecipeList(recipeList);
      }, [recipeList]);


    const stations = [
        {value: "prep",  label: "Prep"},
        {value: "garmo",  label: "Garmo"},
        {value: "taco",  label: "Taco"},
        {value: "pizza",  label: "Pizza"},
        {value: "bar",  label: "Bar"},
    ];

    return (
        <div className="py-6 px-16">
            <h1 className="text-2xl font-bold mb-6">Recipes</h1>

            <div className="flex flex-row space-x-12 my-8">
                <Select options={stations} label="Station" />
            </div>
            <div 
                className="grid gap-6"
                style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`
                }}
            >
                {recipes.map((recipe, index) => (
                <div key={index} className="flex">
                    <Recipe
                    id={index}
                    title={recipe.title}
                    lastModified={recipe.lastModified}
                    category={recipe.category}
                    imageUrl={recipe.imageUrl} 
                    />
                </div>
                ))}
            </div>
        </div>
  );
}