import React from "react";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { Pressable, View, Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LikeButton = () => {
  const liked = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });

  return (
    <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <AntDesign
          name={"hearto"}
          size={25}
          color={"white"}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <AntDesign name={"heart"} size={25} color={"red"} />
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;