import styled from "styled-components";
import GlobalFonts from "../fonts/fonts";

export default function footer() {
  return (
    <>
      <Container>
        <GlobalFonts />
        <Section>
          <Logo>
            <img src="/img/logo.png" alt="logo" />
          </Logo>
          <Link>
            <Isi>
              <h3>COMPANY</h3>
              <p>Mission and fission</p>
              <p>Careers</p>
            </Isi>
            <Isi>
              <h3>SUPPORT</h3>
              <p>Planner</p>
              <p>Team</p>
            </Isi>
            <Isi>
              <h3>COMMUNITY</h3>
              <p>Help and Support</p>
              <p>FAQ</p>
            </Isi>
          </Link>
        </Section>
        <Copyright>
          <h1>
            Slicing by | <a href="https://riskymuhamad.my.id">Risky Muhamad</a>
          </h1>
        </Copyright>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #565350;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

const Section = styled.section`
  padding-top: 20vh;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #565350;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  img {
    width: 231px;
    height: 55px;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 150.8px;
      height: 35px;
    }
  }
`;

const Link = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Isi = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-right: 100px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #a2a5a8;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  @media only screen and (max-width: 600px) {
    h3 {
      margin-right: 0px;
      line-height: 0px;
      text-align: left;
      font-size: 15px;
    }

    p {
      line-height: 10px;
      font-size: 13px;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 80px;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #a2a5a8;

    a {
      text-decoration: none;
      color: #a2a5a8;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;
