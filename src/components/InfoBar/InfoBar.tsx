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
    <div className="w-[1110px] p-[30px] bg-white rounded-xl ml-auto mr-auto mt-[-65px] relative z-20">
      <ul className="grid grid-cols-4 gap-y-[20px]">
        <li>
          <p className="text-[10px] font-normal text-gray-lite">IP ADDRESS</p>
          <p className="text-xl font-bold">{geoData ? `${ip}` : '-'}</p>
        </li>
        <li className="pl-9 pr-[65px] border-l gray-lite">
          <p className="text-[10px] font-normal text-gray-lite">LOCATION</p>
          <p className="text-xl font-bold">{geoData ? `${city} ${country} ${postalCode}` : '-'}</p>
        </li>
        <li className="pl-9 pr-[65px] border-l gray-lite">
          <p className="text-[10px] font-normal text-gray-lite">TIMEZONE</p>
          <p className="text-xl font-bold">{geoData ? `UTC ${timezone}` : '-'}</p>
        </li>
        <li className="pl-9 pr-[65px] border-l gray-lite">
          <p className="text-[10px] font-normal text-gray-lite">ISP</p>
          <p className="text-xl font-bold">{geoData ? `${isp}` : '-'}</p>
        </li>
      </ul>
    </div>
  );
}