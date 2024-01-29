import React from 'react';
import styled from 'styled-components';
import img from './images/model-s.jpg'
import image from './images/down-arrow.png';
function Section() {
  return (
<Wrap>
  <ItemText>
    <h1>Model S</h1>
    <p>order online for touchless delivery</p>
  </ItemText>
  <Buttons>
      <ButtonGroup>
      <Button>
          Custom Order
        </Button>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
      <DownArrow src={require('./images/down-arrow.png')} />
      </Buttons>
</Wrap>
  )
}


export default Section

const Wrap = styled.div`
height:100vh;
width:100vw;
background-position:center;
background-image: url(${img});
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
background-repeat:no-reapeat;
background-size:cover;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
  flex-direction:column;
}
`

const RightButton = styled.div`
background-color:rgba(23, 26, 32, 0.8 );
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.65;
text-transform:uppercase;
font-size:12px;
margin:10px;
cursor:pointer;
color:white;
margin:8px;
`

const Button = styled(RightButton)`
color:black;
background-color:white;
opacity:0.85;
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