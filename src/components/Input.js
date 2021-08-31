import React,{useState} from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Input =(props)=>{
    const {label,icon,onChangeInput,secureTextEntry,containerStyle,inputStyle,...rest} = props;

    const [field,setField] = useState('');
    const [isFocus,setIsFocus] = useState(false);
    const [isSecure,setIsSecure] = useState(secureTextEntry);

    const onChangeField =(text)=>{
        onChangeInput(text);
    setField(text);
    };

    const focusField=()=>{
        setIsFocus(true)
    };

    const blurField=()=>{
        setIsFocus(false);
    };

    return(
        <View style={StyleSheet.flatten([styles.inputView,
            {  borderColor:isFocus ? '#28589B' : 'grey' },
        containerStyle && containerStyle,      
    ])}>
        {icon && icon()}
      <TextInput
      key="RN-text-input"
        style={StyleSheet.flatten([styles.TextInput,inputStyle && inputStyle])}
        placeholder={label}
        value={field}
        placeholderTextColor={isFocus ? '#28589B' : 'grey' }
        onChangeText={(email) => onChangeField(email)}
        onFocus={focusField }
        onBlur={blurField}
        secureTextEntry={isSecure}
        {...rest}
      />
       {secureTextEntry && (
            <Icon
              name={isSecure ? 'eye' : 'eye-off'}
              color="grey"
              size={25}
              underlayColor="transparent"
              onPress={() =>
               setIsSecure(!isSecure)
              }
              />
              )}
    </View>
    )
};

const styles = StyleSheet.create({
    inputView: {
        borderRadius: 30,
        width: "100%",
        height: 50,
        marginBottom: 20,
        borderWidth:0.5,
        alignItems: "center",
        flexDirection:'row',
        paddingHorizontal:10,
      },   
      TextInput: {
        height: 50,
        flex: 1,
        paddingVertical: 10,
      },
});

export default Input;