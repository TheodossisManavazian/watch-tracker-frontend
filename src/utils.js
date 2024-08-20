
export function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


export function percentFormat(num){
    return Math.round((num * 100)) + ' %'
}