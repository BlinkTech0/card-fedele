import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

interface BarcodeScannerProps {
  onBarcodeRead: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onBarcodeRead }) => {
  const [isScanning, setIsScanning] = useState(false);

  const handleBarcodeRead = (data: any) => {
    if (isScanning) {
      return;
    }
    setIsScanning(true);
    onBarcodeRead(data.data);
    setTimeout(() => {
      setIsScanning(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onBarCodeRead={handleBarcodeRead}
        captureAudio={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default BarcodeScanner;