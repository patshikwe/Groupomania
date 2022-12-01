// Fichier Load(ondes) placé dans Home.jsx
const { default: styled } = require('styled-components')

const Waves = styled.div`
  width: 80px;
  height: 83px;
  position: absolute;
  left: 44%;
  z-index: 1;

  .opacity {
    opacity: 0;
    animation: opacity 2.9s ease-out;
  }
  @keyframes opacity {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid #c91010;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }

    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }

    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`

const Load = () => {
  return (
    <Waves>
      <div className="lds-ripple opacity">
        <div></div>
        <div></div>
      </div>
    </Waves>
  )
}

export default Load
