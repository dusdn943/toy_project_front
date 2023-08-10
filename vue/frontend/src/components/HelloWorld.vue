<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          TOY-PROJECT
        </h1>
      </v-col>
      <v-btn color="blue" @click="goToSignUp">회원가입</v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',
  dat() {
    return {

    }
  },
  methods: {
    goToSignUp() {
      // $router.push("/sign-up-page").catch(() => {});
      this.$router.push("/sign-up-page")
    }
  }
}
</script>
