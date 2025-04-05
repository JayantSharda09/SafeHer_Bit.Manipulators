import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Shield, Phone, Video, Volume2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SafetyScreen() {
  const [isTracking, setIsTracking] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.emergencyButton}>
        <TouchableOpacity
          onPress={() => {
            // Handle emergency trigger
          }}
          style={styles.sosButton}>
          <LinearGradient
            colors={['#FF4081', '#E91E63']}
            style={styles.gradientButton}>
            <Shield size={40} color="#fff" />
            <Text style={styles.sosText}>SOS</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.emergencyText}>Press & hold for emergency</Text>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionButton}>
            <Phone size={24} color="#E91E63" />
            <Text style={styles.actionText}>Call Emergency</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Video size={24} color="#E91E63" />
            <Text style={styles.actionText}>Record Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Volume2 size={24} color="#E91E63" />
            <Text style={styles.actionText}>Sound Alarm</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.safetyStatus}>
        <Text style={styles.sectionTitle}>Safety Status</Text>
        <TouchableOpacity
          style={[styles.trackingButton, isTracking && styles.trackingActive]}
          onPress={() => setIsTracking(!isTracking)}>
          <Text style={[styles.trackingText, isTracking && styles.trackingActiveText]}>
            {isTracking ? 'Stop Location Sharing' : 'Start Location Sharing'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.trustedContacts}>
        <Text style={styles.sectionTitle}>Trusted Contacts</Text>
        {/* Add trusted contacts list here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  emergencyButton: {
    alignItems: 'center',
    padding: 20,
  },
  sosButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradientButton: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  emergencyText: {
    marginTop: 12,
    color: '#666',
    fontSize: 14,
  },
  quickActions: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  safetyStatus: {
    padding: 20,
  },
  trackingButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E91E63',
  },
  trackingActive: {
    backgroundColor: '#E91E63',
  },
  trackingText: {
    color: '#E91E63',
    fontWeight: 'bold',
  },
  trackingActiveText: {
    color: '#fff',
  },
  trustedContacts: {
    padding: 20,
  },
});