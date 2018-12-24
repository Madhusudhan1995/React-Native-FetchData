//import nodemodules 
import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,FlatList} from 'react-native';
import Listitem from '../crudoperation/ListItem';

export default class Index extends Component{
    constructor(){
        super();
        this.state = {
            placeName: '',
            places: []
        }
    }

    _placeSubmitHeader = () => {
        if(this.state.placeName.trim() === '') {
            return;
            }
            this.setState(prevState => {
              return {
                    places: prevState.places.concat({
                key: Math.random(), 
                value: prevState.placeName
               })
               }
           });
           this.setState({
              placeName: ''
           });	
           console.log(value)	
    }

    _placeNameChangeHandler = (value) => {
        this.setState({
            placeName: value
          });    
      }

      placesOutput = () => {
        return (
         <FlatList style = { styles.listContainer }
            data = { this.state.places }
            keyExtractor={(item, index) => index.toString()}
                renderItem = { info => (
               <Listitem 
                     placeName={ info.item.value }
                     onItemPressed={() => this.onItemDeleted(info.item.key)}
                />
              )}
         />
         )
     }
// Delete Items start
onItemDeleted = (key) => {
    this.setState(prevState => {
       return {
          places: prevState.places.filter(place => {
             return place.key !== key;
       })
     }
     })
 }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                   <TextInput 
                       placeholder="Search Places"
                       style={styles.placeInput}
                       value = { this.state.placeName }
                       onChangeText = { this._placeNameChangeHandler }
                       
                   />

                   <Button 
                       title="Add"
                       style={styles.placeButton}
                       onPress={this._placeSubmitHeader}
                   />
                </View>
                <View style = { styles.listContainer }>
                   { this.placesOutput() }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: 
    {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputContainer: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: 
    {
         borderColor: '#7a42f4',
         width: '80%',
    },
    placeButton: 
    {
         width: '40%'
    },
    listContainer:
    {
        width:'100%'
    }
});