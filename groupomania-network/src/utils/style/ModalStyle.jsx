// Css pour la fenêtre modale

const { default: styled } = require('styled-components')

const ModalStyle = styled.div`
  position: fixed;
  z-index: 2;
  background: red;
  color: black;
  border: 5px solid red;
  border-radius: 5px;
  width: 90%;
  top: 3vh;
  overflow: hidden;
  header {
    padding-bottom: 4px;
  }
  h2 {
    text-shadow: 0px 1px black;
  }
  p {
    font-weight: bold;
  }
  p:nth-child(2) {
    background-color: white;
  }

  footer {
    display: flex;
    justify-content: space-around;
  }
  button {
    width: 5rem !important;
    @media (max-width: 300px) {
      width: 3.8rem !important;
    }
  }
`

export default ModalStyle
