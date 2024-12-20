import { Link } from "expo-router";
import { Text,StyleSheet,View } from "react-native";

export default function About(){

    return(
        <View style={styles.container}>
            <Text>Hi this about Page</Text>
            {/* <Link href='/any'>New Page</Link> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
}
);