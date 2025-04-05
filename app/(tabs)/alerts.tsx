import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Bell, CircleCheck as CheckCircle } from 'lucide-react-native';

export default function AlertsScreen() {
  const alerts = [
    {
      id: '1',
      type: 'emergency',
      message: 'Emergency alert triggered in your area',
      time: '2 minutes ago',
      status: 'active',
    },
    {
      id: '2',
      type: 'info',
      message: 'New safe zone added nearby',
      time: '1 hour ago',
      status: 'read',
    },
  ];

  const renderAlert = ({ item }) => (
    <TouchableOpacity style={styles.alertItem}>
      <View style={[styles.alertIcon, item.status === 'active' && styles.activeAlert]}>
        <Bell size={24} color={item.status === 'active' ? '#E91E63' : '#757575'} />
      </View>
      <View style={styles.alertContent}>
        <Text style={styles.alertMessage}>{item.message}</Text>
        <Text style={styles.alertTime}>{item.time}</Text>
      </View>
      {item.status === 'read' && (
        <CheckCircle size={20} color="#4CAF50" style={styles.readIcon} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={alerts}
        renderItem={renderAlert}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  alertItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  alertIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeAlert: {
    backgroundColor: '#FFE0E9',
  },
  alertContent: {
    flex: 1,
    marginLeft: 16,
  },
  alertMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  alertTime: {
    fontSize: 12,
    color: '#757575',
  },
  readIcon: {
    marginLeft: 12,
  },
});