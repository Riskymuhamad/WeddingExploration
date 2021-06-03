import styled from "styled-components";
import GlobalFonts from "../fonts/fonts";

export default function Value() {
  return (
    <>
      <Container>
        <GlobalFonts />
        <Judul>OUR VALUE</Judul>
        <Section>
          <Card>
            <Gambar>
              <img src="/img/time.svg" alt="money" />
            </Gambar>
            <Tag>Save your time!</Tag>
            <Isi>
              Dengan menggunakan undangan elektonik kamu bisa menghemat waktu
              mu, tidak perlu mencetak, tidak merlu menyebarkan undangan secara
              manual, lebih cepat dan lebih hemat.
            </Isi>
          </Card>
          <Card>
            <Gambar>
              <img src="/img/money.svg" alt="money" />
            </Gambar>
            <Tag>Save more money</Tag>
            <Isi>
              Kami menawarkan harga yang murah, kamu tidak perlu membuang uangmu
              untuk biaya percetakan, dan menghabiskan ongkos untuk menyebar
              undangan ke keluarga dan kerabat mu.
            </Isi>
          </Card>
          <Card>
            <Gambar>
              <img src="/img/earth.svg" alt="money" />
            </Gambar>
            <Tag>Save the Earth</Tag>
            <Isi>
              Dengan menggunakan undangan elektronik kamu juga ikut
              berpartisipasi dalam menjaga bumi, karna dengan begitu akan lebih
              sedikit pohon yang di tebang untuk pembuatan kertas.
            </Isi>
          </Card>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.section`
  height: 100vh;
  width: 100%;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

const Judul = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #a2a5a8;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 78px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding-top: 25px;
    padding-bottom: 50px;
  }
`;
const Section = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 90%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Tag = styled.h3`
  text-align: center;
  font-family: "Playfair";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;
  letter-spacing: 0.02em;
  color: #565350;
  margin-top: 50px;
  margin-bottom: 34px;

  @media only screen and (max-width: 600px) {
    font-size: 22px;

    margin-top: 5px;
    margin-bottom: 0px;
  }
`;

const Isi = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #6f7376;
  width: 333px;
  height: 192px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Gambar = styled.div`
  width: 158px;
  height: 158px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    img {
      width: 113px;
      height: 113px;
      margin-left: 25px;
    }
    margin-bottom: -25px;
  }
`;
