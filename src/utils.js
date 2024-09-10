
export function currencyFormat(num) {
    if (!isNaN(num))
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return num;
}   


export function percentFormat(num){
    return Math.round((num * 100)) + ' %';
}