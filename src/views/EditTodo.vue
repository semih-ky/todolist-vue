<template>
  <Container>
    <div class="content">
      <h1>Edit Todo</h1>
      <p><strong>old:</strong> {{ todo.todo }}</p>
      <p><strong>new:</strong> {{ newTodoText }}</p>
    </div>
    <hr />
    <div class="field">
      <div class="control">
        <input v-model="newTodoText" class="input" type="text" />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <div class="buttons">
          <button @click="onSave" class="button is-primary">Save changes</button>
          <router-link to="/home" class="button is-link">Go Back</router-link>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditTodo',
  components: {
    Container,
  },
  data() {
    return {
      todo: null,
      newTodoText: '',
    };
  },
  computed: {
    ...mapGetters(['getTodo']),
    getTodoId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(['editTodo']),
    onSave() {
      this.editTodo({ id: this.todo.id, text: this.newTodoText });
      this.$router.push({ path: '/home' });
    },
  },
  created() {
    const id = this.getTodoId;
    this.todo = this.getTodo(id);
  },
};
</script>
