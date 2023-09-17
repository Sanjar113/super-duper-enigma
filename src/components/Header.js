import React from 'react'
import { BiLogoInstagram } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"

const Header = () => {

  return (
    <div className='w-[100%] z-10'>
      <div className='text-white  w-full'>
        <div className='bg-[#3b3b3b]'>
          <div className='w-[80%] m-auto py-1'>
            <div className="flex justify-between">
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-4 text-[0.8rem]">
                  <a className='font-medium hover:text-orange-600 transition-colors cursor-pointer' href="#">ТУРИСТИЧЕСКИЙ ПУТЕВОДИТЕЛЬ ПО КЫРГЫЗСТАНУ</a>
                  <a className='font-medium hover:text-orange-600 transition-colors cursor-pointer' href="#">Контакты</a>
                  <div className='font-medium'>
                    <span className='hover:text-orange-600 transition-colors cursor-pointer'>English</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <BiLogoInstagram href='google.com' className='hover:text-orange-600 transition-colors cursor-pointer' />
                  <FaFacebookF className='hover:text-orange-600 transition-colors cursor-pointer' />
                  <AiFillYoutube className='hover:text-orange-600 transition-colors cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='head' className='w-full h-full sticky top-0 py-3 text-[15px] font-medium text-[#202020]'>
          <div className='w-[80%] m-auto flex justify-between items-center'>
            <div>
              <img src="" alt="" />
              <ul className='uppercase flex gap-8'>
                <a href="about">
                  <li className='cursor-pointer hover:text-orange-600 transition-colors'>О нас</li>
                </a>
                <a href="where">
                  <li className='cursor-pointer hover:text-orange-600 transition-colors'>Куда поехать</li>
                </a>
                <a href="tours">
                  <li className='cursor-pointer hover:text-orange-600 transition-colors'>Туры</li>
                </a>
                <a href="gallery">
                  <li className='cursor-pointer hover:text-orange-600 transition-colors'>Галерея</li>
                </a>
                <a href="hotels">
                  <li className='cursor-pointer hover:text-orange-600 transition-colors'>Отели</li>
                </a>
                <a href="flights">
                  <li className='cursor-pointer hover:text-orange-600 transition-colors'>Рейсы</li>
                </a>
                <a href="map">
                  <li className='cursor-pointer hover:text-orange-600 transition-colors'>карта</li>
                </a>
              </ul>
            </div>
            <div className='flex bg-gray-200 px-2 py-1 items-center'>
              <input type="text" placeholder='Поиск' className='text-normal placeholder:font-normal outline-none bg-transparent ' />
              <FiSearch className='text-orange-600 text-[20px]' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default Header;
