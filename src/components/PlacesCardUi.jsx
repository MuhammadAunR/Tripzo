import { useState } from 'react'
import styled from 'styled-components';
import { ChevronRight, Dot } from 'lucide-react'

const PlacesCardUi = ({ place }) => {
    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            <div onMouseEnter={handleShowDetails} onMouseLeave={handleShowDetails} className='overflow-hidden cursor-pointer relative'>
                <img src={place.imgSrc} alt={place.place} className={`object-cover w-76 h-96 rounded-sm transition-all ease-linear ${showDetails ? "brightness-30" : "brightness-100"}`} />
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

const Card2 = ({ details }) => {
    return (
        <>
            <div className='overflow-hidden relative shadow-[7px_7px_10px_rgba(0,0,0)] ring-4 ring-white rounded-lg'>
                <img src={details.imgSrc} alt={details.place} className={`object-cover w-76 h-96 rounded-lg transition-all ease-linear`} />
                <div className={`flex flex-col gap-2 absolute bottom-3 text-white w-full transition-all ease-initial px-3`}>
                    <h2 className='font-bold text-2xl'>{details.place}</h2>
                    <p className='text-sm'>{details.desc}</p>
                    <button className='bg-white/90 text-black font-semibold hover:bg-white cursor-pointer transition-colors w-full py-2 rounded-full'>Search Flight</button>
                </div>
            </div>
        </>
    )
}

export { Card2 }


const ServiceCard = ({services}) => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" /></svg> */}
        <img src={services.imgSrc} alt={services.title} className='w-32' />
        <div className="card__content">
          <p className="card__title">{services.title}</p>
          <p className="card__description">{services.desc}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 16px;
    color: #777;
    line-height: 1.4;
  }`;

export  {ServiceCard};
