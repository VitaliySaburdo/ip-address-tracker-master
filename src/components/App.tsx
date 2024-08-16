import { Container } from './Container/Container';
import { Header } from './Header';

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <h1>hello</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
