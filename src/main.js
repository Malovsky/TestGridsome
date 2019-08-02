import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css'

export default function (Vue, {head}) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Exo|Rubik&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
}
