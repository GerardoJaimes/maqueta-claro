Page({
  data: {
    iconType:[
      'success', 
      'clear'
    ],
    usuario: {
      nombre: "Denis Gerardo Jaimes Laguado",
      linea: 31057119065,
      direccion: "CL 133 107B-69 PI 3",
      refPago: 73352075,
      fechaPago:'2022-10-20',
      valorPago:  124900,
    },
    saldo: '$ 0',
    buttomM:{
      title: 'Historial de pagos',
      src: 'src/lista.png',
    
    },
  
    button:[
    
      {
        title: 'Pagos automaticos',
        src: 'src/pagar.png',
        srcm:'src/flecha-correcta.png' 
      },
      {
        title: 'Pagos a otras cuentas',
        src: 'src/dolar.png',
        srcm:'src/flecha-correcta.png' 
      },
      {
        title: 'Desacarga tu factura',
        src: 'src/descargar.png',
        srcm:'src/flecha-correcta.png' 
      },
      {
        title: 'Factura por correo electronico',
        src: 'src/gmail.png',
        srcm:'src/flecha-correcta.png'
      },
      {
        title: 'Detalles de ultima facturación',
        src: 'src/tocar.png',
        srcm:'src/flecha-correcta.png' 
      },
     
      ],
     
       
  

  },


   

  

  
});
