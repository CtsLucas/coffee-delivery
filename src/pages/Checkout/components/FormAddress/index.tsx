import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

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
  const { register, control } = useFormContext()

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
              maxWidth={200}
              {...register('zipCode')}
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
          {/* TO-DO: Remover a classe "optional" quando houver conteúdo */}
          <div className="form-row optional">
            <Input
              id="number"
              type="text"
              placeholder="Número"
              maxWidth={200}
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
              maxWidth={200}
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
              maxWidth={60}
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
