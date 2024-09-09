import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height 75px;
    background-color: #1E90FF;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size:24px;
    font-family: 'Roboto';
    border-top-radius: 10px;
    
    input{
        width: 100%;
        height: 75px;
        background-color: #1E90FF;
        color: #DCDCDC;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size:24px;
        font-family: 'Roboto';
        padding: 10px;
    }
    input:focus,input:hover{
        background-color:#4169E1 ;
        outline: none;
    }
`