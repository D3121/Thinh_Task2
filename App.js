import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Switch,
  Pressable,
  StyleSheet,
  StatusBar,
  SectionList,
  Image,
} from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [count, setCount] = useState(0);

  const handlePress = () => {
    if (isEnabled) setCount(prev => prev + 1);
  };

  const handleLongPress = () => {
    if (isEnabled) setCount(0);
  };

  const DATA = [
    {
      title: 'Fruits',
      data: [
        { id: '1', name: 'Avocado', price: '$3.00', image: 'https://cdn-icons-png.flaticon.com/512/2079/2079291.png' },
        { id: '2', name: 'Banana', price: '$2.00', image: 'https://cdn-icons-png.flaticon.com/512/2494/2494112.png' },
        { id: '3', name: 'Peach', price: '$4.00', image: 'https://cdn-icons-png.flaticon.com/512/6738/6738909.png' },
        { id: '4', name: 'Pineapple', price: '$5.00', image: 'https://cdn-icons-png.flaticon.com/512/898/898142.png' },
      ],
    },
    {
      title: 'Junk Food',
      data: [
        { id: '5', name: 'Burger', price: '$10.00', image: 'https://cdn-icons-png.flaticon.com/512/878/878052.png' },
        { id: '6', name: 'Pizza', price: '$15.00', image: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png' },
      ],
    },
    {
      title: 'Hot Selling',
      data: [
        { id: '5', name: 'Burger', price: '$10.00', image: 'https://cdn-icons-png.flaticon.com/512/878/878052.png' },
        { id: '6', name: 'Pizza', price: '$15.00', image: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png' },
        { id: '7', name: 'Banana', price: '$2.00', image: 'https://cdn-icons-png.flaticon.com/512/2494/2494112.png' },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Switch with dynamic colors */}
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        style={styles.switch}
        trackColor={{ false: '#fff', true: 'blue' }} // white when false, blue when true
        thumbColor={isEnabled ? '#fff' : '#ddd'} // white when enabled, gray when disabled
      />

      <View style={styles.countBox}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>

      <Pressable
        style={styles.touchable}
        onPress={handlePress}
        onLongPress={handleLongPress}
      >
        <Text style={styles.touchableText}>
          Click to increment. Long press to reset.
        </Text>
      </Pressable>

      {/* SectionList */}
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>{title}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  switch: {
    marginTop: 20,
    alignSelf: 'center',
  },
  countBox: {
    width: 200,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#d18b47',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'monospace',
  },
  touchable: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
  },
  touchableText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionHeaderContainer: {
    backgroundColor: 'orange',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});
