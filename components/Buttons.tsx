import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  color: string,
  title: string,
  backgroundColor: string,
  flex?: number,
  handleClick: (title: string) => void,
};

const ButtonRow: FunctionComponent<ButtonProps> = ({ color, backgroundColor, title, flex, handleClick }) => {
  let bc = backgroundColor;
  
  return(
    <TouchableOpacity
      onPress={() => handleClick(title)}
      style={[styles.container, { backgroundColor: `${bc}` }, { flex: flex }]}
    >
      <Text style={{ color: `${color}`, fontSize: 28 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 5,
  },
});

export default ButtonRow;
