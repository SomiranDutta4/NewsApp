import React from 'react'
import { View } from 'react-native'
import SearchNav from './SearchNav'
import MainSearchPage from './MainSearchPage'

const SearchPage = () => {
  return (
    <View style={{'height':'720'}}>
      <SearchNav></SearchNav>
      <MainSearchPage></MainSearchPage>
    </View>
  )
}

export default SearchPage
