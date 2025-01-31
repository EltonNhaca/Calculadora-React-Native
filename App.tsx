import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyBoard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style = {theme === 'ligth'? styles.container : [styles.container, {backgroundColor: '#000'}]}>
      <StatusBar style="auto" />
      <Switch
        value={theme === 'ligth'}
        onValueChange={() => setTheme(theme === 'ligth' ? 'dark' : 'ligth')}
      />
     
      <MyKeyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.ligth,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
});
