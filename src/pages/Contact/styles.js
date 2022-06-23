import styled from "styled-components";

export const ContactContainer = styled.div`
svg{
    cursor: pointer;
    margin-left: 15px;
}

h3{
    padding: 40px 30px;
}

.contacts{
    margin-left: 30px;
}

.contacts{  
    border: 0.5px solid #cfcfcf;
    width: 400px;
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-evenly;
    padding-left: 25px;
}

figure{
    width: min-content;
    margin: auto;
}

@media (max-width: 800px){

    .contacts{
        max-width: 78%;
    }
    
    img{
        max-width: 90vw;
    }
}
`