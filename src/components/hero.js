import styled from "styled-components";
import GlobalFonts from "../fonts/fonts";

export default function Hero() {
  return (
    <>
      <Navbar>
        <GlobalFonts />
        <Nav>
          <a href="Home">Home</a>
          <a href="Support">Support</a>
          <a href="Login">Login</a>
        </Nav>
        <Container>
          <Judul>
            Buat Undangan <br /> Digital GRATIS!
          </Judul>
          <Paragraf>
            Kami menyediakan pembuatan undangan digital yang tidak hanya murah,{" "}
            <br />
            namun juga memiliki kualitas yang sangat baik.
          </Paragraf>
        </Container>
        <Kotak>
          <KotakTombol>
            <a href="Mulai">
              <Tombol gelap>Mulai sekarang</Tombol>
            </a>
            <p>atau</p>
            <a href="Pelajari">
              <Tombol>Pelajari lebih lanjut </Tombol>
            </a>
          </KotakTombol>
        </Kotak>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  display: inline-block;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-image: url("/img/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const Nav = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;

  a {
    margin-top: 60px;
    text-decoration: none;
    color: #bdbcbc;
    font-size: 16px;
    font-family: "Playfair";
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.02em;
    margin-right: 90px;
  }

  a:nth-child(1) {
    color: #565350;
  }

  @media only screen and (max-width: 600px) {
    a {
      margin-right: 20px;
    }
    margin-top: -25px;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Judul = styled.h1`
  font-family: "Playfair";
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  letter-spacing: 0.02em;
  color: #565350;
  margin-top: 115px;
  margin-bottom: 30px;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

const Paragraf = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #6f7376;
`;

const Kotak = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 654px;
  height: 136px;
  background: #fdfdfd;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.012em;
    color: #656766;
    margin: 29px;
  }

  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 200px;
    margin: 0 auto;
    background: 0;

    p {
      line-height: 15px;
      margin: 15px;
    }
  }
`;

const KotakTombol = styled.div`
  margin-left: 10%;
  display: flex;

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Tombol = styled.button`
  background: ${(props) => (props.gelap ? "#565350" : "#FFFFFF")};
  color: ${(props) => (props.gelap ? "#FFFFFF" : "#BDBCBC;")};

  width: 221.65px;
  height: 70.31px;
  border: 2px solid #bdbcbc;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.012em;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => (props.gelap ? "#FFFFFF" : "#BDBCBC;")};
  }

  @media only screen and (max-width: 600px) {
    width: 150.83px;
    height: 50.91px;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.012em;
  }
`;
