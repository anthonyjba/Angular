
//un servicio viene a ser un modelo
sampleApp.service("ordersModel", function(){
 
    this.getOrders = function(){
        return [
            {
                id : 0,
                nombre : "Israel Parra",
                edad : "32",
                email: "israelp@yahoo.com",
                tel : "654992030"
            },
            {
                id : 1,
                nombre : "Andrés Cuenca",
                edad : "24",
                email: "andres.cuenca@gmail.com",
                tel : "934274929"
            },
            {
                id : 2,
                nombre : "Juan Perez",
                edad : "28",
                email: "juan.perez@hotmail.com",
                tel : "623692034"
            },
            {
                id : 3,
                nombre : "Pepito",
                edad : "18",
                email: "pepito@alten.es",
                tel : "79052057"                
            },
            {
                id : 4,
                nombre : "Manuel",
                edad : "45",
                email: "Manuel.lopez@amazon.com",
                tel : "69898067"
            }
        ]
    }
 
});