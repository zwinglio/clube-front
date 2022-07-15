<template>
  <section id="login">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h2>Entre para começar!</h2>
          <form>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="password">Senha</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <NuxtLink to="/weeks" type="submit" class="btn btn-success mt-4"
              >Entrar</NuxtLink
            >
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginForm",
  setup() {},
};
</script>
