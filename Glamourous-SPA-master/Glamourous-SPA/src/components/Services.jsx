import React from 'react';
import styled from "styled-components";
import service1 from "assets/service1.png";
import service2 from "assets/service2.png";
import service3 from "assets/service3.png";
import play from "assets/play.png";
import Title from './Title';
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "animation";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Escova",
      text: "Dê ao seu cabelo o tratamento que ele merece com nosso serviço de lavagem e escova. Oferecemos uma experiência completa de cuidados capilares, com produtos de alta qualidade e secagem profissional para um acabamento perfeito.",
      image: service1,
    },
    {
      type: "Cabelo",
      text: "Dê ao seu cabelo a atenção que ele merece com nosso tratamento capilar premium. Utilizamos produtos de alta qualidade e técnicas avançadas para nutrir, reparar e revitalizar seus fios, deixando-os mais fortes, macios e radiantes.",
      image: service2,
    },
    {
      type: "Cuidados com a Pele",
      text: "Desperte a beleza natural da sua pele com nosso serviço de cuidados personalizados, que nutrem, revitalizam e protegem sua pele, deixando-a radiante e saudável.",
      image: service3,
    },
  ];
  return <Section id="services" ref={element}>
    <Title value="serviços" />
    <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <div className="card-gradient-border" key={type}>
                <motion.div className={`services__service card-content${index === 1 ? ' card-content--primary' : ''}`}
                  variants={servicesAnimations}
                  animate={controls}
                  transition={{
                    delay: 0.03,
                    type: "tween",
                    duration: 0.8,
                  }}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    zIndex: 2,
                  }}
                >
                  <div className="services__service__image">
                    <img src={image} alt="Service" />  
                  </div>
                  <div className="services__service__title">
                    <span>0{index + 1}</span>  
                    <h2>{type}</h2>
                  </div>
                  <p className="services__service__description">{text}</p>
                  <img src={play} alt="Readmore" />
                </motion.div>
              </div>
            )
          })}
    </div>
    <div className="services-bottom-content">
      <p className="services-bottom-text">
        Descubra um universo de cuidados e bem-estar pensado especialmente para você. Nossa equipe está pronta para proporcionar experiências únicas, com carinho, profissionalismo e atenção aos detalhes. Venha se sentir ainda mais confiante e radiante com nossos serviços exclusivos!
      </p>
      <button className="saiba-mais-btn">Saiba mais</button>
    </div>
  </Section>
}

const Section = styled.section`
min-height: 100vh;
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  .card-gradient-border {
    position: relative;
    border-radius: 1.5rem;
    padding: 2.5px; /* Espessura da borda */
    background: conic-gradient(from 0deg, #e75480, #a259f7, #e75480);
    transition: box-shadow 0.3s;
    box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.10);
    overflow: visible;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 1.5rem;
      padding: 0;
      z-index: 1;
      background: conic-gradient(from 0deg, #e75480, #a259f7, #e75480);
      animation: spin 2.5s linear infinite;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
    .card-content {
      border-radius: 1.3rem;
      background: #fff;
      padding: 2rem;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-height: 350px;
      position: relative;
      z-index: 2;
      overflow: visible;
      color: var(--primary-color);
      .services__service__title span {
        color: var(--primary-color);
      }
      .services__service__title h2 {
        color: var(--secondary-color);
      }
      .services__service__description {
        color: var(--primary-color);
      }
      .services__service__image img {
        filter: none;
      }
      &:hover {
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        z-index: 3;
      }
    }
    .card-content--primary {
      background: var(--primary-color);
      color: #fff;
      .services__service__title span,
      .services__service__title h2,
      .services__service__description {
        color: #fff;
      }
      .services__service__image img {
        filter: brightness(0) invert(1);
      }
    }
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  &__service {
    padding: 2rem;
    &:nth-of-type(2) {
      background-color: var(--primary-color);
      .services__service__title {
        span {
          color: #fff;
        }
      }
      .services__service__description {
        color: #fff;
      }
    }
    &__image {
      margin-bottom: 3rem;
    }
    &__title {
      span {
        color: var(--primary-color);
        font-weight: bolder;
      }
      h2 {
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .services {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
.services-bottom-content {
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  gap: 2.5rem;
}
.services-bottom-text {
  font-size: 1.3rem;
  color: var(--primary-color);
  text-align: center;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.saiba-mais-btn {
  padding: 1rem 3rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  background: linear-gradient(90deg, #e75480, #a259f7);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(162, 89, 247, 0.15);
  transition: transform 0.2s, box-shadow 0.2s, background-position 0.5s;
  background-size: 200% 200%;
  background-position: left;
  animation: gradientMove 2s linear infinite alternate;
}
.saiba-mais-btn:hover {
  transform: scale(1.07);
  box-shadow: 0 4px 24px 0 rgba(231, 84, 128, 0.25);
  background-position: right;
}
@keyframes gradientMove {
  0% { background-position: left; }
  100% { background-position: right; }
}
`;

export default Services