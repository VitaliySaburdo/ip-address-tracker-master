import { useEffect } from 'react';
import location from '../../../public/images/icon-location.svg';
import L from 'leaflet';
import {GeoData} from '../../types';
import '../../index.css';

interface InfoBarProps {
  geoData?: GeoData;
}

export const MapComponent: React.FC<InfoBarProps> = ({geoData}) => {
    const {
    location: {
      lat = 50.450001,
      lng = 30.523333
    } = {},
  } = geoData || {};

  useEffect(() => {
    const map = L.map('map').setView([lat, lng], 13);

    const locationIcon = L.icon({
  iconUrl: location,
  iconSize: [46, 56],
  iconAnchor: [22, 56],
});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng], { icon: locationIcon }).addTo(map).openPopup();

    return () => {
      map.remove();
    };
  }, [geoData]);


  return  <>
  <div id="map" className='w-[100%] h-[520px] relative z-0'></div>;
  </>

}
