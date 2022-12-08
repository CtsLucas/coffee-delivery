import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import axios from 'axios'

import { formatCEP } from '../../../../utils/formatCep'
import { ToggleButton } from '../ToggleButton'

import {
  FormContainer,
  Section,
  SectionAddressForm,
  SectionFormHeader,
  SectionPayments,
  SectionPaymentsHeader,
  HeaderContent,
  Input,
} from './styles'

export function FormAddress() {
  const { register, control, setValue } = useFormContext()

  async function handleZipCode(zipCode: string) {
    if (!zipCode || zipCode.length < 8) {
      return
    }

    setValue('zipCode', formatCEP(zipCode))

    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      )
      setValue('street', data.logradouro)
      setValue('district', data.bairro)
      setValue('city', data.localidade)
      setValue('uf', data.uf)
    } catch (error) {
      console.error(error)
    }
  }

  const screenWidth = window ? window.screen.width : 0
  const layoutFormMobile = screenWidth ? screenWidth <= 500 : false

  return (
    <FormContainer>
      <h2>Complete seu pedido</h2>

      <Section>
        <SectionFormHeader>
          <MapPinLine size={22} />
          <HeaderContent>
            <span className="header-title">Endereço de Entrega</span>
            <span className="header-subtitle">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </HeaderContent>
        </SectionFormHeader>

        <SectionAddressForm>
          <div className="form-row">
            <Input
              id="zipCode"
              type="text"
              placeholder="CEP"
              maxLength={8}
              maxWidth={layoutFormMobile ? '100%' : 200}
              {...register('zipCode', {
                onBlur: (input) => handleZipCode(input.target.value),
              })}
            />
          </div>

          <div className="form-row">
            <Input
              id="street"
              type="text"
              placeholder="Rua"
              {...register('street')}
            />
          </div>
          <div className="form-row optional">
            <Input
              id="number"
              type="text"
              placeholder="Número"
              maxWidth={layoutFormMobile ? '100%' : 200}
              {...register('number')}
            />

            <Input
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </div>

          <div className="form-row">
            <Input
              id="district"
              type="text"
              placeholder="Bairro"
              maxWidth={layoutFormMobile ? '100%' : 200}
              {...register('district')}
            />

            <Input
              id="city"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />

            <Input
              id="uf"
              type="text"
              placeholder="UF"
              maxWidth={layoutFormMobile ? '100%' : 60}
              maxLength={2}
              {...register('uf')}
            />
          </div>
        </SectionAddressForm>
      </Section>

      <Section>
        <SectionPaymentsHeader>
          <CurrencyDollar size={22} />
          <HeaderContent>
            <span className="header-title">Pagamento</span>
            <span className="header-subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </HeaderContent>
        </SectionPaymentsHeader>

        <SectionPayments>
          <ToggleButton name="methodPayment" control={control} />
        </SectionPayments>
      </Section>
    </FormContainer>
  )
}
