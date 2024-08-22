import { VStack, Image, Text, Box, FormControl, Input,
  Button, Link,
  Center
 } from "native-base";
 import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png'
import { TEMAS } from "./estilos/temas";
import { Titulo } from "./components/Titulo";



export default function Login() {
  return (
    <VStack flex={1} alignItems="center" padding={5} justifyContent={"center"}>
      <Image source={Logo} alt="Logo Voll" />
      
      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <FormControl marginTop={3}>
          <FormControl.Label> Email</FormControl.Label>
          <Input
          placeholder="Insira seu endereço de Email" 
          size="lg" 
          width='100%'
          borderRadius="lg"
          backgroundColor='gray.100'
          shadow={3}
          />
        </FormControl>
        <FormControl marginTop={3}>
          <FormControl.Label> Senha</FormControl.Label>
          <Input
          placeholder="Insira sua senha" 
          size="lg" 
          width='100%'
          borderRadius="lg"
          backgroundColor='gray.100'
          shadow={3}
          />
        </FormControl>
      </Box>

      <Button
      width={'100%'}
      backgroundColor={'blue.800'}
      marginTop={10}
      borderRadius={'lg'}
      >
        Entrar
      </Button>
      <Link marginTop={2}>Esqueceu a senha?</Link>

      <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} marginTop={8}>
        <Text fontSize={'md'}>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color={'blue.500'} fontSize={'md'} fontWeight={"bold"}> Crie uma conta</Text>
          </TouchableOpacity>
      </Box>
    </VStack>
  );
}
