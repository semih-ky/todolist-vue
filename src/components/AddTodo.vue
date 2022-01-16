<template>
  <div class="field has-addons" style="width: 100% !important">
    <div class="control" style="width: 100% !important">
      <input v-model="todoText" class="input" type="text" placeholder="Todo..." />
    </div>
    <div class="control">
      <button @click="onAddTodo()" class="button is-primary">Add Todo</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'AddTodo',
  data() {
    return {
      todoText: "",
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    onAddTodo() {
      if (this.todoText.trim("").length > 0) {
        this.addTodo(this.todoText);
        this.todoText = "";
      }
    }
  }
};
</script>
