import { Button, Divider, ScrollView, Text, VStack } from "native-base";
import { CardConsultas } from "../components/CardConsultas";
import { Titulo } from "../components/Titulo";

export default function Consultas(){
    return(
        <ScrollView>
        <VStack padding={5}>
            <Titulo color={'blue.500'} marginBottom={5}>Minhas consultas</Titulo>
            <Button mt={2} marginBottom={5} bg={'blue.800'}>Agendar nova consulta</Button>
            <Titulo color={'blue.500'}
            textAlign={'left'}
            fontSize={20}
            mb={2}
            >Próximas consultas</Titulo>
            <CardConsultas
            especialidade="Cardiologista"
            nome="Dr. André"
            foto="https://github.com/mdl-n.png"
            data="30/08/2024"
            foiagendado
            />
            <Divider mt={5}/>

            <Titulo color={'blue.500'}
            textAlign={'left'}
            fontSize={20}
            mb={2}
            >Consultas passadas</Titulo>
            <CardConsultas
            especialidade="Cardiologista"
            nome="Dr. André"
            foto="https://github.com/mdl-n.png"
            data="30/08/2024"
            foiAtendido
            />
            <CardConsultas
            especialidade="Cardiologista"
            nome="Dr. André"
            foto="https://github.com/mdl-n.png"
            data="30/08/2024"
            foiAtendido
            />
            <CardConsultas
            especialidade="Cardiologista"
            nome="Dr. André"
            foto="https://github.com/mdl-n.png"
            data="30/08/2024"
            foiAtendido
            />
            <CardConsultas
            especialidade="Cardiologista"
            nome="Dr. André"
            foto="https://github.com/mdl-n.png"
            data="30/08/2024"
            foiAtendido
            />
        </VStack>
        </ScrollView>
    )
}