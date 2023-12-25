import { StyleSheet } from "react-native";
import { myColors } from "./Colors";


export const Styles = StyleSheet.create({
    btn:{

    },
    btnBlue: {
        width: 72,
        height:72,
        backgroundColor: "#00F",
        borderRadius:12,
        display:"flex",
        alignContent:"center",
        alignItems:"center",
        
    },
    btnGray: {
        width: 72,
        height:72,
        backgroundColor: "#777",
        borderRadius:12,
        display:"flex",
        alignContent:"center",
        alignItems:"center",
    },
    btnLight: {
        width: 72,
        height:72,
        backgroundColor: "#eee",

    },
    btnDark: {
        width: 72,
        height:72,
        backgroundColor: "#111",
    },
    smallTextLight: {
        fontSize: 32,
        color: "#eee",
        // backgroundColor: "#eee",
    },
    smallTextDark: {
        fontSize: 32,
        color:"#111",
        // backgroundColor: "#111",
    }
    
});