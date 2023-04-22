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
            <h1>Glamourous Parlour</h1>
          </div>  
          <div className="subTitle">
            <p>
              In our the Beauty Parlour transform yourself into a work of art, we offer high quality services in an elegant and comfortable environment.
            </p>  
          </div>
          <img src={play} alt="Play Button" />
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
    }
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