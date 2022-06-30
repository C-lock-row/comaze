<template>
    <!-- 前の部屋に戻るボタン  -->
    <v-btn class="mx-2 back-btn-sm" fab color="white" depressed app prop @click="tweetForShare">
        <v-icon dark>mdi-share-variant</v-icon>
    </v-btn>
</template>


<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { tweetUrl } from "@/assets/settings"

export default defineComponent({
    props: {
        reload: {
            type: Function as PropType<() => void>,
            required: true
        }
    },
    setup() {
        const tweetForShare = () => {
            if (!window.open(tweetUrl, '_blank')) 
                window.location.href = tweetUrl
        }
        return {
            tweetForShare
        }
    }
})
</script>


<style  scoped>
.back-btn-sm {
    position: fixed;
    right: 10px;
    top: 10px;
    touch-action: manipulation;
}
</style>