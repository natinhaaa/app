import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export default function index() {
    return (
        <View className="flex-1 p-8 bg-blue-400">
            <Text className="text-2xl mb-4 text-blue-100">Login</Text>
            <Input placeholder='Insira seu e-mail' label='E-mail:' labelClasses='text-cyan-700' inputClasses='border-blue-800 bg-blue-100' placeholderTextColor="#003e8f" />
            <Input placeholder='Insira sua senha' label='Senha:' labelClasses='text-cyan-700' inputClasses='border-blue-800 bg-blue-100' placeholderTextColor="#003e8f" secureTextEntry={true} />
            <Button label='Entrar' className="mt-5 bg-cyan-700" labelClasses='text-white'/>
        </View>
    )
}