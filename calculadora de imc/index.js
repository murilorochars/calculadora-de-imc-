document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.form')
    let values = [];

    form.addEventListener('submit', function(event){
        event.preventDefault()
        const peso = parseFloat(document.getElementById("inputpeso").value)
        const altura = parseFloat(document.getElementById("inputaltura").value)
        
        
       

      
        function calcul(peso,altura){
            return peso/(altura*altura)
        }

        if (values.includes(peso) && values.includes(altura)) {
            alert('Os valores já foram inseridos.')
            return;
        }

        
        const resultado = calcul(peso,altura)

        const tr = document.createElement('tr')
        tr.innerHTML = `<tr>
        <td id="peso">${peso}Kg</td>
        <td id="altura">${altura}m</td>
        <td id="imc">${resultado}</td>
         </tr>`
      document.getElementById('res1').appendChild(tr)

      values.push(peso);
      values.push(altura);
      console.log(values)
                    
       
    })
});
