import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    div.actions{
        display: flex;
        align-items: center;
        gap: 10px;
        
        a.remover {
            color: #FF0000;
        }
    }


    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`