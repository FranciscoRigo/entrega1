
alert("Bienvenido a Mcdowels")

        let hamburguesasPorComer = parseInt(prompt("cuantas hamburguesas quieres comer"))
        while (isNaN(hamburguesasPorComer)){
            hamburguesasPorComer=parseInt(prompt("eso no es un numero, vuelva a ingresar"))
        }

        let hamburguesasQueYAComi  = 0 
        while (hamburguesasQueYAComi < hamburguesasPorComer) {
            alert("come una  hamburguesa")
            hamburguesasQueYAComi = hamburguesasQueYAComi + 1
            alert("ya comi" + hamburguesasQueYAComi + "hamburguesa")
        }

        alert("Ahora hay que  pagar ")
