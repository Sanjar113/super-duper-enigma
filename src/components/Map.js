import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Icon from "../images/icon.png"
import KaraKoi from "../images/Karakoi.jpeg"
import { BiSolidCaretRightSquare, BiSolidCaretLeftSquare } from "react-icons/bi"
// import { BiSolidCaretLeftSquare }

export const Map = () => {


    const [show, setShow] = useState(false)
    const center = [40.878134, 74.975752];
    const circleCenter = [42.84619, 74.58617];


    const data = [
        {
            id: 1,
            title: "Каракол",
            des: "Кыргызстан. Горнолыжная база на Иссык-Куле. ",
            img: KaraKoi,
            position: [42.84619, 74.58617],
        },
        {
            id: 1,
            title: "Каракол",
            des: "Кыргызстан. Горнолыжная база на Иссык-Куле. ",
            img: KaraKoi,
            position: [42.84619, 74.58617],
        },
        {
            id: 1,
            title: "Каракол",
            des: "Кыргызстан. Горнолыжная база на Иссык-Куле. ",
            img: KaraKoi,
            position: [42.84619, 74.58617],
        },
        {
            id: 1,
            title: "Каракол",
            des: "Кыргызстан. Горнолыжная база на Иссык-Куле. ",
            img: KaraKoi,
            position: [42.84619, 74.58617],
        }
    ]

    // Создание кастомного маркера с изображением
    const customMarker = new L.Icon({
        iconUrl: Icon, // Путь к изображению маркера
        iconSize: [32, 32], // Размер изображения маркера
        iconAnchor: [16, 32], // Анкор маркера (точка, вокруг которой будет отображаться маркер)
    });

    return (
        <div className='relative'>
            <div className={`${show ? 'left-0' : 'left-[-100%]'} transition-[1s] w-[245px] h-full bg-white absolute top-0 z-10`}>
                Hello
            </div>
            <div className='absolute top-4 left-4 w-max z-10 flex gap-[3px] items-center '>
                <div className='bg-white flex justify-between items-center rounded-md px-2 py-1 shadow-lg shadow-gray-500/50'>
                    <input placeholder='Поиск' className='bg-transparent p-1' />
                </div>
                <span className=''>
                    {show ? (
                        <BiSolidCaretLeftSquare className='text-[25px] cursor-pointer text text-[#242424]' onClick={() => setShow(false)} />
                    ) : (
                        <BiSolidCaretRightSquare className='text-[25px] cursor-pointer text text-[#242424]' onClick={() => setShow(true)} />
                    )}
                </span>
            </div>
            <MapContainer zoomControl={false} center={center} zoom={7} style={{ width: '100%', height: '100vh' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Circle center={circleCenter} radius={20} color="red" />
                {data.map((item, index) => {
                    return (
                        <Marker position={item.position} icon={customMarker}>
                            <Popup>
                                <div>{item.title}</div>
                                <img src={item.img} />
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    );
}
