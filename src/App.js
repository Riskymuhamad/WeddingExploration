import styled from "styled-components";
import Hero from "./components/hero";
import Product from "./components/product";
import Value from "./components/value";
import Footer from "./components/footer";

const Container = styled.div``;
function App() {
  return (
    <>
      <Container>
        <Hero />
        <Product />
        <Value />
        <Footer />
      </Container>
    </>
  );
}

export default App;
