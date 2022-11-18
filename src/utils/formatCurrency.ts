export function formatCurrency(value: number, currency?: boolean) {
  if (currency) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  } else {
    return new Intl.NumberFormat('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }
}
