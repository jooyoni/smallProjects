import styled from "styled-components";

const Container=styled.div`
    display:flex;
    justify-content:space-between;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    padding:0 15px;
    box-sizing: border-box;
    z-index:10;
    background-color: white;
`;
const Logo=styled.h1`
    color:#39454b;
    font-weight: 900;
    @media screen and (max-width:1920px){
        font-size:17px;
    }
`;
const Menu=styled.ul`
    display:flex;
    align-items: center;  
    & > li{
        color:#98c593;
        font-weight:400;
        margin-left:20px;
        font-size:15px;
        cursor:pointer;
    }
`;
function Header(){
    return (
        <Container>
            <Logo>Big Picture</Logo>
            <Menu>
                <li>Intro</li>
                <li>What I Do</li>
                <li>Who I Am</li>
                <li>My Work</li>
                <li>Contact</li>
            </Menu>
        </Container>
    )
}
export default Header;