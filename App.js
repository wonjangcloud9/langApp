import React from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";
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
  const Y = new Animated.Value(0);
  const moveUp = () => {
    Animated.spring(Y, {
      toValue: -200,
      bounciness: 50,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Container>
      <TouchableOpacity onPress={moveUp}>
        <AnimatedBox style={{ transform: [{ translateY: Y }] }}></AnimatedBox>
      </TouchableOpacity>
    </Container>
  );
}
