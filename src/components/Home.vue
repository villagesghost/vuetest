<template>
    <div class="bg-main min-h-screen bg-no-repeat bg-cover bg-fixed">
        <Header />
        <Introduce />
        <Feature />
        <OurMisson />
        <Service />
        <div>
            <div class="max-w-3xl mx-auto">
                <Social />
                <div class="pt-14 pb-20 text-base text-white font-normal font-avenir text-center px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus. Arcu felis bibendum ut tristique et. Massa ultricies mi quis hendrerit dolor magna eget est. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.</div>
            </div>
        </div>
        <div class="bg-white">
            <div class="max-w-6xl mx-auto text-right relative bg-project bg-right bg-no-repeat bg-contain">
                <div class="relative max-w-585">
                    <svg class="fill-white absolute w-full min-h-530 -inset-y-5 z-10" preserveAspectRatio="none" data-bbox="20 34 160 132" viewBox="20 34 160 132" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true">
                        <g>
                            <path d="M180 100c0 36.45-35.817 66-80 66s-80-29.55-80-66 35.817-66 80-66 80 29.55 80 66z"></path>
                        </g>
                    </svg>
                    <div class="text-center relative z-20 py-16 max-w-310 ml-20">
                        <p class="text-55 font-dinneuze">A</p>
                        <h2 class="text-55 font-dinneuze whitespace-nowrap text-yellow-e6">NFT Fundraising</h2>
                        <p class="text-55 font-dinneuze">Project</p>
                        <p class="text-xl font-dinneuze font-normal">for Digital Nomads and Remote Knowledge Workers</p>
                        <div class="mx-auto pt-5">
                            <button class="text-base font-bold font-forum bg-btnyellow py-1 px-7 rounded-lg">Say Hello</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-yellowUnder min-h-380"></div>
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue';
import Introduce from './Introduce.vue'
import Feature from './Feature.vue'
import OurMisson from './OurMisson.vue'
import Service from './Service.vue'
import Social from './Social.vue'
import Footer from './Footer.vue'
export default {
    name: 'HomePage',
    components: {
        Header,
        Introduce,
        Feature,
        OurMisson,
        Service,
        Social,
        Footer
    }
}
</script>