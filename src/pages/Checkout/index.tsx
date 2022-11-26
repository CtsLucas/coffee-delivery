import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/CartContext'
import { FormAddress } from './components/FormAddress'
import { PurchaseSummary } from './components/PurchaseSummary'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const confirmFormOrder = useForm()
  const navigate = useNavigate()
  const { handleConfirmOrder } = useContext(CartContext)

  const { handleSubmit } = confirmFormOrder

  function confirmOrder(data: any) {
    navigate('/success', { state: data })
    handleConfirmOrder()
  }

  return (
    <FormProvider {...confirmFormOrder}>
      <CheckoutContainer onSubmit={handleSubmit(confirmOrder)}>
        <FormAddress /> {/* Reavaliar o nome */}
        <PurchaseSummary />
      </CheckoutContainer>
    </FormProvider>
  )
}
