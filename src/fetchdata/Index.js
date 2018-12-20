/**
 * Sample React Native fetch data
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image} from 'react-native';

export default class Index extends Component{ 
    constructor(){
        super();
        this.state = {
            values:[],
            isLoading:true
        };
    }
  componentDidMount(){
      fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        return response.json();
      })
      .then((myJs) => {
        const values = JSON.parse(JSON.stringify(myJs));
        this.setState({values, isLoading: false});
        }) 
    }
    // _keyExtractor(p,i){
    //    return `${p,id}`;
    // }
    _renderItem = ({item}) => (
        <TouchableOpacity>
          <View style={styles.list}>
            <Image
                style={styles.listImage}
                source={require('../asserts/home1.jpg')}
            />
            <View style={styles.listLeft}>
                <Text style={{fontWeight: "bold"}}>Producer: {item.producer}</Text>
                <Text><Text style={{fontWeight: "bold"}}>Director: </Text>{item.director}</Text>
                <Text><Text style={{fontWeight: "bold"}}>ReleaseDate: </Text>{item.release_date}</Text>

            </View>
          </View>
        </TouchableOpacity>
      );
  render() {
    const {values, isLoading} = this.state;
    return (
        <View style = {styles.container}>
            <View style = {styles.container1}>
                <View style={styles.headlineContainer}>
                    <Text style = {styles.headline}>Home / Health / Checkup History</Text>
                </View>
                {isLoading && <ActivityIndicator size="large" color="green" style={{flex:1,alignItems: "center", justifyContent:"center"}}/>}
                <FlatList 
                data={values}
                renderItem={this._renderItem}
                //keyExtractor={this._keyExtractor} 
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#f2f2f2"
    },
    container1:{
        flex:1,
        backgroundColor: "#ffffff"
    },
    headlineContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headline: {
        padding: 20,
        color: "grey"
    },
    list:{
        flexDirection: "row",
        width:375,
        height:85,
        backgroundColor: "#ffffff",
        borderBottomWidth: 0.5, 
        borderBottomColor: "#9b9d9f",
        marginLeft:15
    },
    listImage: {
        width: 65,
        height:65,
        margin: 10,
        marginLeft:0,
        marginRight:25
    },
    listLeft: {
        flex:1,
        marginTop: 15
    },
    icon:{
        marginLeft:70,
        marginTop:30
    }

})


