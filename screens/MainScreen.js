import React from 'react';
import { Dimensions, Image as NativeImage, StyleSheet, View } from 'react-native';
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

import NavigationBar from 'react-native-navbar';

export default class MainScreen extends React.Component {

  render() {
    const arc1 = describeArc(150, 150, 100, 0, 90);
    const arc2 = describeArc(150, 150, 100, 90, 180);
    const arc3 = describeArc(150, 150, 100, 180, 270);
    const arc4 = describeArc(150, 150, 100, 270, 360);

    const arc5 = describeArc(150, 150, 50, 180, 360);
    const arc6 = describeArc(150, 150, 50, 0, 180);

    const { navigate } = this.props.navigation;

    const leftButtonConfig = {
      title: 'Home',
      handler: () => navigate('Main', {}),
    };

    const titleConfig = {
      title: 'myNoteBoat',
    };
    return (
      <View style={styles.container}>
      <NavigationBar
        tintColor="#1C87B2"
        title={<NativeImage 
                 source={require('../assets/images/mynoteboat.png')}
                />
              }
        leftButton={leftButtonConfig}
      />
      <Svg width="500" height="900">
        <G x="10" y="50">
        <G x="0" y="0" onPress={() => navigate('Navigation', {})}>
          <G x="295"
             y="50">
            <Circle
              cx="0"
              cy="0"
              r="90"
              fill="rgba(250, 250, 250, 0)"/> 
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

        <G x="0" y="0" onPress={() => navigate('Entretien', {})}>
          <Path 
            x="30"
            y="50"        
            fill="none" 
            stroke="#FD7923" 
            strokeWidth="50" 
            d={arc2} 
            onPress={() => navigate('Entretien', {})}
          />
          <G x="270" y="300">
            <Circle
              cx="20"
              cy="20"
              r="90"
              fill="rgba(250, 250, 250,0)"/> 
            <Text
                rotation="315"
                textAnchor="middle"
                fontWeight="bold"
                fontSize="24"
                fill="#20BBD8"
            >Assistance</Text>  
          </G>         
        </G>         

        <G x="0" y="0" onPress={() => navigate('Entretien', {})}>
          <Path 
              x="0"
              y="50"
              fill="none" 
              stroke="#FD7923" 
              strokeWidth="50" 
              d={arc3} 
            />
            
          <G x="50"
             y="300">
            <Circle
                cx="-15"
                cy="15"
                r="90"
                fill="rgba(250, 250, 250, 0)"/>    
            <Text
                rotation="45" 
                textAnchor="middle"
                fontWeight="bold"
                fontSize="24"
                fill="#20BBD8"
            >Entretien</Text>           
          </G>
        </G>

        <G x="0" y="0" onPress={() => navigate('Entretien', {})}>
          <Path
              x="0"
              y="10" 
              fill="none" 
              stroke="#FD7923" 
              strokeWidth="50" 
              d={arc4} 
              onPress={() => navigate('Entretien', {})}
            />
          <G x="40" y="40"> 
            <Circle
              cx="0"
              cy="0"
              r="90"
              fill="rgba(250, 250, 250, 0)"/>  
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

         <G x="25" y="33" onPress={() => navigate('Checklists', {})}>
         <Path
              x="0"
              y="0" 
              fill="#A8C4DA" 
              stroke="#A8C4DA" 
              strokeWidth="50" 
              d={arc6} 
            />
         </G>

          <G x="5" y="33" onPress={() => navigate('Entretien', {})}>
          <Path
              x="0"
              y="0" 
              fill="#A8C4DA" 
              stroke="#A8C4DA" 
              strokeWidth="50" 
              d={arc5} 
            />
          <Image
            x="50"
            y="150"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid slice"
            href={require("../assets/images/boating_transparent.png")}
          />


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