import { OrderInfo, SuccessContainer } from './styles'

import Illustration from '../../assets/illustration.png'
import { IconLabel } from '../../components/IconLabel'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <div>
        <OrderInfo>
          <IconLabel icon="mapPin">
            <div className="info">
              <p>
                Entrega em <strong>Rua João Daniel Martineli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </IconLabel>

          <IconLabel icon="timer">
            <div className="info">
              <p>Previsão de entrega </p>
              <strong>20 min - 30 min</strong>
            </div>
          </IconLabel>

          <IconLabel icon="currencyDollar">
            <div className="info">
              <p>Pagamento na entrega </p>
              <strong>Cartão de Crédito</strong>
            </div>
          </IconLabel>
        </OrderInfo>
        <img src={Illustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
