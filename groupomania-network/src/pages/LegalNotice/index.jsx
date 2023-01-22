// Fichier mentions légales

import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Container = styled.section`
  border: dashed 2px ${colors.primary};
  display: grid;
  margin: 0.5rem;
  padding: 1rem;
  background: #dadae23b;
  color: #030304;
  text-shadow: #e9aeae5e -2px 0px 1px;
`
const TitleOne = styled.h1`
  margin-bottom: 1rem;
`
const TitleTwo = styled.h2`
  margin-top: 0.5rem;
`
const Paragraph = styled.p``

const index = () => {
  return (
    <Container>
      <TitleOne>Conditions générales</TitleOne>
      <TitleTwo>Informations pour les utilisateurs et utilisatrices</TitleTwo>
      <Paragraph>
        En vigueur au 03/12/2020<br></br> Conformément aux dispositions des
        Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
        Confiance dans l’économie numérique, dite L.C.E.N, il est porté à la
        connaissance des Utilisateurs du site www.groupomania.com les présentes
        Conditions générales. La connexion et la navigation sur le site
        (indiquer le nom du site) par l’Utilisateur implique acceptation
        intégrale et sans réserve des présentes mentions légales. Ces dernières
        sont accessibles sur le site à la rubrique « Conditions générales ».
      </Paragraph>
      <TitleTwo>ARTICLE 1 : L’éditeur</TitleTwo>
      <Paragraph>
        L’édition et la direction de la publication du site www.groupomania.com
        est assurée par TSHIMPAKA KWEKWE Patrick, domicilié Rue du Bonheur, dont
        le numéro de téléphone est 06333333336, et l'adresse e-mail est
        quedubonheur@mail.com.
      </Paragraph>
      <TitleTwo>ARTICLE 2 : L’hébergeur</TitleTwo>
      <Paragraph>
        L'hébergeur du site www.groupomania.com est la Société
        www.groupomania.com, dont le siège social est situé au sas, Rue Jean
        Rolls, 95150 Taverny , avec le numéro de téléphone : 01555555556.
      </Paragraph>
      <TitleTwo>ARTICLE 3 : Accès au site</TitleTwo>
      <Paragraph>
        Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance. En cas de modification, interruption ou
        suspension des services le site www.groupomania.com ne saurait être tenu
        responsable.
      </Paragraph>
      <TitleTwo>ARTICLE 4 : Collecte des données</TitleTwo>
      <Paragraph>
        Le site est déclaré à la Commission Nationale Informatique et Libertés
        (CNIL) pour la collecte des données concernant les utilisateurs.
      </Paragraph>
      <TitleTwo>ARTICLE 5 : Cookies</TitleTwo>
      <Paragraph>
        L’Utilisateur est informé que lors de ses visites sur le site, un cookie
        peut s’installer automatiquement sur son logiciel de navigation. En
        naviguant sur le site, il les accepte. Un cookie est un élément qui ne
        permet pas d’identifier l’Utilisateur mais sert à enregistrer des
        informations relatives à la navigation de celui-ci sur le site Internet.
        L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des
        paramètres figurant au sein de son logiciel de navigation.
      </Paragraph>
      <TitleTwo>ARTICLE 6 : Propriété intellectuelle</TitleTwo>
      <Paragraph>
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du site www.groupomania.com, sans
        autorisation de l’Editeur est prohibée et pourra entraînée des actions
        et poursuites judiciaires telles que notamment prévues par le Code de la
        propriété intellectuelle et le Code civil.
      </Paragraph>
    </Container>
  )
}

export default index
