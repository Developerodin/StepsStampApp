import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
};

const SmallProgressBar2 = ({
  size = 100,
  percentage = 0,
  duration = 10,
  image,
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = size / 2 - 10; // Adjusted to add padding
  const center = size / 2;

  useEffect(() => {
    let start = 0;
    const increment = percentage / (duration / 16); // Update every 16ms (~60fps)

    const animate = () => {
      start += increment;
      if (start >= percentage) {
        setAnimatedPercentage(percentage);
        return;
      }
      setAnimatedPercentage(start);
      requestAnimationFrame(animate);
    };

    animate();
  }, [percentage, duration]);

  const startAngle = 0;
  const endAngle = (360 * animatedPercentage) / 100; // Calculate the end angle based on animated percentage
  const progressPath = describeArc(
    center,
    center,
    radius,
    startAngle,
    endAngle
  );

  return (
    <View style={{ position: "relative" }}>
      <Svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <Path
          d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,0 ${
            radius * 2
          },0 a ${radius},${radius} 0 1,0 -${radius * 2},0`}
          fill="none"
          stroke="#454547"
          strokeWidth="6"
        />

        {/* Progress Arc */}
        <Path
          d={progressPath}
          fill="none"
          stroke="#F78300"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </Svg>

      <View
        style={{
          position: "absolute",
          top:'30%',
          left:"30%",
          alignItems: "center",
        }}
      >
        {image}
      </View>
    </View>
  );
};

export default SmallProgressBar2;
