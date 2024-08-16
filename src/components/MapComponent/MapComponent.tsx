import { useEffect } from 'react';
import location from '../../../public/images/icon-location.svg';
import L from 'leaflet';

export const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    const locationIcon = L.icon({
  iconUrl: location,
  iconSize: [46, 56],
  iconAnchor: [22, 56],
});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09], { icon: locationIcon }).addTo(map).openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className='w-[100%] h-[520px] mt-[-65px] relative z-0'></div>;
}
