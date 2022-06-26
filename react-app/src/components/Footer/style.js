import styled from 'styled-components'
export const FooterWrapper = styled.div`
   height: 2.5rem;
   background-color: white;
   position: fixed;
   padding-top:0.4rem;
   bottom: 0;
   left: 0;
   display: flex;
   right: 0;
   left: 0;
   justify-content: space-around;
   a {
      flex: 1;
      display:flex;
      flex-direction: column;
      color:#666;
      font-size: 0.7rem;
      align-items: center;
      justify-content: space-around;
      text-decoration: none;
      &.active {
        color:#fd7877; 
      }

      i {
        font-size:1.5em;
      }
   }
   
`