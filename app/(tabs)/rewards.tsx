import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Award, Gift, Video } from 'lucide-react-native';

export default function RewardsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.pointsCard}>
          <Award size={32} color="#E91E63" />
          <Text style={styles.pointsText}>Your Points</Text>
          <Text style={styles.pointsValue}>2,500</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety Videos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.videoCard}>
            <Video size={24} color="#E91E63" />
            <Text style={styles.videoTitle}>Self Defense Basics</Text>
            <Text style={styles.videoPoints}>+100 points</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.videoCard}>
            <Video size={24} color="#E91E63" />
            <Text style={styles.videoTitle}>Situational Awareness</Text>
            <Text style={styles.videoPoints}>+150 points</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Rewards</Text>
        <View style={styles.rewardsGrid}>
          <TouchableOpacity style={styles.rewardCard}>
            <Gift size={24} color="#E91E63" />
            <Text style={styles.rewardTitle}>Safe Ride Coupon</Text>
            <Text style={styles.rewardPoints}>500 points</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rewardCard}>
            <Gift size={24} color="#E91E63" />
            <Text style={styles.rewardTitle}>Safety Course</Text>
            <Text style={styles.rewardPoints}>1000 points</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
  },
  pointsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  pointsText: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  pointsValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E91E63',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  videoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 160,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  videoTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  videoPoints: {
    fontSize: 12,
    color: '#E91E63',
    marginTop: 4,
  },
  rewardsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  rewardCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  rewardTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  rewardPoints: {
    fontSize: 12,
    color: '#E91E63',
    marginTop: 4,
  },
});