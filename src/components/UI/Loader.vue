<template>
    <div class="loader-container"><div class="loader"></div></div>
</template>

<style lang="scss" scoped>
.loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
    margin-bottom: 50px;
    &-container {
        display: flex;
        justify-content: center;
    }
}

.loader::before,

.loader::after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
}
</style>