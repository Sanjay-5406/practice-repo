
export function fakestockapi() {

    return {  
        name: "QtechAI",
        symbol: "QTA",
        price:( Math.random() * 10 ).toFixed(2),
        time: (new Date()).toLocaleTimeString()

    }
        
}
