import { CurrencyDollar, MapPinLine } from 'phosphor-react'
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
  return (
    <FormContainer>
      <h2>Complete seu pedido</h2>

      <form action="">
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
                id="zip-code"
                type="text"
                placeholder="CEP"
                maxWidth={200}
              />
            </div>

            <div className="form-row">
              <Input id="street" type="text" placeholder="Rua" />
            </div>
            {/* TO-DO: Remover a classe "optional" quando houver conteúdo */}
            <div className="form-row optional">
              <Input
                id="number"
                type="text"
                placeholder="Número"
                maxWidth={200}
              />

              <Input id="complement" type="text" placeholder="Complemento" />
            </div>

            <div className="form-row">
              <Input
                id="district"
                type="text"
                placeholder="Bairro"
                maxWidth={200}
              />

              <Input id="city" type="text" placeholder="Cidade" />

              <Input id="uf" type="text" placeholder="UF" maxWidth={60} />
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
            <ToggleButton />
          </SectionPayments>
        </Section>
      </form>
    </FormContainer>
  )
}
