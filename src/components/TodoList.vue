<template>
  <div class="is-flex is-flex-wrap-wrap">
    <div
      v-for="todo of todoList"
      :key="todo.id"
      class="card mr-5 my-5 is-flex is-flex-direction-column is-justify-content-space-between"
      style="width: 300px !important"
    >
      <div class="card-content">
        <div class="content">
          <div class="is-flex is-justify-content-end mb-2">
            <span v-if="todo.done" class="tag is-primary">Done</span>
          </div>
          {{ todo.todo }}
        </div>
      </div>
      <footer class="card-footer">
        <a @click="toggleDone(todo.id)" class="card-footer-item">{{
          todo.done ? 'Undone' : 'Done'
        }}</a>
        <router-link
          class="card-footer-item"
          :to="{ name: 'edit-todo', params: { id: todo.id } }"
        >
          Edit
        </router-link>
        <a @click="deleteTodo(todo.id)" class="card-footer-item has-text-danger"
          >Delete</a
        >
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'TodoList',
  computed: {
    ...mapState({
      todoList: (state) => state.todoList.todoList,
    }),
  },
  methods: {
    ...mapActions(['deleteTodo', 'toggleDone']),
  },
};
</script>
