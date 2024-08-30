import { Text, VStack, ScrollView, Image, Input, Box, View, Button } from "native-base";
import Logo from '../assets/Logo.png'
import { Titulo } from "../components/Titulo";
import { _Text } from "react-native";
import {depoimentos} from '../components/Mock';

export default function Principal(){
    return(
        <ScrollView>
            <VStack margin={2} flex={1} alignItems="center" padding={5} justifyContent={"center"}>
            <Image source={Logo} alt="Logo Voll" />
            <Titulo color={'blue.500'}>Boas vindas!</Titulo>

            <Input mt={"20%"} 
            placeholder="Digite a especialidade"
            borderRadius={10}
            fontSize={18}
            />
            <Input mt={4} 
            placeholder="Digite sua localização"
            borderRadius={10}
            fontSize={18}
            />
            <Button  p={4} borderRadius={10} mt={6} w={"100%"} backgroundColor={'blue.900'} >Buscar</Button>

            <Titulo marginTop={12} color={'blue.900'}>Depoimentos</Titulo>
            
           {
            depoimentos.map(depoimento =>(
                <Box key={depoimento.id} w={'100%'}
                borderRadius={'lg'} p={3}>
                    <Text color={'gray.300'}
                    fontSize={'md'} textAlign={'justify'}>
                        {depoimento.text}
                    </Text>

                    <Text color={"gray.500"}
                    fontSize={'lg'} fontWeight={'bold'}
                    alignSelf={'center'} mt={2}>
                        {depoimento.titulo}
                    </Text>

                </Box>
            ))
        }

            </VStack>
        </ScrollView>
    )
}