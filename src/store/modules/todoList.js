import { DBList } from '../../db/DBList';

function createUniqueId() {
  const sample = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
  const size = sample.length;

  let uniId = [];

  while (uniId.length < 10) {
    let randNum = Math.floor(Math.random() * size);
    uniId.push(sample[randNum]);
  }

  return uniId.join('');
}

const state = {
  todoList: [...DBList],
};

const getters = {
  getAll: (state) => state.todoList,
  getDoneTodos: (state) => state.todoList.filter((item) => item.done),
  getUndoneTodos: (state) => state.todoList.filter((item) => !item.done),
  getTodo: (state) => (id) => state.todoList.find((item) => item.id === id),
};

const actions = {
  addTodo({ commit }, todo) {
    const newTodo = {
      id: createUniqueId(),
      todo: todo,
      done: false,
    };

    commit('addTodo', newTodo);
  },
  deleteTodo({ commit, state }, id) {
    const newList = state.todoList.filter((item) => item.id !== id);
    commit('deleteTodo', newList);
  },
  toggleDone({ commit, state }, id) {
    const index = state.todoList.findIndex((item) => item.id === id);
    commit('toggleDone', index);
  },
  editTodo({ commit, state }, { id, text }) {
    const index = state.todoList.findIndex((item) => item.id === id);
    commit('editTodo', {text, index});
  }
};

const mutations = {
  addTodo(state, newTodo) {
    state.todoList.unshift(newTodo);
  },
  deleteTodo(state, newList) {
    state.todoList = newList;
  },
  toggleDone(state, index) {
    state.todoList[index].done = !state.todoList[index].done;
  },
  editTodo(state, {index, text}) {
    state.todoList[index].todo = text;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
