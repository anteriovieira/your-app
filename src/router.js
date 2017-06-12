export default function ({ state }) {

    state('home', {
        url: '',
        component: 'homePage'
    })

    state('about', {
        url: 'about',
        component: 'aboutPage'
    })

}