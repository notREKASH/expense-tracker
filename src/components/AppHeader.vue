<script setup>

import InputSwitch from 'primevue/inputswitch';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const switchLanguage = () => {
    if (locale.value === 'en') {
        console.log('Switching to French');
        locale.value = 'fr';
    } else {
        console.log('Switching to English');
        locale.value = 'en';
    }
};

const checked = ref(false);

</script>

<template>
    <header class="bg-gray-800 text-white p-4 flex align-middle justify-between">
        <h1 class="text-2xl font-semibold">{{ $t('message.header-title') }}</h1>
        <nav class="flex justify-end gap-4">
            <InputSwitch v-model="checked" @change="switchLanguage" class="w-10 h-6" />
            <a href="https://github.com/notREKASH" target="_blank">
                <img src="../assets/github.svg" alt="GitHub" class="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/joris-benmehal-6266a427a/" target="_blank">
                <img src="../assets/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
            </a>
        </nav>
    </header>
</template>

<style scoped>
.p-inputswitch .p-inputswitch-slider {
    background-image: url('../assets/fr-flag.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.p-inputswitch.p-highlight .p-inputswitch-slider {
    background-image: url('../assets/en-flag.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>