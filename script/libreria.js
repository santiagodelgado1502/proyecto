window.addEventListener('load',function(){
    let arroz=0.31;
    let leche=0.45;
    let azucar=0.45;
    let queso=2.41;
    let aceite=2.19;
    let arveja=1.60
    let cebollaco=0.40;
    let cebollabla=1.69;
    let papa=0.70;
    let huevo=3.00;
    let naranja=1.00;
    let mascarilla=1.30;
    let guantes=15.50;
    let alcohol=2.29;
    let gel=5.25;
    let acetaminofen=35.00;
    let ibuprofeno=6.00;
    let Naproxeno=2.0;
    let azitromicina=5.67;
    let amoxicilina=8.00;
    let hidroxicloroquina=14.70;
    let contenidoHTML=`
    <H1>Alimentos</H1>
    <table border=1>
    <tr >
        <td id="idtablaproductos">
            <img src="./imagenes/saco-1.jpg" height="250px" width="300px"><br>
            <a id="1" value="Arroz">Arroz `+arroz+`$/libra cantidad:</a><input type="number" id="cantidad1"></input> <button id="calcarrito1"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button> 
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/rey-leche-1-litro-comisariato-el-rancho-guayaquil.png" height="250px" width="300px"><br>
            <a id="2" value="leche">Leche `+leche+`$/litro cantidad:</a><input type="number" id="cantidad2"></input> <button id="calcarrito2"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button> 
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/azucar-incauca-extrafina-x-500-lb.jpg" height="250px" width="300px"><br>
            <a id="3" value="azucar">Azucar `+azucar+`$/libra cantidad:</a><input type="number" id="cantidad3"></input> <button id="calcarrito3"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/5a3ac32198f4d9.38903837151380048162654484.png" height="250px" width="300px"><br>
            <a id="4" value="queso">Queso `+queso+`$/libra cantidad:</a><input type="number" id="cantidad4"></input> <button id="calcarrito4"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
    
        <td id="idtablaproductos">
            <img src="./imagenes/girasol-normal-2.png" height="250px" width="300px"><br>
            <a id="5" value="aceite">Aceite `+aceite+`$/litro cantidad:</a><input type="number" id="cantidad5"></input> <button id="calcarrito5"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/arveja-lata-natural-grande.jpg" height="250px" width="300px"><br>
            <a id="6" value="arveja">Arveja verde `+arveja+`$/unidad cantidad:</a><input type="number" id="cantidad6"></input> <button id="calcarrito6"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/producto-grande-cebollamorada.png" height="250px" width="300px"><br>
            <a id="7" value="cebolla">Cebolla colorada `+cebollaco+`$/libra cantidad:</a><input type="number" id="cantidad7"></input> <button id="calcarrito7"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/—Pngtree—welsh white onion with onion_5047733.png" height="250px" width="300px"><br>
            <a id="8" value="cebolla">Cebolla blanca `+cebollabla+`$/7 unidades cantidad:</a><input type="number" id="cantidad8"></input> <button id="calcarrito8"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        
        <td id="idtablaproductos">
            <img src="./imagenes/31-0.png" height="250px" width="300px"><br>
            <a id="9" value="papas">Papas `+papa+`$/libra cantidad:</a><input type="number" id="cantidad9"></input> <button id="calcarrito9"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        
        <td id="idtablaproductos">
            <img src="./imagenes/huevo-rojo-aaa-x-30-unidades.png" height="250px" width="300px"><br>
            <a id="10" value="huevo">Huevo `+huevo+`$/cubeta(30 huevos) cantidad:</a><input type="number" id="cantidad10"></input> <button id="calcarrito10"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        
        <td id="idtablaproductos">
            <img src="./imagenes/toppng.com-naranja-png-1666x1200.png" height="250px" width="300px"><br>
            <a id="11" value="naranja">Naranja `+naranja+`$/15 naranjas cantidad:</a><input type="number" id="cantidad11"></input> <button id="calcarrito11"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        
    </tr>
    </table>

   <h1>Dispositivos Medicos</h1>

   <table border=1>
    <tr >
        <td id="idtablaproductos">
            <img src="./imagenes/pngwing.com.png" height="250px" width="300px"><br>
            <a id="12" value="mascarilla">Mascarilla N95 `+mascarilla+`$/unidad cantidad:</a><input type="number" id="cantidad12"></input> <button id="calcarrito12"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button> 
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/00453-0153150_05_1.png" height="250px" width="300px"><br>
            <a id="13" value="guantes">Caja de guantes `+guantes+`$/unidad cantidad:</a><input type="number" id="cantidad13"></input> <button id="calcarrito13"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button> 
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/40383431-01-BASEIMAGE-Midres.jpg" height="250px" width="300px"><br>
            <a id="14" value="alcohol">Alcohol antiseptico 250ml spray `+alcohol+`$/libra cantidad:<br></a><input type="number" id="cantidad14"></input> <button id="calcarrito14"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/gel-antibacterial-500ml.jpg" height="250px" width="300px"><br>
            <a id="15" value="gel">Gel antibacterial 500ml`+gel+`$/unidad cantidad:<br></a><input type="number" id="cantidad15"></input> <button id="calcarrito15"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
    
    </table>

    <h1>Medicamentos</h1>

    <table border=1>
    <tr >
        <td id="idtablaproductos">
            <img src="./imagenes/acetaminofen-500mg-de-500-tabletas-D_NQ_NP_832013-MEC31574047069_072019-O.webp" height="250px" width="300px"><br>
            <a id="16" value="acetaminofen">Acetaminofen 500mg `+acetaminofen+`$/500 tabletas cantidad:<br></a><input type="number" id="cantidad16"></input> <button id="calcarrito16"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button> 
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/unnamed.png" height="250px" width="300px"><br>
            <a id="17" value="ibuprofeno">Ibuprofeno 400mg `+ibuprofeno+`$/100 tabletas cantidad:<br></a><input type="number" id="cantidad17"></input> <button id="calcarrito17"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button> 
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/naproxeno_500_mg_la_sante-43885-1560957026.png" height="250px" width="300px"><br>
            <a id="18" value="Naproxeno 500mg">Naproxeno 500mg `+Naproxeno+`$/10 tabletas cantidad:<br></a><input type="number" id="cantidad18"></input> <button id="calcarrito18"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/azitromicina.png" height="250px" width="300px"><br>
            <a id="19" value="azitromicina">Azitromicina 500mg `+azitromicina+`$/3 tabletas cantidad:<br></a><input type="number" id="cantidad19"></input> <button id="calcarrito19"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/amoxicilina_500_mg_ag-18184-1570134081.png" height="250px" width="300px"><br>
            <a id="20" value="amoxicilina">Amoxicilina 500mg `+amoxicilina+`$/50 tabletas cantidad:<br></a><input type="number" id="cantidad20"></input> <button id="calcarrito20"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        <td id="idtablaproductos">
            <img src="./imagenes/osteomuscular_hidroxicloriquina_200mg.png" height="250px" width="300px"><br>
            <a id="21" value="hidroxicloroquina">Hidroxicloroquina 200mg `+hidroxicloroquina+`$/unidad cantidad:<br></a><input type="number" id="cantidad21"></input> <button id="calcarrito21"><img src="./imagenes/pngocean.com (1).png" width="30px" height="15px"></button>
        </td>
        
    </table>
    `
    
    divcontenedor.innerHTML=contenidoHTML;
    let sumatoria=0;

    calcarrito1.addEventListener('click',function(){

        let subtotal=0;
        subtotal=arroz*cantidad1.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito2.addEventListener('click',function(){

        let subtotal=0;
        subtotal=leche*cantidad2.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito3.addEventListener('click',function(){

        let subtotal=0;
        subtotal=azucar*cantidad3.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito4.addEventListener('click',function(){

        let subtotal=0;
        subtotal=queso*cantidad4.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito5.addEventListener('click',function(){

        let subtotal=0;
        subtotal=aceite*cantidad5.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito6.addEventListener('click',function(){

        let subtotal=0;
        subtotal=arveja*cantidad6.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito7.addEventListener('click',function(){

        let subtotal=0;
        subtotal=cebollaco*cantidad7.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito8.addEventListener('click',function(){

        let subtotal=0;
        subtotal=cebollabla*cantidad8.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito9.addEventListener('click',function(){

        let subtotal=0;
        subtotal=papa*cantidad9.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito10.addEventListener('click',function(){

        let subtotal=0;
        subtotal=huevo*cantidad10.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito11.addEventListener('click',function(){

        let subtotal=0;
        subtotal=naranja*cantidad11.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito12.addEventListener('click',function(){

        let subtotal=0;
        subtotal=mascarilla*cantidad12.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito13.addEventListener('click',function(){

        let subtotal=0;
        subtotal=guantes*cantidad13.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito14.addEventListener('click',function(){

        let subtotal=0;
        subtotal=alcohol*cantidad14.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito15.addEventListener('click',function(){

        let subtotal=0;
        subtotal=gel*cantidad15.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito16.addEventListener('click',function(){

        let subtotal=0;
        subtotal=acetaminofen*cantidad16.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito17.addEventListener('click',function(){

        let subtotal=0;
        subtotal=ibuprofeno*cantidad17.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito18.addEventListener('click',function(){

        let subtotal=0;
        subtotal=Naproxeno*cantidad18.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito19.addEventListener('click',function(){

        let subtotal=0;
        subtotal=azitromicina*cantidad19.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito20.addEventListener('click',function(){

        let subtotal=0;
        subtotal=amoxicilina*cantidad20.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    calcarrito21.addEventListener('click',function(){

        let subtotal=0;
        subtotal=hidroxicloroquina*cantidad21.value;
        sumatoria=sumatoria+subtotal;
        alert("Calculo precio por cantidad= $"+subtotal+"     total= $"+sumatoria);

    })
    
    
})


