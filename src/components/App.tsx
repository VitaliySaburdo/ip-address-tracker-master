import { useEffect, useState } from 'react';
import { apiService } from '../../services';
import { Container } from './Container/Container';
import { Header } from './Header';
import { InfoBar } from './InfoBar';
import { MapComponent } from './MapComponent';
import {GeoData} from '../types'

function App() {
  const [geoData, setGeoData] = useState<GeoData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService({ ipAddress: '28.100.174.101' });
        setGeoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <section>
          <Container>
            <InfoBar geoData={geoData} />
            <MapComponent />
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;