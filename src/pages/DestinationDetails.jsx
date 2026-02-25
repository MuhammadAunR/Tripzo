import { useParams } from 'react-router-dom'
import places from '../components/PlacesDetails'
import { MapPin } from 'lucide-react'
import { NavButtons } from '../components/ButtonUi'

const DestinationDetails = () => {
    const { placeName } = useParams()
    const place = places.find(place => {
        return (place.slug === placeName.toLowerCase())
    })
    return (
        <>


            {/* Photo Gallery  */}
            <section className='px-7 lg:px-20'>
                <div className="flex items-center justify-center max-lg:flex-col gap-2 w-fit mx-auto rounded-xl overflow-hidden">
                    <div className='flex justify-between gap-2 max-md:flex-col max-md:w-full'>
                        <div className="">
                            <img src={place.imgSrc} alt={place.place} className='w-130 max-md:w-full h-168 object-cover hover:scale-y-102 transition-transform ease-linear' />
                        </div>
                        <div className='flex flex-col gap-2 max-md:flex-row max-sm:flex-col'>
                            <div className="">
                                <img src={place.imgSrc} alt={place.place} className='w-96 max-sm:w-full h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                            </div>
                            <div className="">
                                <img src={place.imgSrc} alt={place.place} className='w-96 max-sm:w-full h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col max-lg:flex-row max-lg:justify-between max-lg:w-full gap-2'>
                        <div className="">
                            <img src={place.imgSrc} alt={place.place} className='w-96 h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                        </div>
                        <div className="">
                            <img src={place.imgSrc} alt={place.place} className='w-96 h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                        </div>
                    </div>
                </div>
            </section>


            <main className='mx-7 lg:mx-20 flex gap-7 max-lg:flex-col'>
                {/* Tour Details / */}
                <section className='lg:w-10/12'>
                    <section className='bg-white shadow-2xl p-5 rounded-xl my-7'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'>
                                <MapPin color='gray' />
                                <h3 className='font-semibold text-gray-500 md:text-lg'>{place.location}</h3>
                            </div>

                            <h2 className='font-bold text-3xl md:text-4xl'>{place.place}</h2>
                        </div>
                        <div className='bg-gray-200 h-px w-full my-2'></div>
                        <div className='flex items-center justify-start flex-wrap gap-10'>
                            <div className='flex gap-2 items-center justify-center'>
                                <p className='text-xl'>🕛</p>
                                <div>
                                    <h4 className='text-gray-500 text-md'>Duration</h4>
                                    <p>{place.details.tourTime.totalDays} Days</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center justify-center'>
                                <p className='text-xl'>👥</p>
                                <div>
                                    <h4 className='text-gray-500 text-md'>Group Size</h4>
                                    <p>{place.details.tourTime.groupSize}</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center justify-center'>
                                <p className='text-xl'>🌎</p>
                                <div>
                                    <h4 className='text-gray-500 text-md'>Best Time</h4>
                                    <p>{place.details.tourTime.bestSeason}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-200 h-px w-full my-2'></div>
                        <div className='flex items-center flex-wrap gap-5 py-5'>
                            {place.details.features.map((item, i) => {
                                return <span key={i} className='bg-(--color-tertiary) font-semibold p-3 rounded-full'>
                                    {item}
                                </span>
                            })}
                        </div>
                    </section>

                    <section className='bg-white shadow-2xl p-5 rounded-xl my-7 flex flex-col gap-3'>
                        <h2 className='text-3xl md:text-4xl font-bold'>Overview</h2>
                        <p className='md:text-lg text-gray-600 font-semibold text-justify'>{place.overview}</p>
                    </section>

                    <section className='bg-white shadow-2xl p-5 rounded-xl my-7'>
                        <div className='grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 place-items-center gap-5'>
                            {place.details.specialFeatures.map((item, i) => {
                                return <div key={i} className='flex flex-col gap-3 items-center justify-center w-76 h-52 rounded-xl bg-(--color-tertiary) hover:bg-(--color-primary) hover:text-white hover:-translate-y-1 transition-all ease-linear p-5'>
                                    <h3 className='text-5xl'>{item.icon}</h3>
                                    <h4 className='text-lg font-semibold'>{item.title}</h4>
                                    <p className='text-center'>{item.desc}</p>
                                </div>
                            })}
                        </div>
                    </section>

                    <section className='bg-white shadow-2xl p-5 rounded-xl my-7'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-3xl md:text-4xl'>Day-by-Day Itinerary</h2>

                            {place.details.itinerary.map((item, i) => (
                                <div
                                    key={i}
                                    className='flex items-center gap-5 py-4 px-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all hover:translate-x-1 duration-300'>
                                    <div className='bg-(--color-secondary) text-white font-semibold p-2 rounded-2xl text-center'>
                                        {item.day}
                                    </div>

                                    <div>
                                        <h3 className='font-semibold text-xl md:text-2xl w-fit'>{item.title}</h3>
                                        <p className='md:text-lg text-gray-500'>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>

                <aside className='bg-white shadow-2xl rounded-xl my-7 h-fit w-full lg:w-96 px-7 py-5 sticky top-40'>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className='flex items-end gap-2'>
                            <h3 className='font-bold text-5xl text-(--color-primary)'>$1,299</h3>
                            <h4 className='font-semibold text-lg line-through text-gray-500'>$1,699</h4>
                        </div>
                        <p className='text-gray-500'>per person</p>
                        <p className='bg-green-300 px-4 font-semibold py-1 rounded-full w-fit '>Save 24% - Limited Offer</p>
                    </div>

                    <div className='h-px bg-gray-200 w-full my-5'></div>

                    <div className='flex flex-col gap-5'>
                        <label htmlFor="checkInDate" className='flex flex-col gap-1'>
                            <span className='font-semibold'>📅 Check-in-Date</span>
                            <input type="date" name="date" id="checkInDate" className='outline-2 outline-gray-300 hover:outline-(--color-primary) transition-colors ease-initial rounded-sm p-2' />
                        </label>
                        <label htmlFor="NoOfTravelers" className='flex flex-col gap-1'>
                            <span className='font-semibold'>👥 Number of Travelers</span>
                            <select name="travelers" id="NoOfTravelers" className='outline-2 outline-gray-300 hover:outline-(--color-primary) transition-colors ease-initial rounded-sm p-2'>
                                <option value="1 person">1 Person</option>
                                <option value="2 people">2 People</option>
                                <option value="3 people">3 People</option>
                                <option value="4 people">4 People</option>
                                <option value="5+ people">5+ People</option>
                            </select>
                        </label>
                        <label htmlFor="accommodationType" className="flex flex-col gap-1">
                            <span className="font-semibold">🏨 Accommodation Type</span>
                            <select
                                id="accommodationType"
                                name="accommodationType"
                                className="outline-2 outline-gray-300 hover:outline-(--color-primary) transition-colors ease-initial rounded-sm p-2">
                                <option value="budget">Budget</option>
                                <option value="standard">Standard</option>
                                <option value="deluxe">Deluxe</option>
                                <option value="luxury">Luxury</option>
                                <option value="first-class">First Class</option>
                                <option value="premium">Premium Resort</option>
                            </select>
                        </label>
                    </div>
                    <div className='flex items-center justify-center my-7'>
                        <button className="bg-(--color-primary) text-white font-semibold text-xl rounded-xl px-7 py-2 transition-all ease-initial duration-300 hover:scale-102 hover:-translate-y-0.5 hover:text-black relative before:absolute before:content-[''] before:w-full before:h-0 before:bg-white before:left-0 before:top-0 before:rounded-xl hover:before:h-full before:-z-10 before:transition-all before:duration-300 before:ease-linear ring-2 ring-transparent hover:ring-(--color-primary) cursor-pointer">
                            Book Now</button>
                    </div>
                    <div className='h-px bg-gray-200 w-full my-5'></div>
                </aside>
            </main>
        </>
    )
}

export default DestinationDetails
