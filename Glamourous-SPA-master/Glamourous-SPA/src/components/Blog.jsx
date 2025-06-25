import React from 'react';
import styled from "styled-components";
import play from "assets/play.png";
import blogmaq from "assets/blogmaq.png";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "animation";


function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title:"JORNAL DO SALÃO",
      type: "SPA",
      description: "Nosso blog tem como objetivo te ajudar a encontrar respostas para suas dúvidas sobre cabelo e oferecer dicas de cuidados e produtos saudáveis.",
    },
    {
      title:"REFLEXOLOGIA NO CÉU",
      type: "Relaxamento",
      description: "Deixe suas preocupações de lado enquanto nossos terapeutas altamente qualificados te mimam com massagens e tratamentos personalizados.",
    },
    {
      title:"MEDITAÇÃO AO SOL",
      type: "Yoga",
      description: "Encontre paz interior e equilíbrio praticando yoga em nosso SPA. Nossas aulas são para todos os níveis, do iniciante ao avançado.",
    },
  ]
  return <Section id="blog" ref={element}>
    <Title value="Blog" />
    <div className="blogs">
        {blogsData.map(({ title, type, description }) => {
          return (
            <motion.div className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="image"></div>
              <div className="title">
                <h3>{title}</h3>  
              </div>
                <span className="type">{type}</span>
                <div className="description">
                  <p>{description}</p>  
                </div>
                <div className="more">
                  <img src={play} alt="Play" />
                  <span>Saiba mais</span>  
                </div>
            </motion.div>
          )
        })}
    </div>
    <div className="blog-bottom-content">
      <p className="blog-bottom-text">
        Fique por dentro das novidades, dicas e tendências do universo da beleza! Nosso blog é atualizado frequentemente para inspirar você a se cuidar cada vez mais.<br/>
        Quer receber conteúdos exclusivos? Cadastre-se e acompanhe tudo de perto!
      </p>
      <div className="blog-bottom-buttons">
        <button className="blog-btn blog-btn--primary">Ver todos os posts</button>
        <button className="blog-btn blog-btn--secondary">Assinar novidades</button>
      </div>
    </div>
    </Section>
}

const Section = styled.section`
min-height: 100vh;
position: relative;
.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
  .blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image {
      height: 15rem;
      background: url(${blogmaq}) no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      h3 {
        color: var(--secondary-color);
        font-size: 1.5rem;
      }
    }
    .type {
      color: var(--primary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .description {
      height: 10rem;
      color: var(--primary-color);
    }
    .more {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  margin: 2rem 0;
  .blogs {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    margin: 0 1rem;
  }
}
.blog-bottom-content {
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  gap: 2.5rem;
}
.blog-bottom-text {
  font-size: 1.2rem;
  color: var(--primary-color);
  text-align: center;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.blog-bottom-buttons {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.blog-btn {
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
.blog-btn--primary {
  background: linear-gradient(90deg, #e75480, #a259f7);
  color: #fff;
  animation: gradientMove 2s linear infinite alternate;
}
.blog-btn--primary:hover {
  transform: scale(1.07);
  box-shadow: 0 4px 24px 0 rgba(231, 84, 128, 0.18);
  background-position: right;
}
.blog-btn--secondary {
  background: #fff;
  color: var(--primary-color);
  border: 2px solid #e75480;
}
.blog-btn--secondary:hover {
  background: #e75480;
  color: #fff;
  border: 2px solid #e75480;
}
`;

export default Blog