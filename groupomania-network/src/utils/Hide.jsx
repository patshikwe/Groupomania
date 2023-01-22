// Rideau occultant

import styled from 'styled-components'

const Hiden = styled.div`
  .hiden {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #000000de;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 1;
    animation: hiden 2.9s ease-in-out forwards;
  }
  @keyframes hiden {
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`

const Hide = () => {
  return (
    <Hiden>
      <div className="hiden"></div>
    </Hiden>
  )
}

export default Hide
