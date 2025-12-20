import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SessionScreen = () => {
  const participants = [
    { id: 1, name: 'Alex', img: 'https://i.pravatar.cc/100?u=1' },
    { id: 2, name: 'Sara', img: 'https://i.pravatar.cc/100?u=2' },
    { id: 3, name: 'Luca', img: 'https://i.pravatar.cc/100?u=3' },
    { id: 4, name: 'Elena', img: 'https://i.pravatar.cc/100?u=4' },
  ];

  return (
    <View style={styles.container}>
      {/* Header Info */}
      <View style={styles.header}>
        <Text style={styles.sessionTitle}>Final Exams Prep 📚</Text>
        <View style={styles.segmentBadge}>
          <Text style={styles.segmentText}>Current: Quantum Physics</Text>
        </View>
      </View>

      {/* Timer Circular Area */}
      <View style={styles.timerContainer}>
        <View style={styles.timerCircle}>
          <Text style={styles.timerText}>25:00</Text>
          <Text style={styles.timerSubtext}>Focus Phase</Text>
        </View>
      </View>

      {/* Participants */}
      <View style={styles.participantsSection}>
        <Text style={styles.sectionTitle}>Participants ({participants.length})</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.avatarList}>
          {participants.map((p) => (
            <View key={p.id} style={styles.avatarContainer}>
              <Image source={{ uri: p.img }} style={styles.avatar} />
              <Text style={styles.avatarName}>{p.name}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.addParticipant}>
            <Ionicons name="add" size={24} color="#6366f1" />
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Action Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, styles.stopButton]}>
          <Text style={styles.buttonText}>Stop Segment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.inviteButton]}>
          <Text style={[styles.buttonText, { color: '#6366f1' }]}>Invite Friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingTop: 60, paddingHorizontal: 20 },
  header: { alignItems: 'center', marginBottom: 40 },
  sessionTitle: { fontSize: 24, fontWeight: '800', color: '#1E293B' },
  segmentBadge: { backgroundColor: '#E0E7FF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginTop: 10 },
  segmentText: { color: '#4338CA', fontWeight: '600' },
  timerContainer: { alignItems: 'center', justifyContent: 'center', marginBottom: 40 },
  timerCircle: { width: 220, height: 220, borderRadius: 110, borderWidth: 8, borderColor: '#6366f1', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', elevation: 5 },
  timerText: { fontSize: 48, fontWeight: 'bold', color: '#1E293B' },
  timerSubtext: { fontSize: 16, color: '#64748B' },
  participantsSection: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#334155', marginBottom: 15 },
  avatarList: { flexDirection: 'row' },
  avatarContainer: { alignItems: 'center', marginRight: 15 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#CBD5E1' },
  avatarName: { marginTop: 5, fontSize: 12, color: '#475569' },
  addParticipant: { width: 60, height: 60, borderRadius: 30, borderStyle: 'dashed', borderWidth: 2, borderColor: '#6366f1', alignItems: 'center', justifyContent: 'center' },
  footer: { gap: 12 },
  button: { paddingVertical: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  stopButton: { backgroundColor: '#6366f1' },
  inviteButton: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#6366f1' },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
});

export default SessionScreen;