import { MapPinLine } from 'phosphor-react'
import {
  FormContainer,
  Input,
  SectionAddress,
  SectionAddressForm,
  SectionAddressHeader,
} from './styles'

export function FormAddress() {
  return (
    <FormContainer>
      <h2>Complete seu pedido</h2>

      <form action="">
        <SectionAddress>
          <SectionAddressHeader>
            <MapPinLine size={22} />
            <div className="header-content">
              <span className="header-title">Endereço de Entrega</span>
              <span className="header-subtitle">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </SectionAddressHeader>

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
        </SectionAddress>
      </form>
    </FormContainer>
  )
}
