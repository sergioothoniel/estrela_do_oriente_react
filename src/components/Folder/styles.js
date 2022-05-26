import styled from "styled-components"

export const FolderContainer = styled.section`
width: 100vw;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;



h1{
    font-size: 3em;
    font-weight: bolder;
    color: white;
}

@media (max-width: 800px){ 

    h1{
        display: none;
    }
}
`