<template>
    <ul class="rec-list">
        <li class="rec-card" v-for="(item, index) in goods" :key="index" @click="togglePage(item)">
            <img class="rec-media" :src="item.cover"/>
            <div class="rec-profile">
                <h4>{{ item.text }}</h4>
                <p class="rec-params">
                    原价：<span class="rec-price">￥{{ item.price }}</span>&nbsp;
                    促销价：<span class="rec-online-price">￥{{ item.onlinePrice }}</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
    import config from '../config/config'

    export default {
        name: "Index",
        computed: {
            goods() {
                return config.goods;
            }
        },
        methods: {
            togglePage(item) {
                this.$router.push({path: 'goods', query: {name: item.name}})
            }
        }
    }
</script>

<style scoped>

</style>