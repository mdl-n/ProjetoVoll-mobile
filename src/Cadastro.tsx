import { VStack, Image, Text, Box, FormControl, Input,
  Button, Link, Center, Checkbox, ScrollView } from "native-base"
 import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png'
import { TEMAS } from "./estilos/temas";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { useState } from "react";
import { secoes } from "../uteis/CadastroEntradaTexto";
export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0);
  
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
    <ScrollView flex={1} padding={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf={'center'}/>
      
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
        <Text color={'blue.800'} fontWeight={'bold'} fontSize={'md'}
        marginTop={2} marginBottom={2}>Selecione o plano:</Text>
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
      onPress={() => avancarSecao()}
      marginBottom={20}>
        Avançar
      </Button>

    </ScrollView>
  );
}
