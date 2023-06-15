<template>
    <div>
        <h1>{{ msg }}</h1>
        <router-view />
    </div>
</template>

<script >
import router from '@/router';
import { RouterView } from 'vue-router';

export default {
    comments: {},
    data() {
        return {
            msg: "首页"
        };
    },
    components: { RouterView, router }
}
</script>

<style lang="scss" scoped></style>