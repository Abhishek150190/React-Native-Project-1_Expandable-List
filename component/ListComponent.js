import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

export default class ListComponent extends Component {
  
    constructor() {
      super();
      this.state = {
        layoutHeight: 0,
      };
    }
  
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.item.isExpanded) {
        this.setState(() => {
          return {
            layoutHeight: null,
          };
        });
      } else {
        this.setState(() => {
          return {
            layoutHeight: 0,
          };
        });
      }
    }
  
    
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layoutHeight !== nextState.layoutHeight) {
        return true;
      }
      return false;
    }
  
  
    render() {
      return (
        <View>
  
          {/**********************Header-of-List-Item*****************/}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.onClickFunction}
            style={styles.header}>
            <Text style={styles.headerText}>{this.props.item.state}</Text>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.layoutHeight,
              overflow: 'hidden',
              justifyContent:'center',
              alignItems:'center',
            
            }}>
              
            {/*****************************Content-of-List-Item*******************/}
            {this.props.item.subcategory.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={styles.content}
                >
                <Text style={styles.text}>
                  {key}. {item.val}
                </Text>
                <View style={styles.separator} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
 
    header: {
      padding: 16,
      margin:10,
      backgroundColor:'white',
      borderRadius:10
      
    },
    headerText: {
      fontSize: 16,
      fontWeight: '500',
      
    },
    separator: {
      height: 0.5,
      backgroundColor: '#808080',
      width: '95%',
      marginLeft: 16,
      marginRight: 16,
    },
    text: {
      fontSize: 16,
      color: '#606070',
      padding: 10,
    },
    content: {
      borderRadius:10,
      margin:2,
      width:'90%',
      padding:5,
      backgroundColor: '#fff',
    },
  });