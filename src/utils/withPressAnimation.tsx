import { ComponentType } from 'react';
import { Animated, Pressable } from 'react-native';

export function withPressAnimation<T extends {}>(Component: ComponentType<T>) {
  const animated = new Animated.Value(1);

  const fadeIn = () => {  
    Animated.timing(animated, {
      toValue: 0.85,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (props: T) => (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={{
          transform: [
            {scale: animated}
          ]
        }}
      >
        <Component {...props as T} />
      </Animated.View>
    </Pressable>
  )
}
