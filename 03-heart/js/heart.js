 
let data = [    
                [0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 1, 0],
                [1, 0, 0, 0, 0 ,0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],

            ]

let data2 = [    
                [0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 1, 2, 2, 1, 2, 2, 1, 0],
                [1, 2, 2, 2, 2 ,2 , 2, 2, 1],
                [0, 1, 2, 2, 2, 2, 2, 1, 0],
                [0, 0, 1, 2, 2, 2, 1, 0, 0],
                [0, 0, 0, 1, 2, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],

]
let shadow = ''

const color = {
    1:'#000',
    2:'red'
}

const element = document.querySelector("#heart")

let bool = true

setInterval( () => {
    console.log('interesabre')
    if(bool){
        printShadows(element, color, data2)
        bool = false
    }else{
        printShadows(element, color, data)
        bool = true
    }
},2000)



