import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { AppColors } from '../theme/colors';

interface AppLoaderProps {
  visible: boolean;
}

/**
 * A simple overlay loader widget.
 */
export const AppLoader: React.FC<AppLoaderProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.container}>
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color={AppColors.primary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderWrapper: {
    padding: 20,
    backgroundColor: AppColors.white,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
