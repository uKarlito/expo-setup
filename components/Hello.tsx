import { StyleSheet, Text } from "react-native";

const Hello = () => {
    return <Text style={styles.hero}>Rélou Woudi!</Text>
}

export { Hello };

const styles = StyleSheet.create({
    hero: {
        fontSize: 64,
        textAlign: "center",
        color: "red",
    }
})