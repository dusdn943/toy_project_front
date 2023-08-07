<template>
    <div>
        회원가입
        <SignUpForm @submit="onSubmit" />
    </div>
</template>

<script>
import SignUpForm from '@/components/signUp/SignUpForm.vue';

const SignUpModule = "SignUpModule";

import { mapActions } from "vuex";

export default {
    components: {
        SignUpForm
    },
    methods: {
        ...mapActions(SignUpModule, ['requestSignUpToSpring']),
        async onSubmit(payload) {
            await this.requestSignUpToSpring(payload);
        }
    }
}
</script>

<style>
    
</style>
