import { useEffect } from 'react';
import {apiService} from '../../services';
import { Container } from './Container/Container';
import { Header } from './Header';
import { InfoBar } from './InfoBar';
import { MapComponent } from './MapComponent';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService({ ipAddress: '192.212.174.101' }); 
        console.log(data);
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
          <InfoBar/>
          <MapComponent/>
        </Container>
        </section>
      </main>
    </>
  );
}

export default App;
