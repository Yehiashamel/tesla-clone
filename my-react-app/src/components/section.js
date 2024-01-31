import React from 'react';
import styled from 'styled-components';
import  Fade  from 'react-reveal/Fade';

function Section(props) {
  
  return (
    
<Wrap bgImage = {props.backgroundImg}>
<Fade bottom>
    <ItemText>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </ItemText>
  </Fade>
  <Buttons>
    <Fade bottom>
      <ButtonGroup>
      <Button>
          {props.leftBtnText}
        </Button>
        <RightButton>
        {props.rightBtnText}
        </RightButton>

      </ButtonGroup>
      </Fade>
      <DownArrow src={require('./images/down-arrow.png')} />
      </Buttons>
</Wrap>
  )
}

;
export default Section

const Wrap = styled.div`
z-index:10;
height:100vh;
width:100vw;
background-position:center;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
background-image:${props => `url("${props.bgImage}")`};
background-repeat:no-reapeat;
background-size:cover;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
z-index:-1;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
  flex-direction:column;
}
`

const RightButton = styled.div`
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
text-transform:uppercase;
font-size:12px;
margin:10px;
cursor:pointer;
color:white;
margin:8px;
color:black;
background-color:white;
opacity:0.85;
`

const Button = styled(RightButton)`
color:white;
background-color:rgba(23, 26, 32, 0.8 );
opacity:0.65;
`

const DownArrow = styled.img`
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`