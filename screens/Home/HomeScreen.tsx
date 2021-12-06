import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { Todo } from "../../models/Todo";
import { AppStateStore } from "../../redux/store";

export default function HomeScreen() {

    const navigation = useNavigation();
    const todos = useSelector((state: AppStateStore) => state.todo);
    return (
        <View style={styles.container}>

            {todos && todos.todoList.length > 0 ?
                <View style={styles.container}>
                    {todos.todoList.map((todo: Todo) => (
                        <ListItem key={todo.createdAt} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {todo.title}
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    numberOfLines={1}
                                >
                                    {todo.description}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))}
                </View>

                :
                <View></View>
            }
            <FAB
                icon={<Ionicons name="add" size={24} color={'white'} />}
                placement="right"
                onPress={() => navigation.navigate("AddTodo")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})