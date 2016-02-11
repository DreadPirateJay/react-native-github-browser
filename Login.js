import React, {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('./img/Octocat.png')}
                />
                <Text style={styles.heading}>
                    Github Browser
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Github username..." />
                <TextInput
                    style={styles.input}
                    placeholder="Github password..."
                    secureTextEntry={true} />

                <TouchableHighlight
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Log In
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#48bbec',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 22,
        color: '#ffffff',
        alignSelf: 'center',
    },
    container: {
        backgroundColor: '#f5fcff',
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        padding: 10,
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec',
    },
    logo: {
        width: 66,
        height: 55,
    },
});