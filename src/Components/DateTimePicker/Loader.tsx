
import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

interface Props {
}

const Loader: React.SFC<Props> = (props) => {
    return (
        <View>
            <ActivityIndicator />
        </View>
    );
}


export default Loader;