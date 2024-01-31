import React, {useState} from 'react';
import styled from 'styled-components';
import logo from './images/logo.svg';
import btn from './images/bars.svg';
import cancel from './images/xmark-solid.png';
function Header() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container>
      <a>
        <img src={logo} alt=""/>
      </a>
      <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model Y</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
      </Menu>
      <RigthMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        
        <CustomMenu src= {btn} onClick={() => setIsVisible(true)}/>      
      </RigthMenu>
      <BurgerNav  style={{ display: isVisible ? "block" : "none" }}>
        <CloseWraper>
        <CustomClose src={cancel} onClick={() => setIsVisible(false)} />
        </CloseWraper>
        <li><a href='#'> Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Existing inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-heigth:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

   a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
   }
   @media(max-width:768px){
    display:none;
   }
`
const RigthMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
 }
`
const CustomMenu = styled.img`
width:16px;
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:start;
transform:${props => props.show ? 'translateX(0)':'translateY(100)'};
transition:transform 0.2s ease-in;

li{
  padding:15px 0;
  border-bottom:1px solid rgba(0, 0, 0, 2);
  a{
    font-weight:600;
  }
}
`
const CustomClose = styled.img`
width:20px;
cursor:pointer;
display:block;
`
const CloseWraper = styled.div`
display:flex;
justify-content:flex-end;
`