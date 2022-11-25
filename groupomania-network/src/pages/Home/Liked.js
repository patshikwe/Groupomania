// Fichier composant pour aimé (liked)
import axios from 'axios'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { Uidcontext } from '../../utils/HomeContext'
import colors from '../../utils/style/colors'

const ContainerHeart = styled.div`
  width: 40px;
  .boom {
    width: 40px;
    height: 35px;
    bottom: 20px;
    right: 3%;
    cursor: pointer;
    clip-path: polygon(
      10% 30%,
      10.964163780212402% 23.847850799560547%,
      13.781545639038086% 18.294574737548828%,
      18.167877197265625% 13.87390422821045%,
      23.698843002319336% 11.012911796569824%,
      29.84322738647461% 10.00069522857666%,
      36.00278854370117% 10.916526794433594%,
      41.5780029296875% 13.690196990966797%,
      46.03273391723633% 18.041913986206055%,
      48.937103271484375% 23.55021095275879%,
      49.99748992919922% 29.686431884765625%,
      50.87010192871094% 24.147005081176758%,
      53.59980392456055% 18.55011749267578%,
      57.916664123535156% 14.061568260192871%,
      63.402008056640625% 11.113999366760254%,
      69.52970886230469% 10.005491256713867%,
      75.7029037475586% 10.824935913085938%,
      81.32111358642578% 13.510400772094727%,
      85.84317779541016% 17.792112350463867%,
      88.8337631225586% 23.25417137145996%,
      89.9903564453125% 29.372953414916992%,
      89.65007781982422% 35.61106491088867%,
      88.46686553955078% 41.74618911743164%,
      86.52460479736328% 47.68563461303711%,
      83.93058776855469% 53.37174606323242%,
      80.79669952392578% 58.779991149902344%,
      77.22384643554688% 63.90948486328125%,
      73.2959976196289% 68.77303314208984%,
      69.0808334350586% 73.39031219482422%,
      64.63136291503906% 77.78248596191406%,
      59.98921585083008% 81.97077941894531%,
      55.18699645996094% 85.97466278076172%,
      50.25046920776367% 89.81172180175781%,
      45.30208206176758% 86.36652374267578%,
      40.485450744628906% 82.38014221191406%,
      35.82589340209961% 78.211181640625%,
      31.35537338256836% 73.84033966064453%,
      27.114566802978516% 69.24664306640625%,
      23.155170440673828% 64.40867614746094%,
      19.54315948486328% 59.30665588378906%,
      16.360923767089844% 53.926612854003906%,
      13.707906723022461% 48.26767349243164%,
      11.695180892944336% 42.35161209106445%,
      10.43166732788086% 36.232295989990234%,
      10% 30%
    );
    background: 5px 3px url(../../assets/logo/heart-border.png) no-repeat;
    background-size: 30px 29px;
    background-color: white;
  }
  .item {
    width: 100%;
    height: 0;
    background: linear-gradient(
      ${colors.primary},
      ${colors.tertieryDark},
      ${colors.secondary},
      ${colors.primary},
      ${colors.secondary}
    );
    animation: item 2.9s ease-in-out forwards;
    position: absolute;
    bottom: 0;
  }
  @keyframes item {
    100% {
      height: 100%;
    }
    50% {
      height: 50%;
    }
  }
`

const Liked = (props) => {
  let like = 1
  const userId = useContext(Uidcontext)
  const token = window.localStorage.getItem('token')
  const Id = props.IdPost
  const [liked, setLiked] = useState('')
  const message = "J'aime!"

  const handleLiked = async () => {
    const data = { like, userId }
    console.log("J'ai clické! =>", like, Id, userId, token)
    console.log('Valeur data =', data)

    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/post/${Id}/like`,
      data: data,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res)
        console.log(res.data.message)
        setLiked(res.data.message)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ContainerHeart>
      <div className="boom" onClick={handleLiked}>
        <div className={liked === message ? 'item' : null}></div>
      </div>
    </ContainerHeart>
  )
}

export default Liked
