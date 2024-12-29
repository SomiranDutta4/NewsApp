import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { useState } from 'react';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import Profile from './components/Profile';
export default function App() {
  const [newsShowing, setNewsShowing] = useState(-1);
  const [searchScreen, setSearchScreen] = useState(false);
  const [accountPage, setAccPage] = useState(false);


  return (
    <View style={styles.container}>
      <Navbar accountPage={accountPage} setAccPage={setAccPage} newsShowing={newsShowing} setNewsShowing={setNewsShowing}></Navbar>
      {!searchScreen && !accountPage &&
        <Homepage newsShowing={newsShowing} setNewsShowing={setNewsShowing}></Homepage>
      }
      {searchScreen &&!accountPage&&
        <SearchPage></SearchPage>
      }
      {accountPage&&
      <Profile></Profile>
      }
      <Footer setNewsShowing={setNewsShowing} setSearchScreen={setSearchScreen}></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '10',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
