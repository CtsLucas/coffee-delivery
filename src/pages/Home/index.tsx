import { ItensService } from './components/ItensService'
import { Catalog } from './components/Catalog'
import { HomeContainer, Intro, Banner, HomeHeader } from './styles'
import banner from '../../assets/banner.png'

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
            <ItensService icon="shoppingCart" label="Compra simples e segura" />
            <ItensService
              icon="package"
              label="Embalagem mantém o café intacto"
            />
          </div>
          <div>
            <ItensService icon="timer" label="Entrega rápida e rastreada" />
            <ItensService
              icon="coffee"
              label="O café chega fresquinho até você"
            />
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
