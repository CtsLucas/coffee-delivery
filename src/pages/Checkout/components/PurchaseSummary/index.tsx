import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonConfirm,
  ButtonCounter,
  PurchaseSummaryContainer,
  ShoppingCart,
  ShoppingCartItem,
  SummaryPrice,
} from './styles'

export function PurchaseSummary() {
  return (
    <PurchaseSummaryContainer>
      <h2>Cafés selecionados</h2>

      <ShoppingCart>
        <ShoppingCartItem>
          <img src="/images/expresso_tradicional.png" alt="Expresso" />
          <div className="cart-content">
            <div className="cart-header">
              <h3>Expresso tradicional</h3>
              <span>R$ 9,99</span>
            </div>

            <div className="cart-count">
              <ButtonCounter>
                <button>
                  <Minus size={14} weight="bold" />
                </button>
                <span>1</span>
                <button>
                  <Plus size={14} weight="bold" />
                </button>
              </ButtonCounter>
              <ButtonCounter>
                <button>
                  <Trash size={14} weight="bold" />
                  <span>Remover</span>
                </button>
              </ButtonCounter>
            </div>
          </div>
        </ShoppingCartItem>

        <ShoppingCartItem>
          <img src="/images/latte.png" alt="Expresso" />
          <div className="cart-content">
            <div className="cart-header">
              <h3>Latte</h3>
              <span>R$ 9,99</span>
            </div>

            <div className="cart-count">
              <ButtonCounter>
                <button>
                  <Minus size={14} weight="bold" />
                </button>
                <span>1</span>
                <button>
                  <Plus size={14} weight="bold" />
                </button>
              </ButtonCounter>
              <ButtonCounter>
                <button>
                  <Trash size={14} weight="bold" />
                  <span>Remover</span>
                </button>
              </ButtonCounter>
            </div>
          </div>
        </ShoppingCartItem>

        <SummaryPrice>
          <div className="summary-row">
            <span>Total de itens</span>
            <span>R$ 19,98</span>
          </div>
          <div className="summary-row">
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div className="summary-row-title">
            <span>Total</span>
            <span>R$ 23,48</span>
          </div>
        </SummaryPrice>

        <ButtonConfirm>
          <button>Confirmar Pedido</button>
        </ButtonConfirm>
      </ShoppingCart>
    </PurchaseSummaryContainer>
  )
}
