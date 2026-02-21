import { useParams } from 'react-router-dom'
import places from '../components/PlacesDetails'
import { MapPin } from 'lucide-react'

const DestinationDetails = () => {
    const { placeName } = useParams()
    const place = places.find(place => {
        return (place.slug === placeName.toLowerCase())
    })
    console.log(place)
    return (
        <>

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

            <section className='mx-7 lg:mx-20 bg-white shadow-2xl p-5 my-7 rounded-xl'>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2'>
                        <MapPin color='gray' />
                        <h3 className='font-semibold text-gray-500 text-lg'>{place.location}</h3>
                    </div>

                    <h2 className='font-bold text-4xl'>{place.place}</h2>
                </div>
                <div className='bg-gray-200 h-px w-full my-2'></div>
                <div className='flex items-center justify-start flex-wrap gap-10'>
                    {/* <div className='flex gap-2 items-center justify-center'>
                        <p className='text-xl'>⭐</p>
                        <div>
                            <h4 className='text-gray-500 text-md'>Rating</h4>
                            <p>{place.details.reviews.rating}</p>
                        </div>
                    </div> */}
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

            <section className='bg-white shadow-2xl p-5 rounded-xl mx-7 my-7 lg:mx-20 flex flex-col gap-3'>
                <h2 className='text-4xl font-bold'>Overview</h2>
                <p className='text-lg text-gray-600 font-semibold'>{place.overview}</p>
            </section>

            <section className='bg-white shadow-2xl p-5 rounded-xl mx-7 my-7 lg:mx-20'>
                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center gap-5'>
                    {place.details.specialFeatures.map((item, i) => {
                        return <div key={i} className='flex flex-col gap-3 items-center justify-center w-76 h-52 rounded-xl bg-(--color-tertiary) hover:bg-(--color-primary) hover:text-white hover:-translate-y-1 transition-all ease-linear p-5'>
                            <h3 className='text-5xl'>{item.icon}</h3>
                            <h4 className='text-lg font-semibold'>{item.title}</h4>
                            <p className='text-center'>{item.desc}</p>
                        </div>
                    })}
                </div>
            </section>

            <section className='bg-white shadow-2xl p-5 rounded-xl mx-7 my-7 lg:mx-20'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-4xl'>Day-by-Day Itinerary</h2>

                    {place.details.itinerary.map((item, i) => (
                        <div
                            key={i}
                            className='flex items-center gap-5 py-4 px-3 rounded-xl bg-gray-200
                hover:bg-gray-300 transition-colors duration-300'
                        >
                            <div className='bg-(--color-secondary) text-white font-semibold p-2 rounded-2xl text-center'>
                                {item.day}
                            </div>

                            <div>
                                <h3 className='font-semibold text-2xl w-fit'>{item.title}</h3>
                                <p className='text-lg text-gray-500'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default DestinationDetails
