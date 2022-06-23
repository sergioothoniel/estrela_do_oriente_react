import styled from 'styled-components'

export const FooterContainer = styled.footer`

background-color: black;
color: white;
margin-top: 200px;
height: 200px;
padding: 40px 30px;
display: flex;

ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li{
        cursor: pointer;
    }
}

.footer-contacts{
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    svg{
        width: 25px;
        height: 25px;
        padding: 5px;
    }
}

.tel{

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;


    svg{
        width: 15px;
        height: 15px;
    }
}

span{
    display: flex;
    align-items: center;  
}

.socilaMedias svg{
    cursor: pointer;
}

@media (max-width: 800px){
    justify-content: space-evenly;
}
`