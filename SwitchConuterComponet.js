import React, { useState } from 'react';
import { View, Text, Switch, Pressable, StyleSheet, Alert } from 'react-native';

// Simple React Native component
// - Switch ở trên cùng
// - Vùng Touchable có text: "Click to increment. Long press to reset." 
// - Click tăng counter, long press reset về 0

export default function SwitchCounter() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [count, setCount] = useState(0);

  const toggleSwitch = () => setIsEnabled(previous => !previous);

  const handlePress = () => {
    // Nếu muốn, bạn có thể disable hành vi khi switch off
    if (!isEnabled) {
      // Nếu đã tắt, chỉ hiển thị cảnh báo nhỏ
      return;
    }
    setCount(prev => prev + 1);
  };

  const handleLongPress = () => {
    if (!isEnabled) return;
    // Xác nhận trước khi reset (bỏ qua nếu không muốn)
    Alert.alert(
      'Reset counter',
      'Reset the counter to 0?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reset', onPress: () => setCount(0), style: 'destructive' },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchRow}>
        <Text style={styles.label}>Enable actions</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          accessibilityLabel="Enable or disable increment/reset"
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.touchable,
          !isEnabled && styles.touchableDisabled,
          pressed && styles.touchablePressed,
        ]}
        onPress={handlePress}
        onLongPress={handleLongPress}
        delayLongPress={600}
        accessibilityRole="button"
        accessibilityLabel={`Touchable area. Counter is ${count}`}
      >
        <Text style={[styles.touchableText, !isEnabled && styles.textDisabled]}>
          Click to increment. Long press to reset.
        </Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterText}>{count}</Text>
        </View>
      </Pressable>

      {!isEnabled && (
        <Text style={styles.hint}>
          Actions are disabled. Turn the switch on to increment/reset.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  touchable: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  touchablePressed: {
    opacity: 0.85,
  },
  touchableDisabled: {
    backgroundColor: '#efefef',
    borderColor: '#eee',
  },
  touchableText: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  textDisabled: {
    color: '#999',
  },
  counterBox: {
    minWidth: 48,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  counterText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  hint: {
    marginTop: 12,
    color: '#666',
    fontSize: 13,
  },
});