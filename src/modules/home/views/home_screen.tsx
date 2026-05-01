import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useHomeViewModel } from '../viewmodels/home_viewmodel';
import { AppColors } from '../../../core/theme/colors';

/**
 * Home Screen View.
 */
export const HomeScreen = ({ navigation }: any) => {
  const { user, isLoading, error, fetchUser } = useHomeViewModel();

  useEffect(() => {
    fetchUser(1); // Fetch user with ID 1 on mount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      
      <View style={styles.card}>
        {isLoading ? (
          <ActivityIndicator color={AppColors.primary} />
        ) : error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : user ? (
          <View>
            <Text style={styles.label}>User Details (from API):</Text>
            <Text style={styles.info}>Name: {user.name}</Text>
            <Text style={styles.info}>Email: {user.email}</Text>
          </View>
        ) : (
          <Text>No user data available</Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: AppColors.textPrimary,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: AppColors.white,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 30,
    minHeight: 150,
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    color: AppColors.grey,
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    fontWeight: '500',
    color: AppColors.textPrimary,
    marginBottom: 5,
  },
  errorText: {
    color: AppColors.error,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: AppColors.backgroundButtonBrown,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: AppColors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
