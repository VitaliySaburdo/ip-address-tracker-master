import React from 'react';
import {GeoData} from '../../types'

interface InfoBarProps {
  geoData?: GeoData;
}

export const InfoBar: React.FC<InfoBarProps> = ({ geoData }) => {
    const {
    ip = '',
    location: {
      city = '',
      country = '',
      postalCode = '',
      timezone = '',
    } = {},
    isp = ''
  } = geoData || {};

  return (
    <div className="w-[320px] p-[30px] bg-white rounded-xl ml-auto mr-auto absolute z-40 left-[50%] translate-x-[-50%] bottom-[46%] xl:w-[1110px] xl:bottom-[57%]">
      <h2 className='visually-hidden'>InfoBar</h2>
      <ul className="xl:grid grid-cols-4">
        <li>
          <p className="text-center text-[10px] font-normal text-gray-lite xl:text-left">IP ADDRESS</p>
          <p className="text-center text-xl font-bold xl:text-left">{geoData ? `${ip}` : '-'}</p>
        </li>
        <li className="pl-0 pr-0 xl:pl-9 xl:pr-[65px] xl:border-l gray-lite">
          <p className="text-center text-[10px] font-normal text-gray-lite xl:text-left">LOCATION</p>
          <p className="text-center text-xl font-bold xl:text-left">{geoData ? `${city} ${country} ${postalCode}` : '-'}</p>
        </li>
        <li className="pl-0 pr-0 xl:pl-9 xl:pr-[65px] xl:border-l gray-lite">
          <p className="text-center text-[10px] font-normal text-gray-lite xl:text-left">TIMEZONE</p>
          <p className="text-center text-xl font-bold xl:text-left">{geoData ? `UTC ${timezone}` : '-'}</p>
        </li>
        <li className="pl-0 pr-0 xl:pl-9 xl:pr-[65px] xl:border-l gray-lite">
          <p className="text-center text-[10px] font-normal text-gray-lite xl:text-left">ISP</p>
          <p className="text-center text-xl font-bold xl:text-left">{geoData ? `${isp}` : '-'}</p>
        </li>
      </ul>
    </div>
  );
}