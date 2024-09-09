import Input from './components/Input';
import Button from './components/Button';
import {Container, Content, Row, Column } from './styles';
import { useState } from 'react';





const App =() => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const handleAddNumber = (number) =>{
      setCurrentNumber(prev =>`${prev === '0' ? '' : prev}${number}`)
  }
  const handleClearNumber = () =>{
    setCurrentNumber('0');
  }
  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleClearNumber();
      setOperation('+');
    }else {
      const sum = Number(firstNumber)+ Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleMinusNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleClearNumber();
      setOperation('-');
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }
  const handleMultiplyNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleClearNumber();
      setOperation('*');
    }else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  }
  const handleDivideNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleClearNumber();
      setOperation('/');
    }else if(firstNumber!==0){
      const divide = Number(firstNumber) / Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(divide));
      setOperation('');
    }
  }
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case '*':
          handleMultiplyNumber();
          break;
        case '/':
          handleDivideNumber();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="*" onClick={() => handleMultiplyNumber()}/>
          <Button label="/" onClick={() => handleDivideNumber()}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="C" onClick={() => handleOnClear()}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleMinusNumber()}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleSumNumber()}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={() => handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
