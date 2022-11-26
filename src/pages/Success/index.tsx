import { useLocation } from 'react-router-dom'

import Illustration from '../../assets/illustration.png'
import { IconLabel } from '../../components/IconLabel'

import { OrderInfo, SuccessContainer } from './styles'

interface LocationProps {
  city: string
  complement: string
  district: string
  methodPayment: string
  number: string
  street: string
  uf: string
  zipCode: string
}

export function Success() {
  const { state } = useLocation()
  const { street, number, city, district, uf, methodPayment } =
    state as LocationProps

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <div>
        <OrderInfo>
          <IconLabel icon="mapPin">
            <div className="info">
              <p>
                Entrega em <strong>{`${street}, ${number}`}</strong>
              </p>

              <p>{`${district} - ${city}, ${uf}`}</p>
            </div>
          </IconLabel>

          <IconLabel icon="timer">
            <div className="info">
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </IconLabel>

          <IconLabel icon="currencyDollar">
            <div className="info">
              <p>Pagamento na entrega</p>
              <strong>
                {methodPayment === 'credit' && 'Cartão de Crédito'}
                {methodPayment === 'debit' && 'Cartão de Débito'}
                {methodPayment === 'money' && 'Dinheiro'}
              </strong>
            </div>
          </IconLabel>
        </OrderInfo>
        <img src={Illustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
