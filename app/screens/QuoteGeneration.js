import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StatusBar, Linking} from 'react-native';
import { API_KEY } from '@env';  // Import API_KEY from .env

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import Tts from 'react-native-tts';
// import Clipboard from '@react-native-clipboard/clipboard';
// import Snackbar from 'react-native-snackbar';

// Tts.setDefaultLanguage('en-GB');
// Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
// Tts.setDefaultRate(0.5);
// Tts.setDefaultPitch(1.2);

const QuoteGenerator = () => {

  const [Quote, setQuote] = useState('Loading...');
//   const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(API_KEY);


async function randomQuote() {
    // Set a loading state before starting the fetch process
    setIsLoading(true);
  
    try {
      // For text-only input, use the gemini-pro model
      const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
  
      const prompt = "Write an entirely unique new random quote that helps people with suffering from depression.";
  
      // Wait for the model to generate content based on the prompt
      const result = await model.generateContent(prompt);
  
      // Await the response from the result
      const response = await result.response;
  
      // Extract text from the response
      const text = await response.text();
        
      setQuote(text)
      // Log the text to the console
      console.log(text);
  
      // Update the quote or text in your application's state
      // setQuote(text); // Uncomment or modify this line as needed
  
      // Indicate that loading is complete
      setIsLoading(false);
    } catch (error) {
      // Handle any errors that occur during the fetch process
      console.error('An error occurred:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    randomQuote();
  }, []);

//   const speakNow = () => {
//     Tts.stop();
//     Tts.speak(Quote + ' by ' + Author);
//     Tts.addEventListener('tts-start', (event) => setIsSpeaking(true));
//     Tts.addEventListener('tts-finish', (event) => setIsSpeaking(false));
//   }

//   const copyToClipboard = () => {
//     Clipboard.setString(Quote);
//     Snackbar.show({
//       text: 'Quote copied!',
//       duration: Snackbar.LENGTH_SHORT,
//     });    
//   }

  const tweetNow = () => {
    const url = "https://twitter.com/intent/tweet?text=" + Quote;
    Linking.openURL(url);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5372F0',
      }}>
        <StatusBar barStyle="light-content" />
      <View
        style={{
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '600',
            color: '#333',
            marginBottom: 20,
          }}>
          Quote of the Day
        </Text>
        <FontAwesome5
          name="quote-left"
          style={{fontSize: 20, marginBottom: -12}}
          color="#000"
        />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>
          {Quote}
        </Text>
        <FontAwesome5
          name="quote-right"
          style={{
            fontSize: 20,
            textAlign: 'right',
            marginTop: -20,
            marginBottom: 20,
          }}
          color="#000"
        />
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: 16,
            color: '#000',
          }}>
          {/* —— {Author} */}
        </Text>
        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
            {isLoading ? "Loading..." : "New Quote"}
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <TouchableOpacity
            // onPress={speakNow}
            style={{
              borderWidth: 2,
              borderColor: '#5372F0',
              borderRadius: 50,
              padding: 15,
              backgroundColor: isSpeaking ? '#5372F0' : '#fff'
            }}>
            <FontAwesome name="volume-up" size={22} color={isSpeaking ? '#fff' : "#5372F0"} />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={copyToClipboard}
            style={{
              borderWidth: 2,
              borderColor: '#5372F0',
              borderRadius: 50,
              padding: 15,
            }}>
            <FontAwesome5 name="copy" size={22} color="#5372F0" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={tweetNow}
            style={{
              borderWidth: 2,
              borderColor: '#5372F0',
              borderRadius: 50,
              padding: 15,
            }}>
            <FontAwesome name="twitter" size={22} color="#5372F0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuoteGenerator;