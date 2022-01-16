<template>
  <Container>
    <router-link to="/about">Go to About</router-link>
    <AddTodo />
    <hr />
    <TodoList />
  </Container>
</template>

<script>
import Container from '../components/Container.vue';
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';

export default {
  name: 'Home',
  components: {
    Container,
    AddTodo,
    TodoList,
  },
};
</script>
