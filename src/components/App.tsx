import { Container } from './Container/Container';
import { Header } from './Header';
import { InfoBar } from './InfoBar';
import { MapComponent } from './MapComponent';

function App() {


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
