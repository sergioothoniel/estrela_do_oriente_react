import styled from 'styled-components'

export const FooterContainer = styled.footer`

background-color: black;
color: white;
margin-top: 200px;
height: 200px;
padding: 40px 30px;

ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li{
        cursor: pointer;
    }
}
`