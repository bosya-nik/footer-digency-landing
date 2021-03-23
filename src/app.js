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
new Glide('.glide-blog', {
    type: 'carousel',
    perView: 2,
    breakpoints: {
        540: {
            perView: 1
        },
        992: {
            perView: 2
        }
    }
}).mount()

const planSwitcher = document.getElementById('subscription-switcher')
const pricingMonthly = document.getElementById('monthly')
const pricingAnnual = document.getElementById('annual')

planSwitcher.onchange = function(e) {
    if(this.checked) {
        pricingAnnual.classList.remove('d-none')
        pricingMonthly.classList.add('d-none')
    } else {
        pricingAnnual.classList.add('d-none')
        pricingMonthly.classList.remove('d-none')
    }
}