import { ComponentType } from 'react';
import { Pressable } from 'react-native';

export function withPressAnimation<T extends {}>(
  Component: ComponentType<T>, pressFunc?: () => void
) {
  return (props: T) => (
    <Pressable android_ripple={{
      color: '#63636333', foreground: true, borderless: true, radius: 23
    }} onPress={pressFunc}>
      <Component {...props as T} />
    </Pressable>
  )
}
