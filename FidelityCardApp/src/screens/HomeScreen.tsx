import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import CardCarousel from '../components/Card/CardCarousel';
import { useCardContext } from '../context/CardContext';
import BarcodeScanner from '../components/BarcodeScanner';
import LoadingIndicator from '../components/General/LoadingIndicator';

const HomeScreen = () => {
  const { cards, isLoading } = useCardContext();
  const [isScanning, setIsScanning] = useState(false);

  const handleBarcodeRead = (barcode: string) => {
    console.log('Barcode Read:', barcode);
    Alert.alert('Barcode Read', barcode);
  };

  if(isLoading){
    return <LoadingIndicator text="Loading cards..."/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardCarousel}>
        <CardCarousel cards={cards} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Scan Barcode" onPress={() => setIsScanning(true)} />
      </View>
      {isScanning && (
        <View style={styles.barcodeScannerContainer}>
          <BarcodeScanner onBarcodeRead={handleBarcodeRead} />
          <Button title="Close Scanner" onPress={() => setIsScanning(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardCarousel: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  barcodeScannerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    justifyContent: 'center', 
  },
});

export default HomeScreen;