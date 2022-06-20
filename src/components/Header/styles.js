import styled from "styled-components"

export const HeaderContainer = styled.header`
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 55px 10px 70px;
border-bottom: 1px solid #80808045;

svg{
    height: 1.5em;
    width: 1.5em;
    display: none;
}


ul{
    display: flex;

    li{
        cursor: pointer;
        font-size: medium;
        font-weight: bold;
    }

    li + li {
        margin-left: 120px;
    }
}

@media (max-width: 800px){
    ul{
        display: none;
    }

    svg{
        display: block;
    }
}
`