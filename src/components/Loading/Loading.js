import React from "react";
import AnimatedLottieView from "lottie-react-native";

function Loading() {
    return <AnimatedLottieView 
    source={require('../../assets/Loading.json')} autoPlay />;
}
export default Loading;