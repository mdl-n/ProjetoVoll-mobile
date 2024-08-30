import { Avatar, Button, Text, VStack } from "native-base";

interface CardProps{
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiagendado?: boolean;
}

export function CardConsultas({
nome,
especialidade,
foto,
data,
foiAtendido,
foiagendado
}: CardProps){
    return(
        <VStack mb={5} w={'100%'} padding={5} backgroundColor={foiAtendido ? "blue.100"  : 'white'} borderRadius={'lg'}
        shadow={2}>
            <VStack flexDirection={'row'} >
            <Avatar size={'lg'} 
            source={{uri: foto}}/>
                <VStack paddingLeft={5}>
                    <Text fontSize={'md'} fontWeight={'bold'}>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            
            </VStack>
          
            <Button backgroundColor={'blue.800'} mt={4} borderRadius={'lg'}
            marginBottom={1}
            >{foiagendado ? "Cancelar consulta" : "Agendar consulta"}
            </Button>
        </VStack>
    )
}