import React,{Component} from 'react';
import {View,Text,SectionList,Image} from 'react-native';
import {SectionListData} from '../sectionlist/SectionListData';

class SectionListItem extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',flexWrap:'wrap',padding:10, borderBottomWidth: 2,marginLeft:20,marginRight:10, borderBottomColor: '#DCD8D8'}}>
                    <View>
                        <Image source = {this.props.item.images} style={{width:80,height:80}}/>
                    </View>
                           
                    <View>
                        <Text style={{fontSize:16, fontWeight:'bold', color: 'black', marginLeft:20, marginRight:10}}>
                             {this.props.item.name}
                        </Text>
                        <Text style={{fontSize:16, fontWeight:'bold', marginLeft:20, marginRight:10}}>
                             {this.props.item.description}
                        </Text>
                        <Text style={{fontSize:16, fontWeight:'bold', marginLeft:20, marginRight:10}}>
                            {this.props.item.type}
                        </Text>
                    </View>
            </View>
        )
    }
}

export default class BasicSectionList extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <SectionList   
                  renderItem={({item, index}) =>{
                    return(
                        <SectionListItem item={item} index={index} />
                    );
                  }}
                  sections={SectionListData}
                  keyExtractor={(item, index) => item.name}
                 >

                </SectionList>
            </View>
        )
    }
}