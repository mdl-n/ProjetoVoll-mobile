import { Box, Button, Center, Checkbox, FormControl, Image, Input, Link, Text, View, VStack } from "native-base";
import { Titulo } from "../components/Titulo";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { EntradaTexto } from "../components/EntradaTexto";
import { useNavigation } from '@react-navigation/native';

export default function Login(){

    const [numSecao, setNumSecao] = useState(0);
    const navigation = useNavigation();
    const secoes=[
        {
            id: 1,
            titulo: 'Digite os dados para criar sua conta',
            entradaTexto:[
                {
                    id: 1,
                    label: 'Usuário',
                    placeholder: 'Digite o seu usuário'
                },
                {
                    id: 2,
                    label: 'Senha',
                    placeholder: 'Digite a sua senha'
                },
                {
                    id: 3,
                    label: 'Confirmar senha',
                    placeholder: 'Confirme a sua senha'
                },
                {
                    id: 4,
                    label: 'Senha de segurança',
                    placeholder: 'Digte a senha de segurança'
                },
            ],
        },
            {
                id: 2,
                titulo: 'Tipo de conta:',
                entradaTexto:[],
                checkbox:[
                    {
                        id: 1,
                        value: 'Administrador (a)'
                    },
                    {
                        id: 2,
                        value: 'Porteiro (a)'
                    }
                ]
            }
    ]

    function  avancarSecao(){
        if (numSecao < secoes.length -1){
            setNumSecao(numSecao+1)
        }
    }
    function voltarSecao(){
        if (numSecao > 0){
            setNumSecao(numSecao - 1)
        }
    }

    return(
        <VStack padding={5} flex={1} justifyContent="center" alignItems={'center'}>
            <Image source={require('../src/assets/Logo.png')}
            alt="Logo Prefeitura" 
            size={'md'}
            resizeMode="contain"
            />
        <Titulo fontSize={'lg'}> {secoes[numSecao].titulo}</Titulo>

        <Box marginTop={8}>
            {
                secoes[numSecao].entradaTexto.map(entrada =>{
                    return <EntradaTexto label={entrada.label} placeholder={entrada.
                        placeholder} key={entrada.id} />
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

        <Button
            width={"100%"}
            backgroundColor={'gray.500'}
            marginTop={12}
            borderRadius={'lg'}
            onPress={() => {
                if (numSecao === 0) {
                    navigation.navigate('Login');
                } else {
                    voltarSecao();
                }
            }}
        >
                Voltar
            </Button>

            <Button 
            width={"100%"}
            backgroundColor={'blue.800'}
            marginTop={5}
            borderRadius={'lg'}
            onPress={() => avancarSecao()}
            >
                {numSecao === 0 ? 'Avançar' : 'Criar conta'}
            </Button>
           
        </VStack>
    )
}