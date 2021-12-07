import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <Copyright>Agensy 2021 &copy; All Rights Reserved</Copyright>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.div`
width: 100%;
height: 10%;
background-color: #111;
color: lightgray;
position: absolute;
bottom: 0;
@media only screen and (max-width: 480px) {
    height: 15%;
}
`

const Wrapper = styled.div`
padding: 30px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const List = styled.ul`
list-style: none;
display: flex;
`

const ListItem = styled.li`
margin-right: 20px;
@media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
    margin-bottom: 8px;
}
`

const Copyright = styled.span`
@media only screen and (max-width: 480px) {
    font-size: 14px;
}
`
