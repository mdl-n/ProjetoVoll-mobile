import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "./Principal";
import Consultas from "./Consultas";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Explorar from "./Explorar";
import Perfil from "./Perfil";
import { color } from "native-base/lib/typescript/theme/styled-system";
import sizes from "native-base/lib/typescript/theme/base/sizes";
const Tab = createBottomTabNavigator();

const tabs = [
    {
        name: 'Principal',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    }
]

const screenoptions={
        tabBarStyle:{
            backgroundColor:'#002851'
        },
        tabBarActiveTintColor:'#339cff',
        tabBarInactiveTintColor:'#fff'
}
export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenoptions}>
        {tabs.map((tab) => (
            <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
                headerShown:false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name={tab.icon} color={color} size={size}/>
                )
            }}
            />
        ))
    }
         
        </Tab.Navigator>
    )
}
    
