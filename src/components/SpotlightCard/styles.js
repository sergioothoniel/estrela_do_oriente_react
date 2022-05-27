import styled from "styled-components"

export const SpotlightCardContainer = styled.div`

border: solid 0.5px #c0c0c0;
border-top: none;
border-radius: 10%;
align-items: center;
display: flex;
flex-direction: column;
width: 23vw;
min-width: 250px;
max-width: 360px;
cursor: pointer;

:hover{
    box-shadow: 8px 7px 30px rgb(26 25 25);
}

figure{
    height: 30%;
    width: 100%;
   
}

img{
    width: 100%;
    max-height: 100%;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
}

h2, h3{
    align-self: flex-start;
    padding: 15px 10px;
}

h3{
    font-size: small;
}

h1{
    padding-top: 30px;
    font-size: x-large;
    font-weight: revert;
}

.data{
    display: flex;
    width: 80%;    
    justify-content: space-around;
    margin: 60px 0 50px 0;
}

.data-item{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.data-item img{
    height: 16px;
    width: 21px;
}

.data-item span{
    font-size: 0.75em;
    color: rgb(94, 92, 92);
    margin-top: 5px;
}

@media (max-width:800px){
    width: 90vw;
    margin-bottom: 20px;
    margin-right: 10px;
}

`