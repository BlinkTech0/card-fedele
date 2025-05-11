import React, { useState } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Button from '../UI/Button';
import { login } from '../../utils/auth';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length > 6;
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      setEmailError('Invalid email format');
    }
    if (!isPasswordValid) {
      setPasswordError('Password must be longer than 6 characters');
    }

    if (isEmailValid && isPasswordValid) {
      try {
        await login(email, password);
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="p-4">
        <Text className="text-lg font-bold mb-2">Email</Text>
        <TextInput
          className="border border-gray-300 rounded-md p-2 mb-1"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          onSubmitEditing={handleLogin}
        />
        {emailError ? <Text className="text-red-500 mb-2">{emailError}</Text> : null}
        <Text className="text-lg font-bold mb-2">Password</Text>
        <TextInput
          className="border border-gray-300 rounded-md p-2 mb-1"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={handleLogin}
        />
        {passwordError ? <Text className="text-red-500 mb-2">{passwordError}</Text> : null}
        <View className="flex-row justify-between">
          <Button title="Clear" onPress={handleClear} />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthForm;