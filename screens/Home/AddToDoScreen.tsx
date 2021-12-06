import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, FAB } from "react-native-elements";
import { Formik } from "formik";
import * as yup from 'yup';
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addTodo } from "../../redux/reducers/todoReducers";
import { Todo } from "../../models/Todo";

export default function AddToDoScreen() {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const todoSchema = yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
    });

    const handleAddTodo = (title: string, description: string) => {
        let todo = new Todo(title, description, new Date().toUTCString());
        dispatch(addTodo([todo]));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                onSubmit={(values, actions) => {
                    handleAddTodo(values.title, values.description);
                    actions.resetForm();
                }}
                validationSchema={todoSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
                    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
                        <View style={styles.container}>
                            <View style={{ flex: 0, marginBottom: 20 }}>
                                <Text style={styles.textStyle}>Title</Text>
                                <TextInput
                                    value={values.title}
                                    onChangeText={handleChange('title')}
                                    textAlign="left"
                                    style={styles.textInputStyle}
                                    placeholder="type here.."
                                />
                            </View>
                            <View style={{ flex: 0 }}>
                                <Text style={styles.textStyle}>Description</Text>
                                <TextInput
                                    value={values.description}
                                    onChangeText={handleChange('description')}
                                    textAlign="left"
                                    textAlignVertical="top"
                                    style={[styles.textInputStyle, { minHeight: 100 }]}
                                    placeholder="type here.."
                                    multiline={true}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0 }}>
                            <Button
                                title={"SAVE"}
                                buttonStyle={{ borderRadius: 5 }}
                                onPress={() => handleSubmit()}
                            />
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#96C9F1'
    },
    textInputStyle: {
        borderWidth: 2,
        fontSize: 17,
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        borderColor: '#D5DBDF'
    }
})