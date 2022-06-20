import styled from "styled-components"

export const ImovelCardsListContainer = styled.div`
width: min-content;
margin: auto;

.filter-box{
    margin: 30px 0;
    display: flex;
}

.search{
    height: 30px;

    input{
        border: 1px solid rgb(136, 236, 136);
        height: 93.33%;
        width: 250px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 0 10px;
    }

    button{
        height: 100%;
        width: 60px;
        border-top-right-radius: 5px;
        margin-left: -5px;
        background: #3ad73a;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    }
}

.filters{
    display: flex;
}

h1{
    width: 60vw;
}
`