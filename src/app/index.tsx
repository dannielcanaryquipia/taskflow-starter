import { Text, View } from 'react-native';

// Setup check screen. If you see this on your phone with the blue title,
// Expo, Expo Router and NativeWind are all working. Replace it in Week 12.
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-white p-6">
      <Text className="text-3xl font-bold text-blue-600">TaskFlow</Text>
      <Text className="text-center text-base text-slate-600">
        Your starter project is running. Edit src/app/index.tsx to begin.
      </Text>
    </View>
  );
}
