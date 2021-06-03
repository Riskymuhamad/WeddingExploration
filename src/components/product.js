import styled from "styled-components";
import GlobalFonts from "../fonts/fonts";

export default function Product() {
  return (
    <>
      <Container>
        <GlobalFonts />
        <Mobile>OUR PRODUCT</Mobile>
        <Bagi>
          <Bagian>
            <Nama>OUR PRODUCT</Nama>

            <Judul>
              Kami membuat <br />
              undangan pernikahan untuk mu!
            </Judul>

            <Paragraf>
              Buat dan desain undangan sesuka mu, undangan mu akan menjadi
              memori yang bagus untuk pernikahan mu juga, ayo buat undangan mu
              sekarang!
            </Paragraf>

            <Aksi>
              <a href="Mulai">
                <Tombol>Mulai sekarang</Tombol>
              </a>

              <Or>atau</Or>

              <Klik>
                <a href="Pelajari">Pelajari lebih</a>
              </Klik>
            </Aksi>
          </Bagian>

          <Gambar>
            <img src="/img/dompet.png" alt="dompet" />
          </Gambar>
        </Bagi>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: inline-block;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;

  background: linear-gradient(
    287.08deg,
    rgba(86, 83, 80, 0.2) 0%,
    rgba(196, 196, 196, 0) 61.99%
  );
`;

const Nama = styled.h5`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #a2a5a8;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Mobile = styled.h5`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #a2a5a8;
  text-align: center;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Judul = styled.h1`
  margin-top: 30px;
  font-family: "Playfair";
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  letter-spacing: 0.02em;
  color: #565350;

  @media only screen and (max-width: 600px) {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.02em;
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
  margin-top: 50px;
  margin-bottom: 100px;
  width: 367px;
  height: 126px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 126px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

const Tombol = styled.button`
  background: #565350;
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.012em;
  width: 221.65px;
  height: 70.31px;
  border: none;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    width: 125.83px;
    height: 39.91px;
  }
`;

const Bagian = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Gambar = styled.div`
  margin-right: 30px;
  filter: drop-shadow(0px 30px 40px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin-right: 0px;
    margin-top: -90px;

    img {
      width: 250px;
      height: 232px;
      margin-left: -20px;
    }
  }
`;

const Bagi = styled.div`
  width: 90%;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const Or = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.012em;
  color: #656766;
  margin: auto 30px;
`;

const Klik = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.012em;
  color: #bdbcbc;
  margin: auto 0px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #bdbcbc;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Aksi = styled.div`
  display: flex;
`;
