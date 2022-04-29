import { useState } from "react";
import { StyleSheet,Text, View } from "react-native";
import { Button, TextInput } from "react-native-web";


const StartGamesScreen =()=>{
    return(
        <View>
            <Text>Select Number</Text>
            <TextInput/>
            <Button style={styles.button}/>
            <Button style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
    }

});

export default StartGamesScreen










































































