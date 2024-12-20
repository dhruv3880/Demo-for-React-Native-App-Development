import { Pressable,StyleSheet,Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props={
    icon: keyof typeof MaterialIcons.glyphMap;
    label:string;
    onPress:()=>void;
};

export default function IconButton({icon,label,onPress}:Props){
    return(
        <Pressable style={styles.iconbtn}   onPress={onPress}>
            <MaterialIcons name={icon} size={24} color='#fff'/>
                <Text style={styles.iconlabel}>{label}</Text>
        </Pressable>
    );  
}


const styles=StyleSheet.create({
    iconbtn:{
        justifyContent:'center',
        alignItems:'center',
    },
    iconlabel:{
        color:'#fff',
        marginTop:12,
    },
});