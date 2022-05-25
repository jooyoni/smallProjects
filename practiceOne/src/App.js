import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { scroll } from "./atom";
import First from "./Components/First";
import Four from "./Components/Four";
import Header from "./Components/Header";
import Three from "./Components/Three";
import Two from "./Components/Two";

const Container=styled.div`
  font-family: "Source Sans Pro", "sans-serif";
  & ul, & li{
    list-style:none; 
  }
  position:relative;
  width:100vw;
  overflow-x:hidden;
  box-sizing: border-box;  
`;
const Filter=styled(motion.div)`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:100;
  background-color:white;
`;

function App() {
  const filterAni=useAnimation();
  const {scrollY}=useViewportScroll();
  const setScroll=useSetRecoilState(scroll);
  useEffect(()=>{
    filterAni.start({opacity:0}).then(()=>filterAni.start({display:"none"}))
  },[]);
  useEffect(()=>{
    scrollY.onChange(()=>{
      setScroll(scrollY.get());
    })
  },[scrollY]);
  return (
    <Container className="container">
      <Header />
      <First />
      <Two />
      <Three />
      <Four />
      <Filter initial={{opacity:1}} animate={filterAni} transition={{duration:2}} />
    </Container>
  );
}

export default App;
