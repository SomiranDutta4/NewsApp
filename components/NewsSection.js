import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import dummy from '../dummyNews'

const NewsSection = ({ filter, setNewsShowing }) => {
  const categories = [
    'null',
    'Tech',
    'Sports',
    'Cinema'
  ]
  const [filteredNews, setFilteredNews] = useState([]);

  const specificHandler = (id) => {
    setNewsShowing(id);
  }

  useEffect(() => {
    const news = dummy.articles;
    if (filter === -1) {
      setFilteredNews(news);
    } else {
      const ctg = categories[filter];
      setFilteredNews(news.filter((headline) => headline.category === ctg));
    }
  }, [filter]);

  return (
    <View style={styles.mainNewsContainer}>
      <ScrollView >
        {filteredNews.map((newsParticular) => (
          <TouchableOpacity onPress={() => { specificHandler(newsParticular.id) }}>
            <View key={newsParticular.id} style={styles.newsItem}>
              <ImageBackground
                source={{ uri: newsParticular.urlToImage }}
                style={styles.imageBackground}
                resizeMode="cover"
              >
                <View style={styles.sourceContainer}>
                  <Text style={styles.source}>{newsParticular.source.name}</Text>
                </View>
              </ImageBackground>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{newsParticular.title}</Text>
                <Text style={styles.author}>{newsParticular.author}</Text>
                <Text style={styles.published}>{newsParticular.publishedAt}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainNewsContainer: {
    height: Dimensions.get('window').height * 0.72,
    width: Dimensions.get('window').width,
    // overflow:'scroll',
    flex: '1'
  },
  imageBackground: {
    height: 200,
    justifyContent: 'flex-end',
    padding: 10,
  },
  sourceContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  source: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
  published: {
    fontSize: 12,
  },
});

export default NewsSection;
