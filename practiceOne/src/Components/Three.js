import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {  useRecoilValue } from "recoil";
import styled from "styled-components";
import { scroll } from "../atom";

const Container=styled.div`
    position:relative;
    width:100vw;
    height:100vh;
    background-image: url("images/3.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment: fixed;
    z-index:10;
`;
const TextBox=styled(motion.div)`
    width:55%;
    height:340px;
    background-color:white;
    position:absolute;
    top:50%;
    left:0;
    padding: 0 40px;
    box-sizing: border-box;
    color:#39454B;
    & > h1{
        font-size:40px;
    }
    & > span{
        line-height: 30px;
        font-size:17px;
    }
`;
const ArrowBtn=styled.div`
    border:2px solid white;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom:none;
    background-image:url("images/dark-arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
    width:90px;
    height:90px;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    transition:background-color 0.3s;
    cursor: pointer;
    &:hover{
        background-color:rgba(255,255,255,0.1);
    }
`;
function Three(){
    const cardAni=useAnimation();
    const component=useRef();
    const scrollValue=useRecoilValue(scroll);
    useEffect(()=>{
        if(scrollValue+window.innerHeight>window.innerHeight*2.5&&scrollValue+window.innerHeight<window.innerHeight*3.3)
            cardAni.start({x:0});
        else
            cardAni.start({x:"-100%"});
    },[scrollValue]);
    return (
        <Container ref={component}>
            <TextBox initial={{x:"-100%", y:"-50%"}} animate={cardAni} transition={{type:"linear", duration:0.5}}>
                <h1>Who I Am</h1>
                <span>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.</span>
            </TextBox>
            <ArrowBtn />
        </Container>
    );
}
export default Three;