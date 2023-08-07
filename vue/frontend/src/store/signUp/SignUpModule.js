
import mutations from "@/store/signUp/mutations"
import actions from "@/store/signUp/actions"
import state from "@/store/signUp/states"

const signUpModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default signUpModule