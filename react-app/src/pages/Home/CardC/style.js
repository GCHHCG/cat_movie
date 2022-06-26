import styled from 'styled-components';

export const Wrapper = styled.div `
    background-color: #fff;
    width: 16.875rem;
    height:8.6rem;
    overflow:hidden;
    padding-top: 0.6rem;
    margin: 5.5rem auto 0;
    border-radius:10%;
    border:1px solid #e5e5e5;
    .card {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
    .card-title {
        display:flex;
        flex-direction: column;
        margin: 0.1rem 0.1rem;
    }
    .card-title p {
        margin-top: 0.3rem;
        color:#666;
        font-size: 0.7rem;
        text-align:center
    }
    .card-title img{
        width:2.1rem;
        height:2.1rem;
    }
    .card-content {
        display: flex;
        margin-top: 0.9rem;
    }

    .card-content img {
        width: 4.125rem;
        padding-left: 0.1rem;
        height: 3rem;
        border-radius:10%;
    }
`