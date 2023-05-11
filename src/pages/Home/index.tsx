import { Catalog } from './components/Catalog'
import { HomeContainer, Intro, Banner, HomeHeader } from './styles'
import banner from '../../assets/banner.png'
import { IconLabel } from '../../components/IconLabel'
import { gaEvents } from '../../lib/events'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <Intro>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div>
            <IconLabel icon="shoppingCart">Compra simples e segura</IconLabel>
            <IconLabel icon="package">
              Embalagem mantém o café intacto
            </IconLabel>
          </div>
          <div>
            <IconLabel icon="timer">Entrega rápida e rastreada</IconLabel>
            <IconLabel icon="coffee">
              O café chega fresquinho até você
            </IconLabel>
          </div>
        </Intro>
        <Banner>
          <img src={banner} alt="" />
        </Banner>
      </HomeHeader>
      <Catalog />
    </HomeContainer>
  )
}
