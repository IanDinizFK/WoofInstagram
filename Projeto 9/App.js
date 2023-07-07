import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './components/Project8/HomeScreen';
import Cadastro from './components/Project7/Cadastro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Sign In Screen</Text>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>SignUp Screen</Text>
      <Button title="Go to Main" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

const FeedScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Feed Screen</Text>
  </View>
);

const CatalogScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Catalog Screen</Text>
  </View>
);

const AccountScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Account Screen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main">
          {() => (
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="feed" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Postar"
                component={FeedScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="plus" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Catalog"
                component={Cadastro}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="list" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="user" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f4511e',
  },
});
