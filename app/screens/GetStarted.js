import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';


// Define a static list of tags
const staticTags = [
  { name: 'Meditation', quoteCount: 10 },
  { name: 'Mindfulness', quoteCount: 5 },
  { name: 'Affirmations', quoteCount: 8 },
  { name: 'Self-compassion', quoteCount: 8 },
  { name: 'Visualization', quoteCount: 8 },
  { name: 'Journaling', quoteCount: 8 },
  { name: 'Gratitude', quoteCount: 8 },
  { name: 'Positive affirmations', quoteCount: 8 },
  { name: 'Peer support', quoteCount: 8 },
  { name: 'Boundary setting', quoteCount: 8 },
  { name: 'Forgiveness', quoteCount: 8 },
  { name: 'Resilience building', quoteCount: 8 },
  { name: 'Creativity', quoteCount: 8 },
  { name: 'Courage', quoteCount: 8 },
  { name: 'Love', quoteCount: 8 },
  { name: 'Energy healing', quoteCount: 8 },
  { name: 'Detoxification', quoteCount: 8 },
  { name: 'Resilience', quoteCount: 8 },
  { name: 'Mind-body connection', quoteCount: 8 },
  { name: 'Social connection', quoteCount: 8 },
  { name: 'Anger management', quoteCount: 8 },


];

export default function GetStarted() {
  const data = staticTags; // Use the static list of tags

  return (
    <View
      style={{
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <TouchableOpacity style={styles.button}>
          <BlurView intensity={10} style={styles.blurView}>
          <Link href="./QuoteGeneration">
            <Text style={styles.buttonText}>Generate Quote</Text>
            </Link>
          </BlurView>
        </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tagsContainer}>
          {data.map((tag, index) => (
            <Chip
              key={index}
              compact={false}
              style={{ margin: 4, backgroundColor: '#EFF4FF' }}
            >
              {tag.name} ({tag.quoteCount})
            </Chip>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 16,
    paddingBottom: 16,
  },
});
