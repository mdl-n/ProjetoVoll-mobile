import { Box, Button, Center, FormControl, Image, Input, Link, Text, View, VStack } from "native-base";

import { Titulo } from "../components/Titulo";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    return(
        <VStack padding={5} flex={1} justifyContent="center" alignItems={'center'}>
            <Image source={require('../src/assets/Logo.png')}
            alt="Logo Prefeitura" 
            size={'md'}
            resizeMode="contain"
            />
        <Titulo> Faça login em sua conta</Titulo>

        <Box marginTop={8}>
            <FormControl >
                <FormControl.Label>Usuario</FormControl.Label>
                <Input placeholder="Digite o seu usuario"
                size={"lg"}
                width={'100%'}
                borderRadius={"lg"}
                backgroundColor={'gray.100'}
                shadow={3}/>
            </FormControl>

            <FormControl marginTop={3}>
                <FormControl.Label>Senha</FormControl.Label>
                <Input placeholder="Digite a sua senha"
                size={"lg"}
                width={'100%'}
                borderRadius={"lg"}
                backgroundColor={'gray.100'}
                shadow={3}/>
            </FormControl>

        </Box>

            <Button 
            width={"100%"}
            backgroundColor={'blue.800'}
            marginTop={10}
            borderRadius={'lg'}
            >
                Entrar
            </Button>
            <Link marginTop={3}>Esqueceu sua senha?</Link>

            <Box flexDirection={'row'}>
                <Text fontSize={'md'}> Ainda não tem cadastro?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}> 
                    <Text color={'blue.800'} fontSize={'md'} fontWeight={'bold'}> Crie a sua conta</Text>
                    </TouchableOpacity>
            </Box>
        </VStack>
    )
}