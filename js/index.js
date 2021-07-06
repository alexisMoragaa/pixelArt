printShadows(element, color, data)

function printShadows(element, colors, data ){

    shadow = ''
    element.style.boxShadow = shadow
    data.map(function(x, index){
        
      x.map(function(valu, ind){

            if(valu !== 0){
                shadow += `${ind}px ${index}px ${colors[valu]},`
            }
        })
        
    })
    
     shadow = shadow.substring(0, shadow.length -1)

     console.log(shadow)
     element.style.boxShadow = `${shadow}`
}