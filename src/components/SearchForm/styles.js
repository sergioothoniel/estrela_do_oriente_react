import styled from 'styled-components'

export const SearchFormContainer = styled.div`


background: rgb(220, 220, 220, 0.5);
height: 35%;
padding: 30px;
border-radius: 40px;
width: 35%;
min-width: 240px;

form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    h2{
        align-self: flex-start;
        font-size: 1.5em;
        font-weight: bolder;
    }

    .form-selections{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: medium;
        height: 25%;

        select{            
            width: 26.5%;
            margin: 0px 10px;
            padding: 5px;
            font-size: inherit;
        }

        input{
            width: 47%;
            font-size: inherit;
            padding: 5px;
        }
    }
        
}

@media (max-width: 800px){

    height: 290px;

    form{

        .form-selections{
            flex-direction: column;   
            height: 120px;
            
            select, input{
                width: 100%;
                margin: 0;
                padding: 5px 0;
            }
        }

    }  

    
}
`