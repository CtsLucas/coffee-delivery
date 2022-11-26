import { Bank, CreditCard, Money } from 'phosphor-react'
import { Control, Controller } from 'react-hook-form'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { ToggleButtonContainer } from './styles'

interface ToggleButtonProps {
  name: string
  control: Control
}

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <ToggleButtonContainer>
      <Controller
        {...props}
        render={({ field }) => (
          <ToggleGroup.Root
            {...field}
            className="toggle-group"
            type="single"
            value={field.value}
            onValueChange={field.onChange}
          >
            <ToggleGroup.Item className="toggle-group-item" value="credit">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </ToggleGroup.Item>

            <ToggleGroup.Item className="toggle-group-item" value="debit">
              <Money size={16} />
              <span>Cartão de débito</span>
            </ToggleGroup.Item>

            <ToggleGroup.Item className="toggle-group-item" value="money">
              <Bank size={16} />
              <span>Dinheiro</span>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        )}
      />
    </ToggleButtonContainer>
  )
}
