import React from 'react';
import styled from 'styled-components';
import Section from './section';
import modelS from './images/model-s.jpg';
import modelY from './images/model-y.jpg';
import modelX from './images/model-x.jpg';
import model3 from './images/Model-3.avif';
import solarPanel from './images/solar-panel.jpg';
import solarRoof from './images/solar-roof.jpg';
import Accesories from './images/accessories.jpg'

function home() {
  return (
    <Container>
        <Section
        title="Model S"
        description ="order online for touchless delivery"
        backgroundImg= {modelS}
        leftBtnText = "Custom order"
        rightBtnText = "Exsting inventory"
        />
        <Section
        title="Model Y"
        description ="order online for touchless delivery"
        backgroundImg= {modelY}
        leftBtnText = "Custom order"
        rightBtnText = "Exsting inventory"
        />
        <Section
                title="Model 3"
                description ="order online for touchless delivery"
                backgroundImg={model3}
                leftBtnText = "Custom order"
                rightBtnText = "Exsting inventory"
        />
        <Section
                title="Model X"
                description ="order online for touchless delivery"
                backgroundImg={modelX}
                leftBtnText = "Custom order"
                rightBtnText = "Exsting inventory"
        />
        <Section
                title="Lowest Cost Solar panels in America"
                description ="Money-back gurantee"
                backgroundImg={solarPanel}
                leftBtnText = "Order now"
                rightBtnText = "Learn more"
        />
        <Section
                title="Solar for New Roofs"
                description ="Solar Roof Costs Less than a New roof"
                backgroundImg={solarRoof}
                leftBtnText = "Order now"
                rightBtnText = "Learn more"
        />
        <Section
                title="Accessories"
                description =""
                backgroundImg={Accesories}
                leftBtnText = "Shop now"
                rightBtnText = 'learn more'
        />
    </Container>
  )
}

export default home



const Container = styled.div`
height:100vh;
z-index:10;
`

