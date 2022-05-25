import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scroll } from "../atom";

const Container=styled.div`
    padding:0 25vw;
    padding-top:100px;
    z-index:200;
    position:relative;
    background:white;
`;
const Text=styled.div`
    line-height: 30px;
    text-align: center;
    color:#39454B;
    & > h1{
        font-size:51px;
        color:#39454B;
    }
    & > span{
        font-size:22px;
        line-height:40px;
    }
`;
const Img=styled.div`
    display:flex;
    & > div > div{
        position:relative;
        &::after{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            display:block;
            content:"";
            background-color:rgba(255,255,255,0.2);
        }
        & > img{
            width:100%;
            height:100%;
        }
    }
`;
const LeftImg=styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
`;
const RightImg=styled(motion.div)`
    width:50%;
    display:flex;
    flex-direction:column;
`;

function Four(){
    const scrollValue=useRecoilValue(scroll);
    const component=useRef();
    const leftImgAni=useAnimation();
    const rightImgAni=useAnimation();
    useEffect(()=>{
        if(scrollValue+window.innerHeight > component.current.offsetTop+component.current.clientHeight/1.8){
            leftImgAni.start({x:0, opacity:1})
            rightImgAni.start({x:0, opacity:1})
        }
        else{
            leftImgAni.start({x:"-50%", opacity:0})
            rightImgAni.start({x:"50%", opacity:0})
        }
    },[scrollValue]);
    return (
        <Container ref={component}>
            <Text>
                <h1>My Work</h1>
                <span>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</span>
            </Text>
            <Img>
                <LeftImg >
                    <motion.div initial={{x:"-50%", opacity:0}} animate={leftImgAni} transition={{duration:0.5, delay:0.1, type:"linear"}}  ><img src="images/fulls/01.jpg"></img></motion.div>
                    <motion.div initial={{x:"-50%", opacity:0}} animate={leftImgAni} transition={{duration:0.5, delay:0.2, type:"linear"}}  ><img src="images/fulls/03.jpg"></img></motion.div>
                    <motion.div initial={{x:"-50%", opacity:0}} animate={leftImgAni} transition={{duration:0.5, delay:0.3, type:"linear"}}  ><img src="images/fulls/05.jpg"></img></motion.div>
                </LeftImg>
                <RightImg>
                    <motion.div initial={{x:"50%", opacity:0}} animate={rightImgAni} transition={{duration:0.5, delay:0.1, type:"linear"}} ><img src="images/fulls/02.jpg"></img></motion.div>
                    <motion.div initial={{x:"50%", opacity:0}} animate={rightImgAni} transition={{duration:0.5, delay:0.2, type:"linear"}} ><img src="images/fulls/04.jpg"></img></motion.div>
                    <motion.div initial={{x:"50%", opacity:0}} animate={rightImgAni} transition={{duration:0.5, delay:0.3, type:"linear"}} ><img src="images/fulls/06.jpg"></img></motion.div>
                </RightImg>
            </Img>
        </Container>
    );
}
export default Four;