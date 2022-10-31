import { useState } from 'react'
import { Bank, CreditCard, Money } from 'phosphor-react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { ToggleButtonContainer } from './styles'

export function ToggleButton() {
  const [value, setValue] = useState('')

  return (
    <ToggleButtonContainer>
      <ToggleGroup.Root
        className="toggle-group"
        type="single"
        value={value}
        onValueChange={(value) => {
          if (value) setValue(value)
        }}
      >
        <ToggleGroup.Item className="toggle-group-item" value="credito">
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </ToggleGroup.Item>

        <ToggleGroup.Item className="toggle-group-item" value="debito">
          <Money size={16} />
          <span>Cartão de débito</span>
        </ToggleGroup.Item>

        <ToggleGroup.Item className="toggle-group-item" value="dinheiro">
          <Bank size={16} />
          <span>Dinheiro</span>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </ToggleButtonContainer>
  )
}
