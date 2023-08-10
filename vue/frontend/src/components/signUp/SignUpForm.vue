<template lang="">
    <div>
        <form @submit.prevent="onSubmit" class="text-center">
            <input type="text" v-model="userId" placeholder ="아이디"/><br>
            <input type="password" v-model="userPw" placeholder="비밀번호"/><br>
            <input type="name" v-model="userName" placeholder="이름"/><br>
            <input type="emaill" v-model="useremail" placeHolder="이메일"/><br>
            <v-btn @click="onSubmit" color="pink">가입하기</v-btn>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userId: '',
            userPw: '',
            userName: '',
            useremail: '',

        }
    },
    methods: {
        onSubmit() {
            this.$emit("submit", {userId: this.userId, userPw: this.userPw, userName: this.userName, useremail: this.useremail})    
        
        }        
    }
}
</script>
<style lang="">
    
</style>