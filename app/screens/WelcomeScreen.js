// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import { Video } from 'expo-av';
// import { BlurView } from 'expo-blur';

// // Import the local video file
// const localVideo = require('../../welcome-screen-background.mp4');

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Video
//         source={localVideo}
//         rate={1.0}
//         volume={1.0}
//         isMuted={true}
//         resizeMode="stretch"
//         shouldPlay
//         isLooping
//         style={styles.videoBackground}
//       />
//       <View style={styles.overlayContent}>
//         <Text style={styles.heading}>Blissful Echoes</Text>
//         {/* Glassmorphic Button */}
//         <TouchableOpacity onPress={() => alert('Get Started Pressed')} style={styles.button}>
//           <BlurView intensity={50} style={styles.blurView}>
//             <Text style={styles.buttonText}>Get Started</Text>
//           </BlurView>
//         </TouchableOpacity>
//         <Text style={styles.subText} onPress={() => alert('How does it work? Pressed')}>
//           How does it work?
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   videoBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     height: '100%',
//     width: '100%',
//   },
//   overlayContent: {
//     alignItems: 'center',
//     position: 'absolute',
//     top: '10%',
//   },
//   heading: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: { width: -1, height: 1 },
//     textShadowRadius: 10,
//     marginBottom: 150,
//   },
//   button: {
//     marginBottom: 10,
//     borderRadius: 25,
//     borderWidth: 1,
//     overflow: 'hidden',
//     borderColor: '#50404D',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight white fill for the glass effect
//   },
//   blurView: {
//     paddingHorizontal: 50,
//     paddingVertical: 20,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   subText: {
//     fontSize: 18,
//     color: '#50404D',
//   },
// });
