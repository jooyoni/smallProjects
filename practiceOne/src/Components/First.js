import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scroll } from "../atom";

const Container=styled.div`
    position:relative;
    width:100%;
    height:100vh;
    background: url("images/1.jpg");
    background-size:cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
`;
const Img=styled.img`
    width:100%;
    height:100vh;
    vertical-align:top;
`;
const Text=styled.div`
    text-align: center;
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
    width:40vw;
    color:white;
    font-size:20px;
    @media screen and (max-width:1200px){
        width:60vw;
        font-size:17px;
    }
    @media screen and (max-width:728px){
        width:80vw;
    }
    & > div{
        line-height:30px;
    }
    & > div:first-child{
        font-weight: 900;
        font-size:60px;
        line-height: 90px;
    }
    & > div:nth-child(2){
        & > .underLine{
            text-decoration: underline;
        }
    }
    & > span{
        font-size:50px;
    }
`;
const ArrowBtn=styled.div`
    width:80px;
    height:80px;
    border:1px solid white;
    border-radius:50%;
    background-image: url("images/dark-arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    margin-top:40px;
    cursor: pointer;
    transition:background-color 0.3s;
    &:hover{
        background-color:rgba(255, 255, 255, 0.125);
    }
`;
function First(){
    function nextPage(){
        window.scrollTo({top:window.innerHeight, behavior:"smooth"})
    }
    return (
        <Container>
            <Text>
                <div>Hey.</div>
                <div>Welcome to <span style={{fontWeight:"900"}}>Big Picture</span> a responsive site template designed by <span className="underLine">HTML5 UP</span> and released for free under the <span className="underLine">Creative Commons Attribution license.</span></div>
                <ArrowBtn onClick={nextPage} />
            </Text>
        </Container>
    )
}
export default First;