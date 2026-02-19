import { fakestockapi } from './fakestockapi.js'

let i = 0
setInterval(function (){ 
    import('./fakestockapi.js')
    let stockInfo = fakestockapi()
    let {name,symbol, price, time} = stockInfo
    render(stockInfo)
    // console.log(name)
    // console.log(symbol)
    // console.log(price)
    // console.log(time)
    i++
    }

, 3000)

    let contentEl =  document.getElementById('content')
    let prevprice = 0
    let emoji = ''
    function render(stockInfo){
        let {name,symbol, price, time} = stockInfo
        if (prevprice < price){
            emoji = '💹'
        }
        else if (prevprice > price){
            emoji = '🔻'
        }
        else{
            emoji = '▶'
        }
        let details = `
            <p>Name: ${name}</p>
            <p>symbol: ${symbol}</p>
            <p>price: $ ${price} ${emoji}</p>
            <p>time: ${time}</p>
        `
        contentEl.innerHTML = details
        prevprice = price
    }

