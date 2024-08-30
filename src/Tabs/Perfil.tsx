import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={'center'} padding={5}>
                <Titulo color={'blue.600'}>Meu perfil</Titulo>
                <Avatar size={'xl'} source={{uri: "https://github.com/mdl-n.png"}} mt={5}/>

                <Titulo color={'blue.600'}>Informações pessoais</Titulo>
                <Titulo fontSize={"lg"} >Mário da Luz Nobre</Titulo>
                <Text fontSize={'md'}>05/01/1998</Text>
                <Text fontSize={'md'}>Rio de Janeiro</Text>

                <Divider mt={5}/>

                <Titulo color={'blue.600'}>Histórico médico</Titulo>
                <Text fontSize={'md'}>Bronquite</Text>
                <Text fontSize={'md'}>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}