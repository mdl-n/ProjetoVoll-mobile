import { VStack, Image, Text, Box, FormControl, Input,
  Button, Link, Center, Checkbox } from "native-base"
 import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png'
import { TEMAS } from "./estilos/temas";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { useState } from "react";


export default function Login() {

  const [numSecao, setNumSecao] = useState(0);
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
  
  function avancarSecao(){
    if(numSecao < secoes.length - 1){
    setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
    setNumSecao(numSecao-1)
    }
  }

  return (
    <VStack flex={1} alignItems="center" padding={5} justifyContent={"center"}>
      <Image source={Logo} alt="Logo Voll" />
      
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>

      <Box >
        {
          secoes[numSecao].entradaTexto.map(entrada => {
            return <EntradaTexto label ={entrada.
              label} placeholder ={entrada.
                placeholder} key={entrada.id}/>
          }
          )
        }
      </Box>

      <Box>
        {secoes[numSecao].checkbox?.map(checkbox => (
          <Checkbox key={checkbox.id} value={checkbox.value}>
            {checkbox.value}
          </Checkbox>
        ))}
      </Box>

      {numSecao > 0 && <Button
      width={'100%'}
      backgroundColor={'gray.400'}
      marginTop={10}
      borderRadius={'lg'}
      onPress={() => voltarSecao()}>
        Voltar
      </Button>}

      <Button
      width={'100%'}
      backgroundColor={'blue.800'}
      marginTop={4}
      borderRadius={'lg'}
      onPress={() => avancarSecao()}>
        Avançar
      </Button>

    </VStack>
  );
}
