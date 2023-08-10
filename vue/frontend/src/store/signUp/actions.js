import {
} from './mutation-types'

import axiosInst from '@/utility/axiosInst' 

export default {
    requestSignUpToSpring (context, payload) {
        const { userId, userPw, userName, useremail } = payload;

        return axiosInst.post("/Member/sing-up", {userId, userPw, userName, useremail})
            .then(() => {
                alert("회원가입 완료!")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },

}