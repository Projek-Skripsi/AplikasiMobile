export function currencyFormat (num) {
  return 'Rp ' + num.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
