import React from "react";
import{ View, Pressable, Text} from "react-native";
import styles from   './styles';



const StyledButton =(props) =>{
    // const content =props.content;
    // const onPress =props.onPress;

    // const type= props.type;

    const   {type, content, onPress} = props; 

    const backgroundColor =type === 'primary' ? '#171A20CC' : '#ffff';
    const textColor = type ==='primary' ?'white' :'#171A20 ';
    return(

   

        <View style={styles.container}>
            <Pressable 
            style={[styles.button, {backgroundColor: backgroundColor  } ]}
            onPress ={() =>{
             onPress('')
            }}
           
         
            > 
            <Text style={[styles.text, {color:   textColor} ]}>{content}</Text>
            </Pressable>
        </View>
    );

};

export default StyledButton; 