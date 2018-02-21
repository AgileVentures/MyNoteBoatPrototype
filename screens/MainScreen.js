import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, {
    Circle,
    Path,
    Rect,
    G,
    Line,
    Text,
    ClipPath,
    Defs,
    Image
} from 'react-native-svg';
import { Font } from 'expo';

export default class MainScreen extends React.Component {

  render() {
    const arc1 = describeArc(150, 150, 100, 0, 90);
    const arc2 = describeArc(150, 150, 100, 90, 180);
    const arc3 = describeArc(150, 150, 100, 180, 270);
    const arc4 = describeArc(150, 150, 100, 270, 360);

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Svg width="500" height="900">
        <G x="10" y="50">
        <G x="0" y="0" onPress={() => navigate('Entretien', {})}>
          <G x="295"
             y="50">
            <Circle
              cx="0"
              cy="0"
              r="90"
              opacity="0"
              fill="green"/> 
            <Text
                rotation="45"
                textAnchor="middle"
                fontWeight="bold"
                fontSize="24"
                fill="#20BBD8"
            >Navigation</Text> 
          </G> 
          <Path
              x="30"
              y="10" 
              fill="none" 
              stroke="#FD7923" 
              strokeWidth="50" 
              d={arc1} 
            />
        </G> 

        <Path 
            x="30"
            y="50"        
            fill="none" 
            stroke="#FD7923" 
            strokeWidth="50" 
            d={arc2} 
            onPress={() => navigate('Entretien', {})}
          />
        <G x="270"
           y="300">
        <Text
            rotation="315"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="24"
            fill="#20BBD8"
            onPress={() => navigate('Entretien', {})}
        >Assistance</Text>  
        </G>         

        <Path 
            x="0"
            y="50"
            fill="none" 
            stroke="#FD7923" 
            strokeWidth="50" 
            d={arc3} 
            onPress={() => navigate('Entretien', {})}
          />
        <G x="50"
           y="300">
        <Text
            rotation="45" 
            textAnchor="middle"
            fontWeight="bold"
            fontSize="24"
            fill="#20BBD8"
            onPress={() => navigate('Entretien', {})}
        >Entretien</Text>           
        </G>

        <Path
            x="0"
            y="10" 
            fill="none" 
            stroke="#FD7923" 
            strokeWidth="50" 
            d={arc4} 
            onPress={() => navigate('Entretien', {})}
          />
        <G  x="40"
            y="40">  
        <Text
            rotation="315"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="24"
            fill="#20BBD8" 
            onPress={() => navigate('Entretien', {})}
        >Détente</Text>  
        </G>
        </G>

        </Svg>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});  


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}   