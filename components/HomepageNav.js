import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';

export default function HomepageNav({ setFilter }) {
  const [activeFilter, setActiveFilter] = useState(-1);

  const filterHandler = (index) => {
    setActiveFilter(index);
    setFilter(index);
  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navButtonContainer}>
        <TouchableOpacity
          style={[
            styles.navButton,
            activeFilter === 1 && styles.activeButton,
          ]}
          onPress={() => filterHandler(1)}
        >
          <Text
            style={[
              styles.navText,
              activeFilter === 1 && styles.activeText,
            ]}
          >
            Tech
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            activeFilter === 2 && styles.activeButton,
          ]}
          onPress={() => filterHandler(2)}
        >
          <Text
            style={[
              styles.navText,
              activeFilter === 2 && styles.activeText,
            ]}
          >
            Sports
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            activeFilter === 3 && styles.activeButton,
          ]}
          onPress={() => filterHandler(3)}
        >
          <Text
            style={[
              styles.navText,
              activeFilter === 3 && styles.activeText,
            ]}
          >
            Cinema
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.closeView}>
        {activeFilter !== -1 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => filterHandler(-1)}
          >
            <Text style={styles.clearText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'white'
  },
  navButtonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.7,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
  },
  activeButton: {
    backgroundColor: '#000',
  },
  navText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },
  activeText: {
    color: '#fff',
  },
  clearButton: {
    marginHorizontal: 10,
    borderRadius: 6,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
