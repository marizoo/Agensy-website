import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'


const MiniCard = () => {
    return (
        <Container>
            <Image src={Search} alt="search icon"/>
            <Text>Lorem ipsum dolor sit amet Lorem, ipsum..</Text>
        </Container>
    )
}

export default MiniCard

const Container = styled.div`
width: 200px;
height: 220px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
@media only screen and (max-width: 480px) {
    width: 50px;
}
`

const Image = styled.img`
width: 20px;
`

const Text = styled.p`
margin-top: 35px;
text-align: center;
@media only screen and (max-width: 480px) {
    font-size: 14px;
}
`