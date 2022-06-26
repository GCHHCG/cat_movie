import styled from 'styled-components'

export const Wrapper = styled.div `
    background-image: linear-gradient(to bottom,#d45536,#f3f3f3);
    width:100%;
    height:20rem;
    header {
    color:whitesmoke;
    position: fixed;
    display: flex;
    text-align: center;
    padding-top: 1rem;
    z-index: 999;
    width: 100%;
    min-width: 600rem;
    span {
        margin-top: .3rem;
        margin-left:0.5rem;
    img {
        position: relative;
        top:-0.1rem;
        width:1.2rem;
        height:auto
       }
    }
     .title-h {
        font-size: 0.8rem;
    }
    span i {
        /* color:#fff; */
    }
     .search {
    display: inline-block;
    height: 1.75rem;
    line-height: 1.2;
    width: 10rem;
    margin-left: .9rem;
    padding: 0 1rem 0 1rem;
    border: 1px solid #ccc;
    font-size: 0.7rem;
    border-radius: 1.5rem;
    background-color: #faf8fa;
    overflow: hidden;
    color: #333;
    }
}
`