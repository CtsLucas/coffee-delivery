import { FormAddress } from './components/FormAddress'
import { PurchaseSummary } from './components/PurchaseSummary'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormAddress /> {/* Reavaliar o nome */}
      <PurchaseSummary />
    </CheckoutContainer>
  )
}
