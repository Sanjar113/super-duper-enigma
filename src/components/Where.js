import React from 'react'
import Kara_Koi from '../images/Karakoi.jpeg'
import { FaLocationArrow } from "react-icons/fa"
import "../Where.scss"
import Swiper from "swiper"
import { useEffect } from 'react'

export const Where = () => {



    const data = [
        {
            id: 1,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 2,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 3,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 4,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 5,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 6,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 7,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 8,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 9,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        },
        {
            id: 10,
            photo: Kara_Koi,
            location: 'Ошская область, Ноокатский район',
            title: 'Кара-Кой',
            des: 'Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла Бла ',
            price: "120 $",
        }
    ]


    return (
        <div class="">
            <div class="blog-slider__wrp swiper-wrapper">
                {/* ----- Map Data---- */}
                {data.map((data) => (
                    <div key={data.id} class="blog-slider__item swiper-slide">
                        <div class="blog-slider__img">
                            <img src={data.photo} alt="" />
                        </div>
                        <div class="blog-slider__content">
                            <span class="blog-slider__code">{data.location}</span>
                            <div class="blog-slider__title">{data.title}</div>
                            <div class="blog-slider__text">{data.des}</div>
                            <div class="blog-slider__code">
                                <p> ₹ {data.price}</p>
                                <p> {data.size}</p>
                            </div>
                            <button class="blog-slider__button">BOOK NOW</button>
                        </div>
                    </div>
                ))}

                {/* ----- Map Data---- */}
            </div>
        </div>
    )
}
