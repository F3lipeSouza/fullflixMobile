import { StyleSheet } from "react-native";

const styleMovies = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1 // Your aspect ratio
    }
});

export default styleMovies