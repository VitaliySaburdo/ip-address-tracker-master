import { useEffect, useState } from 'react';
import { apiService } from '../../services';
import { Container } from './Container/Container';
import { Header } from './Header';
import { InfoBar } from './InfoBar';
import { MapComponent } from './MapComponent';
import {GeoData} from '../types'

function App() {
  const [geoData, setGeoData] = useState<GeoData | undefined>(undefined);
  const [ip, setIp] = useState('');

  useEffect(() => {
    if (ip) {
      const fetchData = async () => {
        try {
          const data = await apiService({ ipAddress: ip });
          setGeoData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [ip]);

  return (
    <>
      <Container>
        <Header getIpAddress={setIp} />
      </Container>
      <main>
        <section>
          <Container>
            <InfoBar geoData={geoData} />
            <MapComponent geoData={geoData}/>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;