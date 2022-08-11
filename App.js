import React from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const Box = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  background-color: #ff0000;
  justify-content: center;
  align-items: center;
`;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function App() {
  return (
    <Container>
      <AnimatedBox></AnimatedBox>
    </Container>
  );
}
