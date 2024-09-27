// Fichier pour composant, message d'erreur
import styled from "styled-components";

export const ContainerItem = styled.div`
display: flex; 
width:10rem;
height: auto;
// text-align: justify;
border: 0;
background: #efefef;
color: red;
box-shadow: 0px 0px 15px rgb(100,000,000);
margin-top: 1em;

p{
font-weight: bold;
padding: 0 2px;
}
`


const ErrorMessage = () => {
    return (
        <ContainerItem>
            <p>
                Problème de connexion...
            </p>
        </ContainerItem>
    )
}
export default ErrorMessage