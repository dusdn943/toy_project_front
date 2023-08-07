<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="userId" placeHolder="아이디"/>
            <input type="password" v-model="userPw" placeHolder="비밀번호"/>
            <v-btn type="submit" color="pink" @click="SignUpbtn">가입하기</v-btn>
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            userId: '',
            userPw: ''
        }
    },
    methods: {
        onSubmit() {
            this.$emit("submit", {userId: this.userId, userPw: this.userPw})    
        
        }        
    }
}
</script>
<style lang="">
    
</style>