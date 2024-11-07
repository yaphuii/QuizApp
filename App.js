import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Image, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
    const [answers, setAnswers] = useState({});

    const correctAnswers = {
        genre: 'jazz',
        rollingInTheDeep: 'adele',
        streamingService: 'spotify',
        shapeOfYou: 'ed sheeran',
    };

    const handleValueChange = (questionKey, selectedValue) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionKey]: selectedValue,
        }));
    };

    const handleSubmit = () => {
        let correctCount = 0;
        for (const key in correctAnswers) {
            if (answers[key] === correctAnswers[key]) {
                correctCount++;
            }
        }

        let feedback;
        if (correctCount === 4) {
            feedback = "Well done!";
        } else if (correctCount >= 2) {
            feedback = "Good job!";
        } else {
            feedback = "You can do better next time.";
        }

        Alert.alert(`You got ${correctCount} out of ${Object.keys(correctAnswers).length} correct!`, feedback);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.titleContainer}>
                <Icon name="music" size={50} color="#ff6347" />
                <Text style={styles.title}>Explore the World of Music</Text>
            </View>

            <View style={styles.questionCard}>
                <Image source={require('./img/genre.jpg')} style={styles.image} />
                <Text style={styles.question}>Which genre of music is known for its improvisation and swing?</Text>
                <RNPickerSelect
                    onValueChange={(value) => handleValueChange('genre', value)}
                    items={[
                        { label: 'Jazz', value: 'jazz' },
                        { label: 'Classical', value: 'classical' },
                        { label: 'Rock', value: 'rock' },
                    ]}
                    style={pickerSelectStyles}
                />
            </View>

            <View style={styles.questionCard}>
                <Image source={require('./img/adele.jpg')} style={styles.image} />
                <Text style={styles.question}>Which singer is known for the hit song "Rolling in the Deep"?</Text>
                <RNPickerSelect
                    onValueChange={(value) => handleValueChange('rollingInTheDeep', value)}
                    items={[
                        { label: 'Adele', value: 'adele' },
                        { label: 'Taylor Swift', value: 'taylor swift' },
                        { label: 'Rihanna', value: 'rihanna' },
                    ]}
                    style={pickerSelectStyles}
                />
            </View>

            <View style={styles.questionCard}>
                <Image source={require('./img/music.jpg')} style={styles.image} />
                <Text style={styles.question}>What is the name of the popular music streaming service that starts with "S"?</Text>
                <RNPickerSelect
                    onValueChange={(value) => handleValueChange('streamingService', value)}
                    items={[
                        { label: 'Spotify', value: 'spotify' },
                        { label: 'SoundCloud', value: 'soundcloud' },
                        { label: 'SoundOn', value: 'soundon' },
                    ]}
                    style={pickerSelectStyles}
                />
            </View>

            <View style={styles.questionCard}>
                <Image source={require('./img/ed sheeran.jpg')} style={styles.image} />
                <Text style={styles.question}>Which artist released the hit song "Shape of You"?</Text>
                <RNPickerSelect
                    onValueChange={(value) => handleValueChange('shapeOfYou', value)}
                    items={[
                        { label: 'Ed Sheeran', value: 'ed sheeran' },
                        { label: 'Sam Smith', value: 'sam smith' },
                        { label: 'Shawn Mendes', value: 'shawn mendes' },
                    ]}
                    style={pickerSelectStyles}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="SUBMIT ANSWERS" onPress={handleSubmit} color="#ff6347" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f4f4f9',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#333',
        textAlign: 'center',
        marginLeft: 15,
    },
    questionCard: {
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    question: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: '#333',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    inputAndroid: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: '#333',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
});

export default App;
