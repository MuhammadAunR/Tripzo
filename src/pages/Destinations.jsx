import heroSectionImg from '../assets/page-heroSection-img.webp'
import { NavButtons } from '../components/ButtonUi'
import FilterDropDown from '../components/FilterDropDown'
import PlacesCardUi from '../components/PlacesCardUi'
import Places from '../components/PlacesDetails'
import { useState } from 'react'

const places = Places;

const Destinations = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8;
    const totalPages = Math.ceil(places.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPlaces = places.slice(startIndex, endIndex)

    const getPages = () => {
        const pages = []
        const windowSize = 2

        const start = Math.max(1, currentPage - windowSize)
        const end = Math.min(totalPages, currentPage + windowSize)

        if (start > 1) {
            pages.push(1)
            if (start > 2) pages.push("...")
        }

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        if (end < totalPages) {
            if (end < totalPages - 1) pages.push("...")
            pages.push(totalPages)
        }

        return pages
    }


    return (
        <>
            <section className='w-full h-76'>
                <img src={heroSectionImg} alt="Hero Section Image" className='inset-0 object-cover object-center h-full w-full' />
            </section>

            <section className='py-7 px-10'>
                <div className='flex items-center gap-5 w-full'>
                    <label htmlFor="search" className='w-full'>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder='🗻 Search your destination here'
                            className='outline-none w-full bg-(--color-tertiary) py-3 text-lg rounded-2xl px-3 cursor-pointer'
                        />
                    </label>
                    <NavButtons text={'Search'} />
                </div>

                <div className='w-full h-px bg-(--color-secondary) my-3 px-10'></div>

                <div className='flex items-center justify-between w-full'>
                    <FilterDropDown />
                </div>
            </section>

            <section className='py-10'>
                <div className='flex items-center flex-wrap justify-center gap-5 mt-10'>
                    {currentPlaces.map((item) => {
                        return <PlacesCardUi key={item.place} place={item} />
                    })}
                </div>

                <div className='flex items-center justify-center gap-3 py-7 mt-7'>
                    <button
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 ring-1 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
                    >
                        Prev
                    </button>
                    {getPages().map((page, index) =>
                        page === "..." ? (
                            <span key={index} className="px-2 text-gray-500">
                                ...
                            </span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 font-semibold h-10 flex items-center justify-center rounded-full ring-1 transition
            ${currentPage === page
                                        ? "bg-black text-white ring-black"
                                        : "bg-white hover:bg-gray-100"
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    )}
                    <button
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 ring-1 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100" >
                        Next
                    </button>
                </div>
            </section>
        </>
    )
}

export default Destinations
