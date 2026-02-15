import React, { useState } from 'react'
import { ChevronRight, Dot } from 'lucide-react'

const PlacesCardUi = ({ place }) => {
    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            <div onMouseEnter={handleShowDetails} onMouseLeave={handleShowDetails} className='overflow-hidden cursor-pointer relative'>
                <img src={place.imgSrc} alt='Germany' className={`object-cover w-76 h-96 rounded-sm transition-all ease-linear ${showDetails ? "brightness-30" : "brightness-100"}`} />
                <div className={`flex flex-col gap-2 absolute text-white w-full transition-all ease-initial px-3 ${showDetails ? "bottom-3" : "-bottom-40"}`}>
                    <h2 className='font-bold text-2xl'>{place.place}</h2>
                    <p className='text-sm'>{place.desc}</p>
                    <div className='flex items-center gap-0.5 text-sm'>
                        <p>{place.hotels} Hotels</p>
                        <Dot />
                        <p>{place.packages} Packages</p>
                    </div>
                    <div className='flex items-center justify-between w-full bg-white/20 p-1 hover:bg-white/30 cursor-pointer transition-colors ease-linear rounded-sm'>
                        <p className='font-semibold'>Explore Now</p>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlacesCardUi
