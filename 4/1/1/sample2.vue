<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ profile }}</p>
    </div>
</template>
<script>
    export default {
        name: 'Instance',
        data () {
            return {
                title: 'A Vue App'
            }
        },
        created () {
            Object.assign(this.$data, {
                profile: 'This is a Vue App'
            });
            console.log(this.$data);
        }
    }
</script>