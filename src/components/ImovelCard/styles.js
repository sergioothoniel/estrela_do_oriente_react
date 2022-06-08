import styled from "styled-components"

export const ImovelCardContainer = styled.div`
display: flex;
height: 200px;
border: 1px solid rgb(177, 171, 171);
border-radius: 10px;
align-items: center;
cursor: pointer;
width: 60vw;
margin: 30px 0;

:hover{
    box-shadow: 8px 7px 30px rgb(26 25 25);
}

figure{
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e7e7e7;

    img{
        max-width: 100%;
        max-height: 100%;
    }
}

.details{
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    margin-left: 20px;
    align-items: center;
    

    h3{
        width: 380px;
        height: 33px;        
        font-weight: bold;
    }

    h4{
        margin-left: 15px;
        text-align: center;
        color: #35358f;
        font-weight: bold;
    }

    h5, h6{
        height: min-content;
        width: 100%;
    }

    h5{
        font-size: smaller;
        font-weight: bold;
    }

    h6{
        font-size: small;
        color: #545252;
    }
}

@media (max-width: 800px){
    flex-direction: column;
    width: 95vw;
    height: 350px;

    figure{
        width: 100%;
        height: 200px;
    }

    .details{
        flex-direction: column;
        width: 90%;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0;

        h3, h4, h5, h6{
            width: 100%;
            text-align: center;
        }
    }
}
`