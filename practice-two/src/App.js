import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Container=styled.div`
  width:100vw;
  background-image:linear-gradient(to top, rgba(19,21,25,0.5), rgba(19,21,25,0.5)), url('images/bg.jpg');
  background-size: cover;
  min-height:100vh;
`;
const Content=styled.div`
  width:90%;
  margin:0 auto;
  font-family:"Source Sans Pro", sans-serif;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  @media screen and (max-width:1680px){
    width:45%;
  }
  @media screen and (max-width:1200px){
    width:90%;
  }
`;
const ContAni=keyframes`
  0%{
    height:0px;
  }
  100%{
    
  }
`;
const Cont=styled(motion.div)`
  overflow:hidden; 
  color:white;
  padding:0 1.75rem;
  display:flex;
  align-items: center;
  text-align:center;
  height:0px;
  animation:${ContAni} 1s;
  @media only screen and (max-width:1380px){
    height:220px;
  }
  @media screen and (min-width:1380px){
    height:270px;
  }

  transition:height 1s;

  & > div{
    margin:0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    & > h1{
      margin:0;
      margin-bottom:25px;
      font-size:2.5rem;
      font-weight:bold;
      letter-spacing: 0.5rem;
    }
    & > span{
      font-size:22px;
      letter-spacing: 0.2rem;
      line-height:1.875;
      @media screen and (max-width:1680px){
        font-size:12px;
        margin:0 auto;
      }
    }
  }
`;

const UpDoor=styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  border-bottom:1px solid white;
  &::after{
    width:1px;
    height:3rem;
    content:"";
    display:block;
    border-left:1px solid white;
  }
  & > div{
    border:1px solid white;
    display:flex;
    height:90px;
    width:90px;
    border-radius:50%;
    justify-content: center;
    align-items: center;
    &> svg{
      width: 2.5rem;
      fill:white;
    }
  }
`;
const DownDoor=styled.div`
  border-top:1px solid white;
  display:flex;
  flex-direction: column;
  align-items: center;
  &::before{
    width:1px;
    height:3rem;
    background-color: white;
    content:"";
    display:block;
  }
`;
const NavList=styled.ul`
  color:white;
  display:flex;
  justify-content: center;
  width:80%;
  @media screen and (max-width:800px){
    width:85%;
  }
  @media screen and (max-width:600px){
    width:99%;
  }
  &, & > li{
    list-style:none;
    margin:0;
    padding:0;
  }
  & > li{
    border:1px solid white;
    border-right:0px;
    width:25%;
    padding:25px 0;
    text-align: center;
    cursor:pointer;
    transition:background-color 0.5s;
    letter-spacing: 3px;
    &:hover{
      background-color: rgba(255,255,255,0.1);
    }
    @media screen and (max-width:1200px){
      padding:10px 0;
    }
  }
  & > li:last-child{
    border-right:1px solid white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  & > li:first-child{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
function App() {
  return (
    <Container >
      <Content>
        <UpDoor>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M507.9 196.4l-104-153.8C399.4 35.95 391.1 32 384 32H127.1C120 32 112.6 35.95 108.1 42.56l-103.1 153.8c-6.312 9.297-5.281 21.72 2.406 29.89l231.1 246.2C243.1 477.3 249.4 480 256 480s12.94-2.734 17.47-7.547l232-246.2C513.2 218.1 514.2 205.7 507.9 196.4zM382.5 96.59L446.1 192h-140.1L382.5 96.59zM256 178.9L177.6 80h156.7L256 178.9zM129.5 96.59L205.1 192H65.04L129.5 96.59zM256 421L85.42 240h341.2L256 421z"/></svg></div>
        </UpDoor>
        <Cont >
          <div>
            <h1>DIMENSION</h1>
            <span>A FULLY RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED FOR FREE UNDER THE CREATIVE COMMONS LICENSE.</span>
          </div>
        </Cont>
        <DownDoor>
          <NavList>
            <li>INTRO</li>
            <li>WORK</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </NavList>
        </DownDoor>
      </Content>
    </Container>
  );
}

export default App;
