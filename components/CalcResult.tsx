import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TextProps {
  result: string,
  setResult: (result: string) => void,
};

const CalcResult: FunctionComponent<TextProps> = ({ result, setResult }) => {
  const back = () => {
    if (result.length === 1 ) {
      return setResult('0');
    };
    
    return setResult(result.slice(0, -1))
  };
  
  const comafy = (value: string) => {
    if (value.includes('.')) {
      return value.replace(/[.]/g, ',');
    };

    return value;
  };

  return(
    <View style={styles.container}>
      <Text 
        style={styles.display} 
        onPress={back}
      >{result.length > 10 
        ? comafy(Number(result).toExponential(2)) 
        : comafy(result)}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  display: {
    fontSize: 70,
    color: 'white',
    textAlign: 'right',
  },

  container: {
    padding: 20,
  },
});

export default CalcResult;
