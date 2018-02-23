import React from 'react';
import { Dimensions, Image as NativeImage, StyleSheet, TouchableOpacity, View } from 'react-native';
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
        leftButton={<NativeImage 
                 source={require('../assets/images/splash-64.png')}
                />}
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

        <G x="0" y="0" onPress={() => navigate('Assistance', {})}>
          <Path 
            x="30"
            y="50"        
            fill="none" 
            stroke="#FD7923" 
            strokeWidth="50" 
            d={arc2} 
            onPress={() => navigate('Assistance', {})}
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
                onPress={() => navigate('Assistance', {})}
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

        <G x="0" y="0" onPress={() => navigate('Detente', {})}>
          <Path
              x="0"
              y="10" 
              fill="none" 
              stroke="#FD7923" 
              strokeWidth="50" 
              d={arc4} 
              onPress={() => navigate('Detente', {})}
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
                onPress={() => navigate('Detente', {})}
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
          <Svg viewBox="-1 -1 2 2" style={piestyles.container}>
          <Path
              x="113"
              y="140" 
              fill="#A8C4DA" 
              stroke="#A8C4DA" 
              strokeWidth="50" 
              d={getPie({ percent: 0.45, color: '#A8C4DA' })} 
            />
            </Svg>
            <Text
              x="113"
              y="140"
              textAnchor="middle"
              fontWeight="bold"
              fontSize="16"
              fill="#20BBD8"
            >BOAT</Text>
            <Text
              x="206"
              y="130"
              textAnchor="middle"
              fontWeight="bold"
              fontSize="16"
              fill="#20BBD8"
            >CHECK</Text>
            <Text
              x="205"
              y="150"
              textAnchor="middle"
              fontWeight="bold"
              fontSize="16"
              fill="#20BBD8"
            >LISTS</Text>
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

const piestyles = StyleSheet.create({
  container: {
    transform: [{ rotateX: '90deg' }],
  },
}); 

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

function getPie(slice) {
  let cumulativePercent = 0;
  // destructuring assignment sets the two variables at once
  const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
  
  // each slice starts where the last slice ended, so keep a cumulative percent
  cumulativePercent += slice.percent;
  
  const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

  // if the slice is more than 50%, take the large arc (the long way around)
  const largeArcFlag = slice.percent > .5 ? 1 : 0;

  // create an array and join it just for code readability
  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(' ');
  return pathData;
}


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