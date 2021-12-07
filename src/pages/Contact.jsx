import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>
                        Questions? <br/> LEt's Get In Touch
                    </Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Your Name" />
                            <Input placeholder="Your Email" />
                            <Input placeholder="Subject" />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Your Message" />
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map}/>
                        <Text>123 Park Avenue St., New York, USA</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Phone} />
                        <Text>+1 631 1234 5678</Text>
                        <Text>+1 326 1234 5678</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Send} />
                        <Text>contact@lama.dev</Text>
                        <Text>sales@lama.dev</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact

const Container = styled.div`
height: 90%;
background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`

const Wrapper = styled.div`
height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px){
    flex-direction: column;
}
`

const FormContainer = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
    width: 100%;
}
`

const Title = styled.div`
margin: 50px;
margin-top: 0;
@media only screen and (max-width: 480px) {
margin: 20px;
}
`

const Form = styled.div`
height: 250px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
    flex-direction: column;
}
`

const LeftForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 20px;
@media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
}
`

const Input = styled.div`

`

const RightForm = styled.div`

`

const TextArea = styled.div`

`

const Button = styled.div`

`

const AddressContainer = styled.div`

`

const AddressItem = styled.div`

`

const Icon = styled.div`

`

const Text = styled.div`

`

