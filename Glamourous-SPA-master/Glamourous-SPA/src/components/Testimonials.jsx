import React, { useState } from 'react';
import face from "assets/face.jpg";
import face2 from "assets/face2.jpg";
import face3 from "assets/face3.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "animation";

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      image: "assets/face.jpg",
      imageCircle: face,
      designation: "SPA",
      name: "Julie Baker",
      review:
      "O Perfection é de longe um dos melhores espaços de bem-estar, profissional em todos os aspectos, mas também muito acolhedor. Michelle e sua equipe dedicada fazem de tudo para atender suas necessidades e proporcionar o melhor tratamento. As massagens são imperdíveis e valem cada centavo. Recomendo muito uma visita!"
    },
    {
      image: "assets/face2.jpg",
      imageCircle: face3,
      designation: "Maquiagem Completa",
      name: "Gabriella",
      review:
      "O Perfection não é apenas mais um salão. É realmente diferenciado. Cada visita é sempre um prazer e você sempre se sente especial. Michelle nunca deixa de surpreender e sempre entrega algo além do esperado."
    },
    {
      image: "assets/face3.jpg",
      imageCircle: face2,
      designation: "Pele",
      name: "Natália",
      review:
      "O Perfection é de longe um dos melhores espaços de bem-estar, profissional em todos os aspectos, mas também muito acolhedor. Michelle e sua equipe dedicada fazem de tudo para atender suas necessidades e proporcionar o melhor tratamento. As massagens são imperdíveis e valem cada centavo. Recomendo muito uma visita!"
    },
  ];
  return (
    <Section ref={element}>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          {testimonials.map(({ image, imageCircle, designation, name, review }, index) => {
          return (
            <div className={`testimonial ${selected === index ? "active" : "hidden"}`} key={index}>
              <div className="image">
                <div className="circle2">
                  <img src={face === index ? image : imageCircle} alt="Loadmore" />
                </div>
              </div>
              <div className="title-container">
                <span className="designation">{designation}</span>
                <h3 className="title">{name}</h3>
              </div>
              <p className="description">{review}</p>
            </div>
          );
        
        })}

        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
     <button className={selected === 0 ? "active" : ""} onClick={() => setSelected(0)}></button>
     <button className={selected === 1 ? "active" : ""} onClick={() => setSelected(1)}></button>
     <button className={selected === 2 ? "active" : ""} onClick={() => setSelected(2)}></button>
        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.section`
overflow: hidden;

.container {
  min-height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .testimonials {
    display: flex;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    width: 30%;
    .testimonial {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .circle2 {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
        width: 10rem;
        border-radius: 10rem;
        overflow: hidden;
      }
      .circle2 img{
        position: absolute;
        display: block; 
        height: auto; 
        height: 10rem;
        width: 10rem;
        border-radius: 10rem;
        overflow: hidden;
      }
      
      
    }
    .hidden {
      display: none;
    }
    color: #fff;
    .designation {
      height: 8rem;
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button {
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: var(--secondary-color);
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active {
      background-color: transparent;
      border: 0.1rem solid var(--secondary-color);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .background {
    display: none;
  }
  .container {
    padding: 4rem 0;
    .testimonials {
      width: 80%;
      .testimonial {
        .description {
          height: 18rem;
        }
      }
    }
  }
}
`;

export default Testimonials