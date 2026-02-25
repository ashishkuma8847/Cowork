import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';
const WorkSpaceCard = ({ data }:any) => {
   const catogry =data.slice(0,1).map((item:any)=>item.catagery)
    return (
        <>
            <div className="flex items-center gap-[10px]">
                <h5 className="font-inter flex font-semibold text-[22px] leading-[100%]">
                    Available in {catogry} 
                </h5>
                <img src="/svg/arrow-down2.svg" className='-rotate-90' alt="" />
            </div>
            <div className="flex ">

                <Swiper
                spaceBetween={32}
                pagination={{ clickable: true }}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 1.2,
                    },
                    640: {
                        slidesPerView: 1.5,
                    },
                    750: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}>
                {
                    data.length === 0 ? (
                        <p>Loading...</p>
                    ) : (data.map((item:any, index:number) => {
                        const formattedPrice = item.price.toLocaleString("en-IN");
                        
                        return(
                        <SwiperSlide 
                            key={index+Date.now()}
                            className=" mt-[32px] rounded-[12px] overflow-x-hidden mb-[30px] md:mb-[50px]  max-w-[419px] w-full"
                        >
                          <Link href={`/worspacedetails/${item.id}`}>  <img className='cursor-pointer' src={`http://localhost/myapp/images/${item.imagepath}`} alt={ "workspace image"} /></Link>
                            <div className="font-inter ">
                                <h2 className="pb-[6px] pt-3 md:pt-[14px]  font-medium text-lg sm:text-[22px] leading-[100%]">
                                    {item.title}
                                </h2>
                                <span className="flex items-center text-darkGray gap-1 pb-[22px] md:pb-[22px]">
                                    <p className=" font-normal text-base sm:text-lg leading-[100%]">
                                        {item.catagery},India
                                    </p>
                                    <span className="flex items-center gap-[10px]">
                                        <p className=" font-normal text-base sm:text-lg leading-[100%]">
                                            ₹{formattedPrice}
                                        </p>
                                        <img src={`http://localhost/myapp/images/${item.raitingimagepath}`} alt="" />
                                        <p className=" font-normal text-base sm:text-lg leading-[100%]">
                                            {item.rating}
                                        </p>
                                    </span>
                                </span>
                            </div>
                        </SwiperSlide>
                    )}))}
            </Swiper>
            </div>
        </>
    )
}

export default WorkSpaceCard