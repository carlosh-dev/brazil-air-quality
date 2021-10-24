import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
    },

    animation: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200,
    },

    loadText: {
        marginTop: -30,
        color: theme.colors.primary,
        fontSize: 15,
    }
});

export default styles;