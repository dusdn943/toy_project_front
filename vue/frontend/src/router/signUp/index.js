import SignUpPage from '@/views/signUp/SignUpPage.vue'
import HomeViews from '@/views/HomeView.vue'

const SignUpRouter = [
    {
        path: '/sign-up-page',
        name: 'SignUpPage',
        component: SignUpPage
    },
    {
        path: '/',
        name: 'HomeViews',
        component: HomeViews
    }

]

export default SignUpRouter
