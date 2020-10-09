
import React from 'react';

import {Text, View ,StyleSheet} from 'react-native';

const Main = () => {
  
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'red', flex: 1}}>
          <View
            style={{
              margin: 15,
              backgroundColor: 'gray',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius : 10
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                margin: 10,
                backgroundColor: 'orange',
                // flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Orange Circle
              </Text>
            </View>
            <View
              style={{
                width: 100,
                height: 50,
                borderRadius: 20,
                margin: 10,
                backgroundColor: 'yellow',
                // flex: 1,
                justifyContent: 'center',
              }}><Text
              style={{
                alignSelf: 'center',
                // justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
             Yellow Box
            </Text></View>
          </View>
        </View>
        <View style={{backgroundColor: 'pink', flex: 2, flexDirection : "row" ,justifyContent : "space-around"}}>
        
        <View
              style={{
                width: 250,
                height: 400,
                borderRadius: 30,
                margin: 10,
                backgroundColor: 'black',
                // flex: 2,
                
                justifyContent: 'center',
                marginVertical : 30
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color : "white",
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 19,
                }}>
                Black Box
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 400,
                borderRadius: 150,
                margin: 10,
                backgroundColor: 'brown',
                // flex: 1,
                marginVertical : 30,
                justifyContent: 'center',
              }}><Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color : "white",
                fontSize: 19,
                transform: [{ rotate: '270deg'}]
              }}>
             Brown Box
            </Text></View>
        </View>
      </View>
    );
  
};

export default Main;
