import {
} from './mutation-types'

import axiosInst from '@/utility/axiosInst' 

export default {
    requestSignUpToSpring (context, payload) {
        const { userId, userPw } = payload;

        return axiosInst.post(`/sing-up/${userId, userPw}`)
            .then(() => {
                alert("회원가입 완료!")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },

}