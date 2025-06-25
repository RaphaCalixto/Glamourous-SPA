import React from 'react'
import milestone1 from "assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackground from "assets/milestone-background.png";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { milestonesAnimations } from "animation";



function Milestones() {
  const [element, controls] = useScroll();

  const milestone = [
    {
      image: milestone1,
      data: "Clientes atendidos",
      amount: "627",
    },
    {
      image: milestone2,
      data: "Produtos utilizados",
      amount: "1.2M",
    },
    {
      image: milestone3,
      data: "Avaliações",
      amount: "3.7K",
    },
]
  return <Section ref={element}>
    <div className="background">
        <img src={milestoneBackground} alt="Milestone Background" />
    </div>
    <div className="milestones">
      {
        milestone.map(({ image, data, amount }) => {
          return (
            <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            >
              <p>{amount}</p>
              <span>{data}</span>  
              <img src={image} alt="Milestone" />
            </motion.div>
          );
        })
      }  
    </div>
  </Section>
}

const Section = styled.section`
height: 100vh;
background: linear-gradient(120deg, #e75480 0%, #a259f7 100%);
padding: 0 10rem;
position: relative;
.background {
  position: absolute;
  left: 0;
  bottom: -30%;
  img {
    z-index: 2;
    height: 43rem;
  }
}
&::after {
  content: "";
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  pointer-events: none;
  z-index: 0;
  background: url('/src/assets/service1.png') no-repeat 10% 20%/80px,
              url('/src/assets/service2.png') no-repeat 80% 10%/70px,
              url('/src/assets/service3.png') no-repeat 50% 80%/90px,
              url('/src/assets/play.png') no-repeat 30% 60%/50px,
              url('/src/assets/logo.png') no-repeat 70% 70%/60px;
  opacity: 0.18;
}
.milestones{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #fff;
  align-items: center;
  height: 100%;
  .milestone {
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    p {
      font-size: 5rem;
      font-weight: bolder;
      line-height: 3rem;
    }
    span {
      text-transform: uppercase;
      color: #ffffffc7;
    }
    img {
      height: 6rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 5rem 2rem;
  min-height: 100ch;
  height: 100%;
  .background {
    display: none;
  }
  .milestones {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
}
`;

export default Milestones;