<template>
  <LoginForm />
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  head() {
    return {
      title: "Sign In — ergodnc",
    };
  },
};
</script>
