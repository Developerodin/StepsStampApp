import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
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

const AnimatedArc = ({
  size,
  percentage,
  duration,
  strokeColor,
  strokeWidth,
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = size / 2 - strokeWidth; // Adjust padding based on stroke width
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
    <Path
      d={progressPath}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  );
};

const ProgressBar1 = ({
  outerSize = 250,
  outerPercentage = 75,
  duration = 2000,
  strokeColor = "#35ABFF",
  
}) => {
  const outerStrokeWidth = 10; // Stroke width for the outer arc
  const innerStrokeWidth = 10; // Stroke width for the inner arc

  return (
    <View >

    
    <Svg
      width={outerSize}
      height={outerSize}
      viewBox={`0 0 ${outerSize} ${outerSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Background Circle */}
      <Path
        d={`M ${outerSize / 2},${outerSize / 2} m -${
          outerSize / 2 - outerStrokeWidth
        },0 a ${outerSize / 2 - outerStrokeWidth},${
          outerSize / 2 - outerStrokeWidth
        } 0 1,0 ${(outerSize / 2 - outerStrokeWidth) * 2},0 a ${
          outerSize / 2 - outerStrokeWidth
        },${outerSize / 2 - outerStrokeWidth} 0 1,0 -${
          (outerSize / 2 - outerStrokeWidth) * 2
        },0`}
        fill="none"
        stroke="#454547"
        strokeWidth={outerStrokeWidth}
      />

      {/* Outer Progress Arc */}
      <AnimatedArc
        size={outerSize}
        percentage={outerPercentage}
        duration={duration}
        strokeColor={strokeColor}
        strokeWidth={outerStrokeWidth}
      />

      {/* Centered Text (Letter "A") */}
      <View style={{position: "absolute",
      top: "50%",
      left: "50%",
      transform: [{ translateX: -10 }, { translateY: -10 }],
      
      }}>
        <Image
            source={require(`../../assets/images/b.png`)} // Ensure path is correct for the card background
            style={{marginTop:12}}
            resizeMode="contain"
          />
      </View>
      
    </Svg>

    </View>
  );
};

const ProgressBar2 = ({
  outerSize = 250,
  outerPercentage = 75,
  duration = 2000,
  strokeColor = "#35ABFF",
  
}) => {
  const outerStrokeWidth = 10; // Stroke width for the outer arc
  const innerStrokeWidth = 10; // Stroke width for the inner arc

  return (
    <View >

    
    <Svg
      width={outerSize}
      height={outerSize}
      viewBox={`0 0 ${outerSize} ${outerSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Background Circle */}
      <Path
        d={`M ${outerSize / 2},${outerSize / 2} m -${
          outerSize / 2 - outerStrokeWidth
        },0 a ${outerSize / 2 - outerStrokeWidth},${
          outerSize / 2 - outerStrokeWidth
        } 0 1,0 ${(outerSize / 2 - outerStrokeWidth) * 2},0 a ${
          outerSize / 2 - outerStrokeWidth
        },${outerSize / 2 - outerStrokeWidth} 0 1,0 -${
          (outerSize / 2 - outerStrokeWidth) * 2
        },0`}
        fill="none"
        stroke="#454547"
        strokeWidth={outerStrokeWidth}
      />

      {/* Outer Progress Arc */}
      <AnimatedArc
        size={outerSize}
        percentage={outerPercentage}
        duration={duration}
        strokeColor={strokeColor}
        strokeWidth={outerStrokeWidth}
      />

      {/* Centered Text (Letter "A") */}
      <View style={{position: "absolute",
      top: "50%",
      left: "50%",
      transform: [{ translateX: -10 }, { translateY: -10 }],
      
      }}>
        <Image
            source={require(`../../assets/images/a.png`)} // Ensure path is correct for the card background
            style={{marginTop:12}}
            resizeMode="contain"
          />
      </View>
      
    </Svg>

    </View>
  );
};

const RewardModeStepCountProgressBar = ({
  outerPercentage=75, 
  innerPercentage=50, 
  duration=1000
}) => {
  return (
    <View>
      <View
        style={{ position: "realtive" }}
      >
        <ProgressBar1
          outerSize={250}
          
          outerPercentage={outerPercentage}
         
          duration={duration}
        />

        <View
          style={{
            position: "absolute",
            top: "52%",
            left: "52%",
            transform: [{ translateX: -115 }, { translateY: -115 }],
          }}
        >
          <ProgressBar2
            outerSize={220}
            
            outerPercentage={innerPercentage}
            
            duration={duration}
            strokeColor={"#F78300"}
          />
        </View>
      </View>
    </View>
  );
};

export default RewardModeStepCountProgressBar;
