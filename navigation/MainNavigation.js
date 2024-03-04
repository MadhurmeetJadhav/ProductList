import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import ProductDetails from "../screens/ProductDetails/ProductDetails";

const Stack = createStackNavigator()
 
const MainNavigator =()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={Routes.Home} component={Home}/>
            <Stack.Screen name={Routes.ProductDetails} component={ProductDetails}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;