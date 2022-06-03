import { StyleSheet } from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper'

const CustomButton = (props) => {
    const {color, text, icon, mode, onPress, disabled} = props
    return (
        <Button
            color={color}
            icon={icon}
            mode={mode}
            onPress={onPress}
            disabled={disabled}
            style={styles.button}
        >{text}</Button>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        margin:10,
        marginVertical:10
    }
})