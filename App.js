import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { Animated, Easing } from "react-native";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const Box = styled.View`
  width: 200px;
  height: 200px;
  background-color: #ff0000;
  justify-content: center;
  align-items: center;
`;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function App() {
  const [up, setUp] = useState(false);
  const Y = useRef(new Animated.Value(0)).current;
  const toggleUp = () => setUp((prev) => !prev);
  const moveUp = () => {
    Animated.timing(Y, {
      toValue: up ? 200 : -200,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start(toggleUp);
  };
  return (
    <Container>
      <TouchableOpacity onPress={moveUp}>
        <AnimatedBox style={{ transform: [{ translateY: Y }] }}></AnimatedBox>
      </TouchableOpacity>
    </Container>
  );
}
