<template>
    <div class="mx-auto max-w-3xl relative">
        <h3 class="text-white font-dinneuze uppercase font-medium pt-11 text-center">Introducing</h3>
        <h2 class="text-50 font-dinneuze text-white font-normal text-center px-10">A NFT <span class="text-yellow-300">Fundraising Project</span> for Digital Nomads and Remote Knowledge Workers</h2>
        <div class="relative mb-11 mt-5">
            <img
                src="https://static.wixstatic.com/media/11062b_1134a743c90247bd95970e575baa005cf000.jpg/v1/fill/w_787,h_442,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_1134a743c90247bd95970e575baa005cf000.jpg"
                alt=""
                class="relative z-20"
                :class="{'opacity-0': isPlay}"
            />
            <button
                class="text-white w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                :class="{'opacity-0': isPlay}"
                @click="play"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" preserveAspectRatio="xMidYMin slice">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="18" cy="18" r="17" stroke="#fff" stroke-width="2"></circle>
                        <path fill="#fff" d="M23.935 17.708l-10.313 6.033V11.676z"></path>
                    </g>
                </svg>
            </button>
            <video
                ref="videoRef"
                src="https://video.wixstatic.com/video/11062b_1134a743c90247bd95970e575baa005c/1080p/mp4/file.mp4"
                @ended="onEnd"
                controls
                class="absolute inset-0"
                :class="{'z-10': !isPlay, 'z-40': isPlay}"
            >
                <source src="https://video.wixstatic.com/video/11062b_1134a743c90247bd95970e575baa005c/1080p/mp4/file.mp4" type="video/mp4">
            </video>
        </div>
        <div class="mx-auto text-center pb-20">
            <button class="mx-14 rounded-lg bg-white border-2 border-yellow-300 border-solid px-4 py-1.5 font-forum text-11 text-black">Connect Your Wallet</button>
            <button class="mx-14 rounded-lg border-2 border-yellow-300 border-solid px-1 py-1.5 font-forum text-11 text-white">Donate Through PayPal</button>
        </div>
        <Social />
        <img src="../assets/twisted.png" alt="" class="absolute bottom-10 right-0 transform translate-x-3/4">
    </div>
</template>

<script>
import { ref } from 'vue';
import Social from './Social.vue'

export default {
    name: 'IntroduceCompoent',
    components: {
        Social
    },
    setup() {
        const videoRef = ref()
        const isPlay = ref(false)
        const play = () => {
            videoRef.value.play()
            isPlay.value = true
        }
        const onEnd = () => {
            isPlay.value = false
        }
        return {
            videoRef,
            onEnd,
            play,
            isPlay
        }
    }
}
</script>