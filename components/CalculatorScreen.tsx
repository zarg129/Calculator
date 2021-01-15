import React, { FunctionComponent } from 'react';
import { StyleSheet, View} from 'react-native';
import CalcResult from './CalcResult';
import ButtonRow from './Buttons';

const CalculatorScreen: FunctionComponent = () => {
  const [result, setResult] = React.useState<any>('0');
  const [memory, setMemory] = React.useState<number>(0);
  const [waitingOperandmemo, setWaitingOperandmemo] = React.useState<any>(null);
  const [operand, setOperand] = React.useState<any>(null);

  const handleClick = (title: string) => {
    let num = parseFloat(result);

    if (title === 'AC') {
      return setResult('0');
    };

    if (title === '+/-') {
      return setResult((num * -1).toString());
    };

    if (title === '%') {
      return setResult((num / 100).toString());
    };

    if (title === 'mc') {
      setMemory(0);
    };

    if (title === 'mr') {
      if (memory === 0) {
        return result.toString();
      };

      return setResult(memory.toString());
    };

    if (title === 'm+') {
      if (memory !== 0) {
        return setMemory(+memory + Number(result));
      };

      return setMemory(result.toString());
    };

    if (title === 'm-') {
      if (memory !== 0) {
        return setMemory(+memory - Number(result));
      };

      return setMemory(result);
    };

    if (title === '÷') {
      setWaitingOperandmemo(num);
      setResult('0');
      setOperand('÷');
      
      return;
    };

    if (title === '×') {
      setWaitingOperandmemo(num);
      setResult('0');
      setOperand('×');
      
      return;
    };

    if (title === '-') {
      setWaitingOperandmemo(num);
      setResult('0');
      setOperand('-');
      
      return;
    };

    if (title === '+') {
      setWaitingOperandmemo(num);
      setResult('0');
      setOperand('+');
      
      return;
    };

    if (title === ',') {
      if (result.includes('.')) {
        return;
      }

      return setResult(result + '.');
    }

    if (title === '=') {
      switch (operand) {
        case '÷' :
          setResult((waitingOperandmemo / num).toString());
          return result.toString();
        
        case '×' :
          setResult((waitingOperandmemo * num).toString());
          return result.toString();

        case '-' :
          setResult((waitingOperandmemo - num).toString());
          return result.toString();

        case '+' :
          setResult((waitingOperandmemo + num).toString());
          return result.toString();

        default:
          return result.toString();
      };
    };

    if (result[result.length - 1] === '.') {
      setResult(result + title);
    } else {
      setResult(parseFloat(num + title).toString());
    };
  };
    
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <CalcResult result={result} setResult={setResult} />
      </View>
      
      <View>
        <View style={styles.row}>
          <ButtonRow handleClick={handleClick} title='AC' backgroundColor='#C0BEBE' color='white' />
          <ButtonRow handleClick={handleClick} title='+/-' backgroundColor='#C0BEBE' color='white' />
          <ButtonRow handleClick={handleClick} title='%' backgroundColor='#C0BEBE' color='white' />
          <ButtonRow handleClick={handleClick} title='÷' backgroundColor='#FFC300' color='white' />
        </View>

        <View style={styles.row}>
          <ButtonRow handleClick={handleClick} title='mc' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='mr' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='m-' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='m+' backgroundColor='#FFC300' color='white' />
        </View>

        <View style={styles.row}>
          <ButtonRow handleClick={handleClick} title='7' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='8' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='9' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='×' backgroundColor='#FFC300' color='white' />
        </View>

        <View style={styles.row}>
          <ButtonRow handleClick={handleClick} title='4' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='5' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='6' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='-' backgroundColor='#FFC300' color='white' />
        </View>

        <View style={styles.row}>
          <ButtonRow handleClick={handleClick} title='1' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='2' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='3' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='+' backgroundColor='#FFC300' color='white' />
        </View>

        <View style={[styles.row, { marginBottom: 20 }]}>
          <ButtonRow handleClick={handleClick} title='0' backgroundColor='#595655' color='white' flex={2} />
          <ButtonRow handleClick={handleClick} title=',' backgroundColor='#595655' color='white' />
          <ButtonRow handleClick={handleClick} title='=' backgroundColor='#FFC300' color='white' />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
});

export default CalculatorScreen;
