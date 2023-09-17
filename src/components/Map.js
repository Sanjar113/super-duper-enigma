import React from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Icon from "../images/icon.png"
import KaraKoi from "../images/Karakoi.jpeg"
export const Map = () => {

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
        <div className=''>
            <MapContainer center={center} zoom={7} style={{ width: '100%', height: '100vh' }}>
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
