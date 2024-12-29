import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import dummyNews from '../dummyNews';

const News = ({ id }) => {
  const [newsItem,setNewsItem]=useState({});

  useEffect(()=>{
    const news=dummyNews.articles
    const foundNews = news.find((item) => item.id === id);
    setNewsItem(foundNews)
  },[id])

  if (!newsItem) {
    return (
      <View style={styles.container}>
        <Text>News not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground source={{ uri: newsItem.urlToImage }} style={styles.imageBackground}>
          {/* <View style={styles.overlay}> */}
            {/* <Text style={styles.sourceText}>{newsItem.source.name}</Text> */}
          {/* </View> */}
        </ImageBackground>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{newsItem.title}</Text>
          <Text style={styles.content}>{newsItem.content}</Text>

          <View style={styles.footer}>
            <Text style={styles.author}>{newsItem.author}</Text>
            <Text style={styles.published}>{newsItem.publishedAt}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  imageBackground: {
    height: 250,
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: 'black',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  sourceText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  author: {
    fontSize: 14,
    color: '#888',
  },
  published: {
    fontSize: 14,
    color: '#888',
  },
});

export default News;
