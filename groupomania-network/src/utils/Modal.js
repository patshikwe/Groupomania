// Composant Modale avec des props
import ModalStyle from './style/ModalStyle'

const Modal = (props) => {
  return (
    <ModalStyle>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
        <p>{props.postMessage}</p>
      </div>
      <footer>
        <button onClick={props.onConfirmDelete}>Confirmer</button>
        <button onClick={props.toCancel}>Annuler</button>
      </footer>
    </ModalStyle>
  )
}

export default Modal
