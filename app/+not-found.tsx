import { View,StyleSheet,Text } from "react-native";
import { Link,Stack } from "expo-router";
import React from "react";

export default function Notfound(){
    return(
        <>
        <Stack.Screen options={{title:'Error 404 Page Not Found'}}/>
        <View style= {styles.container}>
            <Text>Page Not Found</Text>
            <Text>Please go back to Home Screen</Text>
            {/* <Link href='/'>Home Screen</Link> */}
        </View>
        </>
    );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})