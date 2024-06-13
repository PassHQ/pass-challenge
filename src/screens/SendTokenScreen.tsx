import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {calculateFees} from '../utils/mockApi';

const SendTokenScreen: React.FC = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState<{address?: string; amount?: string}>({});
  const [fees, setFees] = useState<number | null>(null);

  const validateAddress = (address: string) => {
    const re = /^0x[a-fA-F0-9]{40}$/; // Basic regex for Ethereum addresses
    return re.test(address);
  };

  const validateAmount = (amount: string) => {
    const re = /^\d+(\.\d+)?$/; // Regex for positive numbers including decimals
    return re.test(amount);
  };

  const handleSend = async () => {
    let valid = true;
    let errors: {address?: string; amount?: string} = {};

    if (!validateAddress(address)) {
      valid = false;
      errors.address = 'Invalid blockchain address';
    }

    if (!validateAmount(amount)) {
      valid = false;
      errors.amount = 'Invalid amount';
    }

    setErrors(errors);

    if (valid) {
      try {
        const calculatedFees = await calculateFees(parseFloat(amount));
        setFees(calculatedFees);
        Alert.alert('Success', `Transaction fees: ${calculatedFees} ETH`);
        // Proceed with sending the token
      } catch (error) {
        Alert.alert('Error', 'Failed to calculate transaction fees');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Token</Text>
      <TextInput
        style={[styles.input, errors.address && styles.inputError]}
        placeholder="Blockchain Address"
        value={address}
        onChangeText={text => {
          setAddress(text);
          if (errors.address) {
            setErrors(prev => ({...prev, address: undefined}));
          }
        }}
      />
      {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
      <TextInput
        style={[styles.input, errors.amount && styles.inputError]}
        placeholder="Amount (ETH)"
        keyboardType="numeric"
        value={amount}
        onChangeText={text => {
          setAmount(text);
          if (errors.amount) {
            setErrors(prev => ({...prev, amount: undefined}));
          }
        }}
      />
      {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send Token</Text>
      </TouchableOpacity>
      {fees !== null && (
        <Text style={styles.feesText}>Calculated Fees: {fees} ETH</Text>
      )}
    </View>
  );
};

export default SendTokenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
