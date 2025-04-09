import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../theme/theme'; // Importing COLORS and SIZES from theme

const { width } = Dimensions.get('window');

const PulseScreen = () => {
  return (
    <LinearGradient colors={['#1900FF', '#FF0000']} style={styles.container}>
      {/* Top Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topTabs}>
        {['Following', 'For You', 'News', 'Eat & Drink', 'pepsi'].map((item, index) => (
          <Text key={index} style={[styles.tabText, item === 'For You' && styles.activeTab]}>
            {item}
          </Text>
        ))}
        <Ionicons name="volume-mute" size={SIZES.font * 1.2} color="white" style={{ marginLeft: SIZES.base }} />
        <Feather name="search" size={SIZES.font * 1.2} color="white" style={{ marginLeft: SIZES.base }} />
      </ScrollView>

      {/* Right-side vertical buttons */}
      <View style={styles.rightButtons}>
        <Image
          source={require('../assets/images/deals.jpeg')}
          style={styles.rightIcon}
        />
        <Text style={styles.rightText}>Deals</Text>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart-o" size={SIZES.font * 1.5} color="white" />
          <Text style={styles.buttonLabel}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="gift" size={SIZES.font * 1.5} color="white" />
          <Text style={styles.buttonLabel}>Gift</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="comment" size={SIZES.font * 1.5} color="white" />
          <Text style={styles.buttonLabel}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="send" size={SIZES.font * 1.5} color="white" />
          <Text style={styles.buttonLabel}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="more-horizontal" size={SIZES.font * 1.5} color="white" />
         
        </TouchableOpacity>
      </View>

      {/* Bottom Info Card */}
      <View style={styles.bottomInfo}>
        <View style={styles.bottomHeader}>
          <Image
            source={require('../assets/images/logo2.png')}
            style={styles.logowrapper}
          />
          <Text style={styles.sourceName}>961 News</Text>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <View style={styles.collabTag}>
            <Text style={styles.collabText}>7 collab</Text>
          </View>
        </View>

        <Text style={styles.newsDescription}>
          A very long text that the user might write as a description here that takes up the entire
          line 🔥 fyp 961... <Text style={styles.readMore}>Read more</Text>
        </Text>

        {/* Placeholder for Ad */}
        <View style={styles.adBox}>
          <Text>AD</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PulseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topTabs: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.height * 0.06, // Use height for scalable padding
    gap: SIZES.xxLarge,
  },
  tabText: {
    color: COLORS.white,
    fontSize: SIZES.font+2,
    marginRight: SIZES.small+2,
    opacity: 0.6,
  },
  activeTab: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.white,
    opacity: 1,
  },
  rightButtons: {
    position: 'absolute',
    bottom: SIZES.height * 0.05, // Responsive bottom margin
    right: SIZES.base-5,
    alignItems: 'center',
  },
  iconButton: {
    marginVertical: SIZES.base,
    alignItems: 'center',
  },
  rightIcon: {
    width: 40,
    height: 40,
    marginBottom: SIZES.base / 2,
  },
  rightText: {
    color: COLORS.white,
    fontSize: SIZES.font * 0.9, // Slightly smaller font size for better alignment
    marginBottom: SIZES.base * 2,
    textAlign: 'center',
  },
  buttonLabel: {
    color: COLORS.white,
    fontSize: SIZES.font * 1,
    marginTop: SIZES.base / 1.2,
  },
  bottomInfo: {
    position: 'absolute',
    bottom: SIZES.base * 2,
    paddingHorizontal: SIZES.base * 1.5,
    width: width - SIZES.base *10, // Make it responsive based on the screen width
  },
  bottomHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.base / 2,
  },
  newsSource: {
    color: COLORS.red,
    fontWeight: 'bold',
    fontSize: SIZES.font,
    marginRight: SIZES.base / 2,
  },
  sourceName: {
    color: COLORS.white,
    fontWeight: '600',
    marginRight: SIZES.base,
  },
  followBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 2,
    paddingHorizontal: SIZES.base,
    borderRadius: 5,
  },
  followText: {
    color: COLORS.black,
    fontSize: SIZES.font * 0.9,
    fontWeight: '600',
  },
  collabTag: {
    backgroundColor: COLORS.gray,
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    borderRadius: 5,
    paddingVertical: SIZES.base / 2,
  },
  collabText: {
    fontSize: SIZES.font * 0.9,
    color: COLORS.white,
  },
  newsDescription: {
    color: COLORS.white,
    marginTop: SIZES.base,
    fontSize: SIZES.font * 0.95,
  },
  readMore: {
    color: COLORS.gray,
    textDecorationLine: 'underline',
  },
  adBox: {
    marginTop: SIZES.base * 1.5,
    height: SIZES.height * 0.08, // Responsive height
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logowrapper: {
    height: 40,
    width: 40,
    borderRadius: 99,
    marginRight: SIZES.base,
  },
});
