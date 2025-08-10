/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useCallback, useRef } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable, {type SwipeableMethods} from 'react-native-gesture-handler/ReanimatedSwipeable';

function App() {
  const swipeableRef = useRef<SwipeableMethods>(null);
  
  const isDarkMode = useColorScheme() === 'dark';


  const renderLeftActions = useCallback(() => {
    return <View style={styles.button} />;
  }, []);

  const renderRightActions = useCallback(() => {
    return <View style={styles.button} />;
  }, []);

  const onSwipeableOpen = useCallback(() => {
    console.log('onSwipeableOpen');
  }, []);

  const onSwipeableClose = useCallback(() => {
    console.log('onSwipeableClose');
  }, []);

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ReanimatedSwipeable
        ref={swipeableRef}
        enableTrackpadTwoFingerGesture
        leftThreshold={90}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableOpen={onSwipeableOpen}
        onSwipeableClose={onSwipeableClose}
      >
        <View style={styles.box} />
      </ReanimatedSwipeable>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
  },
  button: {
    width: 400,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default App;
