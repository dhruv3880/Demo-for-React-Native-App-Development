import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.circlebtn} onPress={onPress}>
                <MaterialIcons name="add" size={38} color='#25292e' />
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        container: {
            width: 84,
            height: 84,
            marginHorizontal: 60,
            borderWidth: 4,
            borderColor: '#ffd33d',
            borderRadius: 42,
            padding: 3,
        },
        circlebtn: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 42,
            backgroundColor: '#fff'
        },
    }
);