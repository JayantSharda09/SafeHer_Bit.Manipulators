import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { User, Phone, Shield, Settings, CircleHelp as HelpCircle } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <User size={40} color="#E91E63" />
        </View>
        <Text style={styles.name}>Sarah Johnson</Text>
        <Text style={styles.email}>sarah.j@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Phone size={24} color="#E91E63" />
          <Text style={styles.menuText}>Manage Contacts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety Settings</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Shield size={24} color="#E91E63" />
          <Text style={styles.menuText}>Safety Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Settings size={24} color="#E91E63" />
          <Text style={styles.menuText}>App Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.menuItem}>
          <HelpCircle size={24} color="#E91E63" />
          <Text style={styles.menuText}>Help & FAQ</Text>
        </TouchableOpacity>
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
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFE0E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
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
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
});