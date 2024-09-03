import React, {useEffect} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<SplashScreenProps> = ({navigation}) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Fade in animation
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.ease,
    });

    // Navigate to Home screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        imageStyle={{opacity: 0.7}}
        source={{
          uri: 'https://i.pinimg.com/564x/9d/08/4a/9d084a1203ce5759bfd8583e0929c0d4.jpg',
        }}
      />
      <Animated.Text style={[styles.text, animatedStyle]}>
        Welcome to StyleStride
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
  },
});

export default Splash;
