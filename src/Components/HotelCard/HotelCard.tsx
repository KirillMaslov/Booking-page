import React, { useState } from "react";
import Hotel from "../../types/hotel";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import classNames from "classnames";
import 'swiper/swiper-bundle.css';

export const HotelCard: React.FC<Hotel> = ({
    imagesArr,
    starsNum,
    hotelName,
    cityName,
    countryName,
    distanceFromCenter,
    nightCost,
}) => {
    const starsArr: number[] = [];

    for (let i = 1; i <= starsNum; i++) {
        starsArr.push(i);
    }
    const [isHotelFavourite, setIsHotelFavourite] = useState(false);

    return (
        <div className="hotel">
            <button className={classNames("hotel__favourite", {
                'hotel__favourite--active': isHotelFavourite
            })} onClick={() => {
                setIsHotelFavourite(!isHotelFavourite);
            }}>
                {!isHotelFavourite ? (
                    <img src="./images/star.svg" alt="" className="hoter__favourite-star" />
                ) : (
                    <img src="./images/black-star-icon.svg" alt="" className="hoter__favourite-star" />
                )}
            </button>
            <div className="hotel__slider">
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 500000,
                        disableOnInteraction: false,
                      }}
                    pagination={{ clickable: true}}
                >
                    {imagesArr.map((imageScr, index) => (
                        <SwiperSlide key={index}>
                            <img src={imageScr} alt="Hotel" className="hotel__image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <h4 className="hotel__title">
                {hotelName} | {cityName} | {countryName}
            </h4>
            <div className="hotel__stars">
                {starsArr.map(() => (<div className="hotel__stars-star"></div>))}
            </div>
            <p className="hotel__distance">
                the city center : {distanceFromCenter} m
            </p>
            <h3 className="hotel__cost">
                $ {nightCost} night
            </h3>
        </div>
    )
}