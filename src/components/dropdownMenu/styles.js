import styled from "styled-components";

export const DropdownMenuContainer = styled.div`
height: 130px;
width: max-content;
background-color: white;
position: absolute;
right: 52px;
padding: 10px;
border: 1px solid gainsboro;


#dropdownMenu{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    li{
        margin: 0;
        font-size: smaller;
        font-weight: 500;
    }
}
`