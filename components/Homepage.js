import React, { useState } from 'react'
import { View,StyleSheet } from 'react-native'
import HomepageNav from './HomepageNav'
import NewsSection from './NewsSection';
import News from './News';

export default function Homepage({newsShowing,setNewsShowing}) {
  const [filter,setFilter]=useState(-1);

  return (
    <View style={styles.homeContainer}>
      {newsShowing==-1&&
      <>
       <HomepageNav setFilter={setFilter}/>
      
       <NewsSection filter={filter} setNewsShowing={setNewsShowing}/>
       </>
      }
      {newsShowing!==-1&&
      <News id={newsShowing}></News>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  homeContainer:{
    height:720,
  }
})