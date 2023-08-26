import * as React from 'react';
import {View, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

function Screen1({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Animated.View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'rgba(255,255,255,0.5)',
        }}
        sharedTransitionTag="sharedTag"
      />
      <Button title="Screen2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

function Screen2({navigation}) {
  return (
    <View style={{flex: 1, padding: 100, backgroundColor: 'black'}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'rgba(255,255,255,0.5)',
        }}
        sharedTransitionTag="sharedTag"
      />
      <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
}

export default function SharedElementExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
