import styled from "styled-components"

export const ImovelDetailsContainer = styled.div`

width: 62vw;
margin: auto;

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

    svg{
        height: 70px;
        width: 70px;        
        color: white;
        opacity: 0.4;

        :hover{
            opacity: 1;
            height: 80px;
            width: 80px;
        }
    }

    .icons-passImg{
        width: inherit;
        height: inherit;
        position: absolute;
        max-width: inherit;
        display: none;
        align-items: center;
        justify-content: space-between;        
    }
}

.images-aside li{
    height: 60px;
    width: 60px;
    padding-left: 5px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0.6;
    }
}

.images-aside{

    li + li{
        padding-top: 10px;
    }
}

#selected{
    opacity: 1;
}

.divisor{
    width: 60%;
    height: 0.6px;
    background-color: rgb(208, 208, 208);
    margin: 20px 0;
}

h1, h2{
    font-size: x-large;
    font-weight: bold;
    padding: 30px 0;
}

.featuresBox{
    display: flex;
    flex-direction: column;

    h3{
        font-weight: bold;
    }
}

.features{
    display: flex;
    justify-content: space-evenly;
    padding: 10px 30px;

    h3{
        color: gray;
        padding: 5px 0;
    }
}

.adress, .contact{
    h3{
        font-weight: bold;
        padding: 10px 0;
    }
}

svg{
    margin: 0 5px;
    cursor: pointer;
}

@media (max-width: 800px){

    width: 95vw;
    padding: 0 10px;    

    .images-aside{
        display: none;
    }

    .images-main{
        width: 100%;

        .icons-passImg{
            display: flex;
        }
    }   
    
    .images-main svg{
        opacity: 1;
    }
}

`