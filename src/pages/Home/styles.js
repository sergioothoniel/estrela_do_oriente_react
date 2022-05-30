import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;

.spotlightsSection{
    margin-top: 70px;
}

.spotlightsSection>h2{
    font-size: x-large;
    color: rgb(94, 92, 92);
    margin: 70px 30px;
    font-weight: bolder;
}

.spotlights-box{
    display: flex;
    justify-content: space-evenly;
    padding: 0 10px;
    flex-wrap: wrap;    
}

@media (max-width: 800px){
    .spotlights-box{
        justify-content: center;
    }
}

`