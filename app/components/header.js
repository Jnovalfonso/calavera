"use client";

import React, {useState} from "react";
import Image from "next/image";
import { MdFace } from "react-icons/md";
const Header = () => {

    return (
        <div className="flex justify-between items-center py-6 px-10 border-b-2">
            <img src="/calavera-logo.png" alt="Calavera Cantina" className="w-60" />

            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <MdFace size={25}/>
                </div>
                <p className="text-md">Hello, <span className="font-semibold">Chef!</span></p>
            </div>
        </div>
    );
}

export default Header;