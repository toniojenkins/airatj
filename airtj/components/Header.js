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
            <div>Search</div>
            <div>Become a host</div>
        </header>
    );
};

export default Header;
