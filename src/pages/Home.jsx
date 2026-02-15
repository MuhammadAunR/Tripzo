import heroImage from "../assets/herosection-img.png";
import weatherImg from "../assets/weathering.png"
import flightImg from "../assets/flights.png"
import musicImg from "../assets/music.png"
import customizationImg from "../assets/customization.png"
import italyImg from "../assets/italy.webp"
import germanyImg from "../assets/germany-dest.webp"
import luxembourgImg from "../assets/luxemburg-dest.webp"
import testimonialsImg from "../assets/code.webp"
import { CreditCard, Dot, Heart, Map, Navigation, Plane } from 'lucide-react';
import { Link } from "react-router-dom";
import { TextMarquee } from "../components/lightswind/sliding-logo-marquee"
import RippleButton from "../components/lightswind/ripple-button";
import PlacesCardUi from "../components/PlacesCardUi";


const Home = () => {

    const places = [
        {
            place: "Germany",
            desc: "Explore medieval castles, scenic Bavarian Alps, and vibrant Berlin nightlife.",
            hotels: "120",
            packages: "35",
            imgSrc: "/src/assets/place-1.webp",
        },
        {
            place: "Switzerland",
            desc: "Experience breathtaking alpine views, luxury resorts, and pristine lakes.",
            hotels: "95",
            packages: "28",
            imgSrc: "/src/assets/place-3.webp",
        },
        {
            place: "France",
            desc: "From the Eiffel Tower to Provence countryside, indulge in art and cuisine.",
            hotels: "180",
            packages: "50",
            imgSrc: "/src/assets/place-4.webp",
        },
        {
            place: "Japan",
            desc: "Blend ancient temples, cherry blossoms, and futuristic Tokyo cityscapes.",
            hotels: "130",
            packages: "37",
            imgSrc: "/src/assets/place-5.webp",
        }
    ];

    return (
        <>
            {/* Hero Section  */}
            <section className='hero-section flex justify-between items-center mt-10 max-lg:flex-col px-20 max-lg:px-7 w-full 2xl:max-w-385 2xl:mx-auto'>
                <div className='flex flex-col gap-4 items-start lg:w-1/2'>
                    <p className='font-semibold uppercase text-(--color-secondary)'>Best Destinations Around the World</p>
                    <h1 className='text-6xl max-md:text-5xl xl:text-8xl font-bold'>Travel, enjoy and live a new and full life</h1>
                    <p className='text-lg text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, consequuntur animi! Perferendis magni maiores repudiandae, excepturi exercitationem atque doloribus sequi consectetur inventore fuga odit id neque aliquid et! Soluta, non?</p>
                    <RippleButton
                        text="Explore"
                        bgColor="#df6951"
                        circleColor="#fff1da"
                        width="150px"
                        height="50px"
                    />
                </div>
                <div className='w-150 h-fit max-lg:w-110 max-sm:w-full'>
                    <img src={heroImage} alt='Hero Image' className='' />
                </div>
            </section>

            {/* Section 2  */}
            <section className='flex flex-col items-center justify-evenly gap-3 mt-10 py-10 w-full'>
                <h4 className='uppercase text-gray-500 font-semibold'>Category</h4>
                <h2 className='text-5xl font-semibold text-center max-md:text-4xl px-2'>We Offer Best Services</h2>
                <div className='mt-10 flex items-center justify-center flex-wrap gap-10 w-full'>
                    <div className='flex flex-col items-center justify-center gap-2 w-60 bg-white shadow-[5px_5px_5px_rgba(0,0,0,0.35)] p-5 rounded-2xl transform lg:-translate-y-4 cursor-pointer'>
                        <img src={weatherImg} alt='Weather' className='w-32' />
                        <h3 className='text-xl font-semibold text-center'>Calculated Weather</h3>
                        <p className='text-lg text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime!</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 w-60 bg-white shadow-[5px_5px_5px_rgba(0,0,0,0.35)] p-5 rounded-2xl transform  cursor-pointer'>
                        <img src={flightImg} alt='Flights' className='w-32' />
                        <h3 className='text-xl font-semibold text-center'>Best Flights</h3>
                        <p className='text-lg text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime!</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 w-60 bg-white shadow-[5px_5px_5px_rgba(0,0,0,0.35)] p-5 rounded-2xl transform lg:-translate-y-4 cursor-pointer'>
                        <img src={musicImg} alt='Music' className='w-32' />
                        <h3 className='text-xl font-semibold text-center'>Local Events</h3>
                        <p className='text-lg text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime!</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 w-60 bg-white shadow-[5px_5px_5px_rgba(0,0,0,0.35)] p-5 rounded-2xl transform cursor-pointer'>
                        <img src={customizationImg} alt='Customization' className='w-32' />
                        <h3 className='text-xl font-semibold text-center'>Customization</h3>
                        <p className='text-lg text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime!</p>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className='flex flex-col items-center justify-center gap-3 mt-7 py-10 px-7 lg:px-20'>
                <h4 className='uppercase text-gray-500 font-semibold'>Top Selling</h4>
                <h2 className='text-5xl font-semibold text-center max-md:text-4xl'>Top Destinations</h2>
                <div className='flex items-center flex-wrap justify-center gap-3 mt-10'>
                    {places.map((item, index) => {
                        return <PlacesCardUi key={index} place={item} />
                    })}
                </div>

            </section>

            {/* Section 4 */}
            <section className="flex items-center justify-evenly max-lg:flex-col gap-5 mt-10 lg:px-20 px-7 w-full 2xl:max-w-385 2xl:mx-auto py-10">
                <div className="flex flex-col gap-3 lg:w-1/2">
                    <h4 className="font-semibold text-gray-600 uppercase">Easy and Fast</h4>
                    <h2 className="font-bold text-5xl max-md:text-4xl">Book your Next Trip <br /> In 3 Easy Steps</h2>
                    <div className="flex flex-col gap-5 w-full">
                        <div className='flex items-center gap-4'>
                            <Map size={40} />
                            <div className='flex flex-col gap-1 text-gray-600'>
                                <h4 className='font-semibold'>Choose Destination</h4>
                                <p className="w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate, vero quod suscipit consectetur reprehenderit?</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <CreditCard size={40} />
                            <div className='flex flex-col gap-1 text-gray-600'>
                                <h4 className='font-semibold'>Make Payments</h4>
                                <p className="w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate, vero quod suscipit consectetur reprehenderit?</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Plane size={40} />
                            <div className='flex flex-col gap-1 text-gray-600'>
                                <h4 className='font-semibold'>Reach Airport on Selected Date</h4>
                                <p className="w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate, vero quod suscipit consectetur reprehenderit?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 flex p-3 flex-col gap-2 rounded-2xl shadow-[50px_0px_100px_rgba(255,241,218)]">
                    <div className="">
                        <img src={germanyImg} alt="Img" className="rounded-2xl" />
                    </div>
                    <h4 className="font-semibold">Trip to Germany</h4>
                    <p>14-29 | by M Aun</p>
                    <div className="icons flex gap-3 items-center">
                        <Plane />
                        <CreditCard />
                        <Map />
                    </div>
                    <div className="flex items-center justify-between px-2">
                        <p>24 people going</p>
                        <Heart className="hover:text-red-500 transition-colors ease-initial" />
                    </div>
                </div>
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
                <div className="w-76 sm:w-96 p-7 shadow-[0px_10px_50px_rgba(255,241,218)] flex flex-col gap-2 text-gray-600 relative">
                    <p className="italic">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repellendus incidunt beatae sit rerum magni cumque quos laboriosam fuga aperiam?"</p>
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
                    backgroundColor="#FFF1DA"
                    className="cursor-pointer countryName"
                />
            </section>

            <section className="2xl:max-w-385 2xl:mx-auto">
                <div className="flex flex-col gap-7 items-center justify-center px-20 py-10 md:py-20 ring-1 ring-gray-300 rounded-tl-[100px] w-10/12 mx-auto bg-[#F9F7FE] mt-20 relative">
                    <h3 className="font-bold xl:text-3xl text-2xl text-center">Subscribe to get information, latest news and other <br />
                        interesting offers about Tripzo</h3>
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        <input type="email" placeholder="Your email" className="bg-white w-60 sm:w-76 text-lg text-gray-500 rounded-xl ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        <RippleButton
                            text="Subscribe"
                            bgColor="#df6951"
                            circleColor="#fff1da"
                            width="150px"
                            height="50px"
                        />
                    </div>
                    <span className="absolute -top-4 -right-4 bg-blue-500 p-2 rounded-full">
                        <Navigation strokeWidth={3} color="white" />
                    </span>
                </div>
            </section>

            <footer className="2xl:max-w-385 2xl:mx-auto">
                <section className="flex items-center justify-around max-lg:flex-col max-lg:items-start gap-3 w-full px-10 lg:px-20 h-fit py-10 bg-gray-100">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-bold">Tripzo.</h2>
                        <p>Book your trip in minute, get full <br />
                            Control for much longer.</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-7 lg:w-1/2">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-semibold text-lg">Company</h4>
                            <ul className="text-gray-500">
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">About</li>
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Careers</li>
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Mobiles</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-semibold text-lg">Contact</h4>
                            <ul className="text-gray-500">
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Help/FAQ</li>
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Press</li>
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Affilates</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-semibold text-lg">More</h4>
                            <ul className="text-gray-500">
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Airlinefees</li>
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Airline</li>
                                <li className="cursor-pointer hover:text-black transition-colors ease-linear">Low Fare Trips</li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Link to={'https://www.instagram.com/muhammadaun_000?igsh=MXdkczRqc3ZsOTZ0Nw=='} className="hover:-translate-y-1 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                                    <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0">
                                    </path>
                                </svg>
                            </Link>
                            <Link to={'https://www.linkedin.com/in/muhammad-aun-rasheed-45a177301/'} className="hover:-translate-y-1 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                                    <path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd">
                                    </path>
                                </svg>
                            </Link>

                            <Link to={'https://github.com/MuhammadAunR'} className="hover:-translate-y-1 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                                    <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="font-semibold text-lg text-center bg-gray-800 text-white py-3">Copyright &copy; 2026 - All rights reserved @ Tripzo.</div>
            </footer>
        </>
    )
}

export default Home
