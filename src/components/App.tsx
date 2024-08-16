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
          <h1 className="text-blue-600">hello</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
