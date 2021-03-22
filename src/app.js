import 'bootstrap'
import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        768: {
            perView: 1
        },
        992: {
            perView: 2
        },
        1200: {
            perView: 3
        }
    }
}).mount()
