import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';

const place = () => {
    const router = useRouter();

    return (
        <div>
            <Header />
        </div>
    );
};

export default place;
