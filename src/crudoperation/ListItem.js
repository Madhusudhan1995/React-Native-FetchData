import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight ,Button } from 'react-native';

const Listitem = (props) => {
    return (
        <TouchableHighlight >
            <View style = { styles.listItem }>
               <Text>{ props.placeName }</Text>
               <Button 
                       title="Del"
                       style={styles.placeButton}
                       onPress={props.onItemPressed}
                   />
            </View>
        </TouchableHighlight >
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeButton: 
    {
         width: '50%',
         position:'relative',
    },
});

export default Listitem;