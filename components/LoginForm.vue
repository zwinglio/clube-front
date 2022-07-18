<template>
  <section id="login">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h2>Entre para começar!</h2>
          <form class="mt-4">
            <div class="form-group mt-3">
              <label for="email">E-mail</label>
              <input
                type="email"
                class="form-control mt-2"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mt-3">
              <label for="password">Senha</label>
              <input
                type="password"
                class="form-control mt-2"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="w-100 text-center">
              <NuxtLink
                to="/weeks"
                type="submit"
                class="btn btn-primary w-75 mt-4"
              >
                Entrar
              </NuxtLink>
            </div>
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
