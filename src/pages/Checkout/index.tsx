import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartContext } from '../../contexts/CartContext'
import { FormAddress } from './components/FormAddress'
import { PurchaseSummary } from './components/PurchaseSummary'
import { CheckoutContainer } from './styles'
import { gaEvents } from '../../lib/events'

const newOrderValidationSchema = zod.object({
  zipCode: zod.string().length(9, 'Digite um CEP válido!'),
  street: zod.string().min(1, 'Digite o nome da rua'),
  number: zod.string().min(1, 'Digite o número'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Digite o bairro'),
  city: zod.string().min(1, 'Digite a cidade'),
  uf: zod.string().min(1, 'Digite o UF'),
  methodPayment: zod.string().min(1, 'Selecione um método de pagamento'),
})

export function Checkout() {
  gaEvents.pageView('Checkout')

  const confirmFormOrder = useForm({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      district: '',
      city: '',
      uf: '',
      methodPayment: '',
    },
  })

  const { handleSubmit } = confirmFormOrder

  const navigate = useNavigate()
  const { handleConfirmOrder } = useContext(CartContext)

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
