import React from "react";
import {View, Text} from 'react-native';
import MapContainer from './components/GoogleMap'

export default function App() {
  return (
    <View >
      <Text style={{fontSize: 30, fontWeight: 'bold',color: 'black',}}>Google Maps App</Text>
      <View>
        <MapContainer/>
      </View>
    </View>
  );
    
}