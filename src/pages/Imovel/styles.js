import styled from "styled-components"

export const ImovelDetailsContainer = styled.div`

.images{
    display: flex;
}

.images-main{
    height: 450px;
    width: 60vw;
    max-width: 650px;
    background-color: #cccbcbdb;
    display: flex;
    justify-content: center;

    img{
        height: 100%;
        max-width: 100%;
    }
}

.images-aside li{
    height: 60px;
    width: 60px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0.6;
    }
}

#selected{
    opacity: 1;
}

`