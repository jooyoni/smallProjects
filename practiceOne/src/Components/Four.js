import styled from "styled-components";

const Container=styled.div`
    height:100vh;
    padding:0 25vw;
    z-index:999;
    position:relative;
    background:white;
`;
const Text=styled.div`
    line-height: 30px;
    text-align: center;
`;
function Four(){
    return (
        <Container>
            <Text>
                <h1>My Work</h1>
                <span>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</span>
            </Text>
        </Container>
    );
}
export default Four;