import {
    GlobeAltIcon,
    MenuIcon,
    SearchIcon,
    UserCircleIcon,
    UserIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex item-center h-10 cursor-pointer my-auto">
                <Image
                    src="http://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex align-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    type="text"
                    placeholder="Start your search"
                    className="text-gray-500 placeholder-gray-400 pl-5 bg-transparent outline-none flex-grow"
                />
                <SearchIcon className="hidden md:inline-flex rounded-full p-2 h-8 cursor-pointer bg-red-400 text-white md:mx-2" />
            </div>
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;
