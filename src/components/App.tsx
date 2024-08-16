import { Container } from './Container/Container';
import { Header } from './Header';
import { InfoBar } from './InfoBar';

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
        </Container>
        </section>
      </main>
    </>
  );
}

export default App;
