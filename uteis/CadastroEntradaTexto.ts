const secoes =[
    {
      id: 1, 
      titulo: 'Insira alguns dados basicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu Email'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
           label: 'CEP',
          placeholder: 'Digite o seu CEP'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Para finalizar, quais são os seus planos de saúde?',
      entradaTexto:[],
      checkbox:[
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        }
      ]
    }
  ]
  
  export {secoes}