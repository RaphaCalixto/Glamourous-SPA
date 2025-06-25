import React from 'react';
import styled from "styled-components";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { skillsBarAnimation } from "animation";

function Skills() {
  const [element, controls] = useScroll();
  const skillsData = [
    {
      name: "Limpeza de pele",
      amount: 75,
    },
    {
      name: "Cuidados com a pele",
      amount: 80,
    },
    {
      name: "SPA",
      amount: 85,
    },
    {
      name: "Maquiagem",
      amount: 90,
    },
    {
      name: "Penteados",
      amount: 95,
    },
  ];
  return (
    <Section id="skills" ref={element}>
      <Title value="habilidades" />
      <div className="skills__title">
        <p>Nossas habilidades</p>
        <h2>Conheça nossos diferenciais e expertise</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {
            skillsData.map(({ name, amount }) => {
              return (
                <motion.div className="skills__bars__bar" key={name}
                variants={skillsBarAnimation}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                >
                  <div className="container">
                    <progress value={amount} max="100" />
                    <span>{name}</span>
                  </div>
                  <h3>{amount}%</h3>
                </motion.div>
              );
            })
          }
        </div>
        <div className="skills__content">
          <p className="title">
            Serviços e Produtos de Beleza
          </p>
          <p className="description">
            Para ser uma profissional de beleza de sucesso, é essencial dominar diversas técnicas, ter sensibilidade para entender o que cada cliente deseja e estar sempre atualizada com as tendências do mercado. Nossa equipe é apaixonada pelo que faz e busca sempre entregar resultados incríveis, respeitando a individualidade de cada pessoa.<br/>
            <br/>
            Venha conhecer nossos diferenciais e descubra como podemos realçar ainda mais a sua beleza!
          </p>
          <div className="skills-bottom-buttons">
            <button className="skills-btn skills-btn--primary">Ver portfólio</button>
            <button className="skills-btn skills-btn--secondary">Fale com um especialista</button>
          </div>
          <div className="skills-bottom-icons">
            <img src={require('../assets/service1.png')} alt="Pincel" />
            <img src={require('../assets/service2.png')} alt="Creme" />
            <img src={require('../assets/service3.png')} alt="Rosto" />
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
  height: 140vh;
  background-color: var(--secondary-color);
  
  .sideTitle {
    h1 {
      color: #fff;
      font-size: 9rem;
      z-index: 10;
    }
  }
  .skills__title {
    padding: 6rem 10rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .skills {
    display: flex;
    padding: 0 5rem 0 20rem;
    gap: 10rem;
    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &__bar {
        display: flex;
        flex-direction: row-reverse;

        gap: 1rem;

        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress {
            width: 30rem;
            -webkit-appearance: none;
            appearance: none;
            &::-webkit-progress-bar {
              height: 3rem;
              background-color: var(--primary-color);
              border-radius: 20px;
            }
            &::-webkit-progress-value {
              background-color: white; 
              border-radius: 20px;
            }
          }
        }
        h3 {
          transform: rotate(90deg);
          color: #fff;
          font-size: 2rem;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: #fff;
      z-index: 2;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) { 
    overflow-x: hidden;
    padding: 2rem 0;
    .background {
      display: none;
    }
    .skills__title {
      padding: 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .skills {
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &__bars {
        padding: 0.2rem;
        gap: 0rem;
        align-items: center;
        justify-content: center;
        &__bar {
          .container {
            gap: 1rem;
            progress {
              width: 12rem;
              height: 0.5rem;
              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
      &__content {
        padding: 0 2rem;
      }
    }
  }
  .skills-bottom-buttons {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    justify-content: flex-start;
  }
  .skills-btn {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s, background-position 0.5s;
    background-size: 200% 200%;
    background-position: left;
    box-shadow: 0 2px 12px 0 rgba(162, 89, 247, 0.10);
  }
  .skills-btn--primary {
    background: linear-gradient(90deg, #e75480, #a259f7);
    color: #fff;
    animation: gradientMove 2s linear infinite alternate;
  }
  .skills-btn--primary:hover {
    transform: scale(1.07);
    box-shadow: 0 4px 24px 0 rgba(231, 84, 128, 0.18);
    background-position: right;
  }
  .skills-btn--secondary {
    background: #fff;
    color: var(--primary-color);
    border: 2px solid #e75480;
  }
  .skills-btn--secondary:hover {
    background: #e75480;
    color: #fff;
    border: 2px solid #e75480;
  }
  .skills-bottom-icons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2.5rem;
    opacity: 0.5;
    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      filter: grayscale(1) brightness(1.2);
    }
  }
`;
export default Skills