import styled from 'styled-components'

export const Wrapper = styled.div `
    width:18.75rem;
    margin:0 auto;
    padding-bottom: 3rem;
    header {
    position: relative;
    }
    .title {
    width:10rem;
    height:5rem;
    margin-top: 0.5rem;
    position: relative;
    left:0.5rem;
    }
    header .title-photo {
        display: flex;
        padding:.2rem;
        justify-content: center;
        overflow: hidden;
    }
    header .title-photo img {
        width:5.625rem;
        height:10rem;
    }
    .match {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .match img {
        margin :2rem auto;
    }
`