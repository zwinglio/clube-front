<template>
  <div class="one">
    <h1>Teste de login</h1>
    {{ user.name }}
    <button @click="logout">Logout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
