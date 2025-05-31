import { Separator } from '../Separator'
import {
  ApupoContainer,
  ApupoContent,
  ApupoText,
  Avatar,
  Details,
  Username
} from './styles'

const Apupo = () => {
  return (
    <>
      <ApupoContainer>
        <Avatar />
        <ApupoContent>
          <Username>
            <a href="">marlonn</a>
          </Username>
          <ApupoText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            aliquid nemo ut rem sit <a href="">voluptatum</a> exercitationem
            perspiciatis saepe cumque.
          </ApupoText>
          <Details>3 minutos atrás</Details>
        </ApupoContent>
      </ApupoContainer>
      <Separator />
    </>
  )
}

export default Apupo
