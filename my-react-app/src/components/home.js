import React from 'react';
import styled from 'styled-components';
import Section from './section';
function home() {
  return (
    <Container>
        <Section
        title="Model S"
        description ="order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText = "Custom order"
        rightBtnText = "Exsting inventory"
        />
        <Section />
        <Section />
        <Section />
    </Container>
  )
}

export default home



const Container = styled.div`
height:100vh;
`

