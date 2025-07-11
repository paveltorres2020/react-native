
import { SafeAreaView, StyleSheet } from 'react-native';
import RickAndMortyCharacters from './lib/reckieMartinService';


export default function App() {

  return (
      <SafeAreaView style={styles.container}>
       <RickAndMortyCharacters />

     </SafeAreaView> 

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
 