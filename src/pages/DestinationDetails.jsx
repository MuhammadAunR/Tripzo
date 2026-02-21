import { useParams } from 'react-router-dom'
import places from '../components/PlacesDetails'

const DestinationDetails = () => {
    const { placeName } = useParams()
    const place = places.filter(place => {
        return (place.place === placeName)
    })
    console.log(place)
    return (
        <>

            <section className='px-7 lg:px-20'>
                <div className="flex items-center justify-center max-lg:flex-col gap-2 w-fit mx-auto rounded-xl overflow-hidden">
                    <div className='flex justify-between gap-2 max-md:flex-col max-md:w-full'>
                        <div className="">
                            <img src={place[0].imgSrc} alt={place[0].place} className='w-130 max-md:w-full h-168 object-cover hover:scale-y-102 transition-transform ease-linear' />
                        </div>
                        <div className='flex flex-col gap-2 max-md:flex-row max-sm:flex-col'>
                            <div className="">
                                <img src={place[0].imgSrc} alt={place[0].place} className='w-96 max-sm:w-full h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                            </div>
                            <div className="">
                                <img src={place[0].imgSrc} alt={place[0].place} className='w-96 max-sm:w-full h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col max-lg:flex-row max-lg:justify-between max-lg:w-full gap-2'>
                        <div className="">
                            <img src={place[0].imgSrc} alt={place[0].place} className='w-96 h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                        </div>
                        <div className="">
                            <img src={place[0].imgSrc} alt={place[0].place} className='w-96 h-83 object-cover hover:scale-y-102 transition-transform ease-linear' />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DestinationDetails
