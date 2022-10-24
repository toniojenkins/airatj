import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import MapView from '../components/MapView';

function Search({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, numberGuest } = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberGuest}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} for {numberGuest} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Types of Places</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div>
                        {searchResults?.map(
                            ({
                                img,
                                location,
                                title,
                                description,
                                star,
                                price,
                                total,
                            }) => (
                                <InfoCard
                                    key={img}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total}
                                />
                            )
                        )}
                    </div>
                </section>

                <section className="min-w-[600px]">
                    <MapView />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
        (res) => res.json()
    );

    return {
        props: {
            searchResults,
        },
    };
}
