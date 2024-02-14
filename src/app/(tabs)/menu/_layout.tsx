import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '../../../constants/Colors';
import { useColorScheme } from '../../../components/useColorScheme';

export default function layout() {
    const colorScheme = useColorScheme();
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "Menu",
                headerRight: () => (
                    <Link href="/modal" asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <FontAwesome
                                    name="info-circle"
                                    size={25}
                                    color={Colors[colorScheme ?? 'light'].text}
                                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                />
                            )}
                        </Pressable>
                    </Link>
                ),
            }} />
        </Stack>
    )
}