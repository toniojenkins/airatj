import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import { MediumCard } from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
    return (
        <div className="">
            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {exploreData?.map(({ img, location, distance }) => (
                            <SmallCard
                                key={img}
                                img={img}
                                location={location}
                                distance={distance}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-4xl font-semibold py-8">
                        Live Anywhere
                    </h2>
                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                        {cardsData?.map(({ img, title }) => (
                            <MediumCard key={img} img={img} title={title} />
                        ))}
                    </div>
                </section>
                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by AirTJ"
                    buttonText="Get Inspired"
                />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
        (res) => res.json()
    );

    const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
        (res) => res.json()
    );
    return {
        props: {
            exploreData,
            cardsData,
        },
    };
}