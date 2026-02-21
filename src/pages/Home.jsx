import weatherImg from "../assets/weathering.png"
import flightImg from "../assets/flights.png"
import musicImg from "../assets/music.png"
import customizationImg from "../assets/customization.png"
import HeroSectionBg from '../assets/herosectionbg.webp'
import testimonialsImg from "../assets/code.webp"
import { CreditCard, Dot, Heart, Map, Navigation, Plane } from 'lucide-react';
import { Link } from "react-router-dom";
import { TextMarquee } from "../components/lightswind/sliding-logo-marquee"
import PlacesCardUi, { Card2, ServiceCard } from "../components/PlacesCardUi";
import { Button, NavButtons } from "../components/ButtonUi";
import Places from "../components/PlacesDetails"

const places = Places;

const Home = () => {

    const services = [
        {
            imgSrc: weatherImg,
            title: "Calculated Weather",
            desc: "Get accurate, real-time weather forecasts for any city worldwide to plan your trips efficiently."
        },
        {
            imgSrc: flightImg,
            title: "Best Flights",
            desc: "Compare flights from multiple airlines to find the best prices, timings, and routes for your journey."
        },
        {
            imgSrc: musicImg,
            title: "Local Events",
            desc: "Discover concerts, festivals, and events happening nearby so you never miss out on local entertainment."
        },
        {
            imgSrc: customizationImg,
            title: "Customization",
            desc: "Tailor your travel experience by selecting personalized packages, activities, and services to suit your style."
        }
    ];


    return (
        <>
            {/* Hero Section  */}
            <header id="home" className='hero-section flex items-center min-h-screen px-20 py-10 max-lg:px-7 w-full 2xl:max-w-385 2xl:mx-auto relative'>
                <img src={HeroSectionBg} alt="Image" className="absolute inset-0 w-full h-full object-cover -z-10" />
                <div className='flex flex-col gap-4 items-start'>
                    <p className='font-semibold uppercase text-(--color-tertiary)'>Best Destinations Around the World</p>
                    <h1 className='text-6xl max-md:text-5xl xl:text-8xl font-bold'>Travel, enjoy and live a new and full life</h1>
                    <p className='text-xl max-md:text-lg xl:text-2xl text-white font-semibold'>Discover thoughtfully curated journeys to the world's most breathtaking destinations. From charming European towns and serene alpine escapes to vibrant cultural capitals, every experience is designed for comfort, authenticity, and unforgettable moments. With carefully selected stays, seamless booking, and personalized options, your next extraordinary adventure begins here.</p>
                    <Link to={'/destinations'}>
                        <Button />
                    </Link>
                </div>
            </header>

            {/* Section 2  */}
            <section className='flex flex-col items-center justify-evenly gap-3 py-10 w-full'>
                <h4 className='uppercase text-gray-500 font-semibold'>Category</h4>
                <h2 className='text-5xl font-semibold text-center max-md:text-4xl px-2'>We Offer Best Services</h2>
                <div className='mt-10 flex items-center justify-center flex-wrap gap-10 w-full'>
                    {services.map((service, index) => {
                        return <ServiceCard key={index} services={service} />
                    })}
                </div>
            </section>

            {/* Section 3 */}
            <section id="destinations" className='flex flex-col items-center justify-center gap-3 mt- py-10 px-7 lg:px-20'>
                <h4 className='uppercase text-gray-500 font-semibold'>Top Selling</h4>
                <h2 className='text-5xl font-semibold text-center max-md:text-4xl'>Top Destinations</h2>
                <div className='flex items-center flex-wrap justify-center gap-3 mt-10'>
                    {places.slice(7,11).map((item, index) => {
                        return <PlacesCardUi key={index} place={item} />
                    })}
                </div>

            </section>

            {/* Section 4 */}
            <section id="bookings" className="flex items-center justify-evenly max-lg:flex-col gap-5 mt-10 lg:px-20 px-7 w-full 2xl:max-w-385 2xl:mx-auto py-10">
                <div className="flex flex-col gap-3 lg:w-1/2">
                    <h4 className="font-semibold text-gray-600 uppercase">Easy and Fast</h4>
                    <h2 className="font-bold text-5xl max-md:text-4xl">Book your Next Trip <br /> In 3 Easy Steps</h2>
                    <div className="flex flex-col gap-5 w-full">
                        <div className='flex items-center gap-4'>
                            <Map size={40} />
                            <div className='flex flex-col gap-1 text-gray-600'>
                                <h4 className='font-semibold'>Choose Destination</h4>
                                <p className="lg:w-10/12">
                                    Explore a wide range of destinations worldwide and select the perfect location based on your budget, interests, and travel goals.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <CreditCard size={40} />
                            <div className='flex flex-col gap-1 text-gray-600'>
                                <h4 className='font-semibold'>Make Payments</h4>
                                <p className="lg:w-10/12">
                                    Securely complete your booking using trusted payment methods with transparent pricing and instant confirmation.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <Plane size={40} />
                            <div className='flex flex-col gap-1 text-gray-600'>
                                <h4 className='font-semibold'>Reach Airport on Selected Date</h4>
                                <p className="lg:w-10/12">
                                    Arrive at the airport on your chosen date with all booking details ready and enjoy a smooth, hassle-free departure.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                {places.slice(1,2).map((place, index) => {
                    return <Card2 key={index} details={place} />
                })}
            </section>

            {/* Section 5 */}
            <section className="flex justify-center items-center max-sm:flex-col gap-10 px-7 lg:px-20 mt-10 py-10 w-full 2xl:max-w-385 2xl:mx-auto">
                <div className="lg:w-1/2">
                    <h4 className="font-semibold text-gray-600 uppercase">Testimonials</h4>
                    <h2 className="font-bold text-5xl max-md:text-4xl">What People Say <br className="max-sm:hidden" />About Us.</h2>
                    <div className="flex items-center justify-start gap-5 mt-7">
                        <Dot size={50} className="hover:text-gray-500 transition-colors ease-initial" />
                        <Dot size={50} className="hover:text-black text-gray-500 transition-colors ease-initial" />
                        <Dot size={50} className="hover:text-black text-gray-500 transition-colors ease-initial" />
                    </div>
                </div>
                <div className="w-76 sm:w-96 p-7 shadow-[0px_5px_20px_rgba(212,175,55)] flex flex-col gap-2 text-gray-600 relative">
                    <p className="italic">"Tripzo completely transformed the way I plan my trips! Everything from flights to local events is seamless and easy to navigate. Highly recommended for anyone who loves stress-free travel!"</p>
                    <div>
                        <h5 className="font-semibold">Muhammad Aun</h5>
                        <p>Faisalabad, Pakistan</p>
                    </div>
                    <div className="w-14 h-14 rounded-full overflow-hidden absolute -top-6 -left-6">
                        <img src={testimonialsImg} alt="Img" />
                    </div>
                </div>
            </section>

            <section className="my-10">
                <TextMarquee
                    items={['Paris', 'Tokyo', 'New York', 'Sydney', 'Rome', 'Iceland']}
                    speed={10}
                    pauseOnHover={true}
                    height="100px"
                    gap="3rem"
                    backgroundColor="#F8F6F0"
                    className="cursor-pointer countryName"
                />
            </section>

            <section className="2xl:max-w-385 2xl:mx-auto">
                <div className="flex flex-col gap-7 items-center justify-center px-20 py-10 md:py-20 ring-1 ring-gray-300 rounded-tl-[100px] w-10/12 mx-auto bg-[#F9F7FE] mt-20 relative">
                    <h3 className="font-bold xl:text-3xl text-2xl text-center">Subscribe to get information, latest news and other <br />
                        interesting offers about Tripzo</h3>
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        <input type="email" placeholder="Your email" className="bg-white w-60 sm:w-76 text-lg text-gray-500 rounded-xl ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        <NavButtons text={'Subscribe'} />
                    </div>
                    <span className="absolute -top-4 -right-4 bg-(--color-secondary) p-2 rounded-full">
                        <Navigation strokeWidth={3} color="white" />
                    </span>
                </div>
            </section>
        </>
    )
}

export default Home
