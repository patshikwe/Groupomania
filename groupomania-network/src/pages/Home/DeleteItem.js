// Supprimer un élément
import trash from '../../assets/logo/trash-can.svg'
import styled from 'styled-components'

const Delete = styled.div`
  width: 2rem;
  img:hover {
    cursor: pointer;
    border-radius: 12px;
    transform: translateY(2px);
  }
`

const DeleteItem = () => {
  return (
    <Delete>
      <img src={trash} alt="Supprimer" title="Supprimer" />
    </Delete>
  )
}

export default DeleteItem
