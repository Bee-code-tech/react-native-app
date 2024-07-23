// screens/DashboardScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BoxComponent from '../../components/BoxComponent';
import images from '../../assets/images';

const mockTransactions = [
  {
    id: 1,
    avatar: 'user2.png',
    name: 'John Doe',
    status: 'Transfer',
    amount: '₦ 2,999.0',
    badge: 'green',
  },
  {
    id: 2,
    avatar: 'user2.png',
    name: 'Jane Smith',
    status: 'Withdraw',
    amount: '₦ 230 800.0',
    badge: 'red',
  },
  {
    id: 3,
    avatar: 'user2.png',
    name: 'Michael Brown',
    status: 'Transfer',
    amount: '₦ 230,000.0',
    badge: 'green',
  },
];

const DashboardScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
          <View style={styles.greetingText}>
              <Text style={styles.greeting}>Good afternoon</Text>
              <Text style={styles.name}>Joshua Ajiboye</Text>
            </View>
        <View style={styles.avatars}>
          <Image source={require('../../assets/images/fire.png')} style={styles.avatar} />
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
        </View>
      </View>

      <BoxComponent text="My Cards" icon="card.png" backgroundColor="#EB5757" textColor="white" />
      <BoxComponent text="My Account" icon="boy.png" backgroundColor="#8186FF" textColor="white" />

      <View style={styles.transactionContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Recent transactions</Text>
          <Image source={require('../../assets/images/arrow-right.png')} style={styles.arrowIcon} />
        </View>
        <View style={styles.transactionList}>
        {mockTransactions.map(transaction => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionAvatarContainer}>
                <Image source={images[transaction.avatar]} style={styles.transactionAvatar} />
                <View style={[styles.badge, { backgroundColor: transaction.badge }]} />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionName}>{transaction.name}</Text>
                <Text style={styles.transactionStatus}>{transaction.status}</Text>
              </View>
              <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.beneficiariesContainer}>
        <View style={styles.beneficiariesHeader}>
          <Text style={styles.beneficiariesTitle}>Beneficiaries</Text>
          <Image source={require('../../assets/images/arrow-right.png')} style={styles.arrowIcon} />
        </View>
        <View style={styles.beneficiariesList}>
          <Image source={require('../../assets/images/user1.png')} style={styles.beneficiaryAvatar} />
          <Image source={require('../../assets/images/avatar.png')} style={styles.beneficiaryAvatar} />
          <Image source={require('../../assets/images/beneficiary1.png')} style={styles.beneficiaryAvatar} />
          <Image source={require('../../assets/images/plus.png')} style={styles.beneficiaryAvatar} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020912',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  greetingText: {
    flexDirection: 'column',
  },
  greeting: {
    color: 'white',
    fontSize: 18,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  transactionContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    color: 'white',
    padding: 15,
    marginBottom: 20,
    marginTop: 40
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  transactionTitle: {
    fontSize: 24,
    color: 'white',
  },
  arrowIcon: {
    width: 10,
    height: 14,
  },
  transactionList: {
    borderTopColor: '#ccc',
    
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  transactionAvatarContainer: {
    position: 'relative',
  },
  transactionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 20,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    color: 'white',
  },
  transactionStatus: {
    fontSize: 12,
    color: '#777',
  },
  transactionAmount: {
    fontSize: 16,
    color: 'white',
  },
  beneficiariesContainer: {
    backgroundColor: '#181818',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  beneficiariesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  beneficiariesTitle: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,

  },
  beneficiariesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  beneficiaryAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default DashboardScreen;
