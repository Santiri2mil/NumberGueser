import { StyleSheet,Text, View } from "react-native-web";

const Header = ({title})=>{
    return(
        <View style={styles.header}>
            <Text style={style.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StylrSheet.create({
    header: {
     width:'100%',
     height:90, 
     paddingTop:36,
     backgroundColor:'f7287b',
     alignItem:'center',
     justyfyContent:"center"
    },
    headerTtle:{
        color:"black",
        fontSize: 18,
    }
})




















