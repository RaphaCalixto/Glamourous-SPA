import React from 'react';
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Glamourous SPA</h1>
          </div>  
          <div className="subTitle">
            <p>
              No Glamourous SPA, você se transforma em uma verdadeira obra de arte!<br/>
              Oferecemos serviços de altíssima qualidade em um ambiente elegante, acolhedor e pensado para o seu bem-estar.<br/>
              Sinta-se especial desde o primeiro momento e descubra o prazer de cuidar de si com quem entende de beleza e autoestima.
            </p>
            <p className="extra-text">
              Venha viver uma experiência única, com profissionais apaixonados pelo que fazem e prontos para valorizar ainda mais a sua beleza natural.<br/>
              Aqui, cada detalhe é pensado para você relaxar, se cuidar e sair renovada. Agende seu horário e descubra o verdadeiro significado de bem-estar e autoestima elevada!
            </p>
          </div>
          <img src={play} alt="Botão Play" />
        </div>  
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.15);
    z-index: 1;
    pointer-events: none;
  }
  .home{
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 4.7rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
      .extra-text {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: #fff;
        opacity: 0.85;
        max-width: 90%;
      }
    }
  }
  .home, .content, .title, .subTitle, .extra-text, img {
    position: relative;
    z-index: 2;
  }
 
        @media screen and (min-width: 280px) and (max-width: 1080px) {
          .home {
            .content {
              padding-left: 2rem;
              width: 100%;
              margin-bottom: 2rem;
              .title {
                h1 {
                  font-size: 3.5rem;
                  line-height: 4rem;
                }
              }
          }
        }
      `;

export default Home