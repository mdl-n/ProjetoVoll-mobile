import { VStack, Image, Text, Box, FormControl, Input } from "native-base";
import Logo from './assets/Logo.png'
import { TEMAS } from "./estilos/temas";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" padding={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Text
      fontSize={"2xl"}
      fontWeight={"bold"}
      color={'gray.500'}
      textAlign="center"
      marginTop={5}
      >
        Faça login em sua conta
      </Text>
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
    </VStack>
  );
}
