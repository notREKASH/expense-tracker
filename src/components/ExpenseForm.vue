<script setup>
import { ref, onMounted } from 'vue'
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import { CategoryService } from "@/data/CategoryService";


const props = defineProps({
    onAddExpense: Function
})

const amount = ref('')
const category = ref('')
const wording = ref('')
const date = ref('')

// Set current date
const currentDate = new Date();
date.value = currentDate;

// AutoComplete component
const categories = ref([]);
const filteredCategories = ref([]);

onMounted(() => {
    CategoryService.getCategories().then(data => {
        categories.value = data;
    });
});

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCategories.value = [...categories.value];
        } else {
            filteredCategories.value = categories.value.filter(category => {
                return category.name.toLowerCase().includes(event.query.toLowerCase());
            });
        }
    }, 250);
};


const submitExpense = (event) => {
    event.preventDefault()
    if (!amount.value || !category.value || !wording.value || !date.value) {
        alert('Please fill all the fields')
    } else if (isNaN(amount.value)) {
        alert('Please enter a valid amount')
    } else {

        const formatDate = (date) => {
            return new Date(date).toLocaleDateString('fr-FR', {
                year: 'numeric', month: '2-digit', day: '2-digit'
            })
        }

        const expense = {
            id: Math.floor(Math.random() * 1000),
            amount: amount.value,
            category: category.value.name,
            wording: wording.value,
            date: formatDate(date.value)
        }

        props.onAddExpense(expense)

        // Reset form fields
        amount.value = ''
        category.value = ''
        wording.value = ''
        date.value = ''
    }
}

</script>

<template>
    <form @submit="submitExpense" class="flex flex-col align-middle justify-center w-full mx-auto">
        <div class="flex flex-col gap-4 p-4 rounded-lg bg-gray-100 shadow-lg">
            <div class="card flex  justify-center">
                <div class="flex flex-col gap-1 w-full">
                    <label for="amount">{{ $t("message.form.label.amount") }}</label>
                    <InputText id="amount" v-model="amount" class="p-1.5"
                        :placeholder='$t("message.form.label.amount-placeholder")' />
                </div>
            </div>
            <div class="card flex  justify-center">
                <div class="flex flex-col gap-1 w-full">
                    <label for="category">{{ $t("message.form.label.category") }}</label>
                    <AutoComplete v-model="category" :suggestions="filteredCategories" field="name" @complete="search"
                        :placeholder='$t("message.form.label.category-placeholder")' class="w-full" />
                </div>
            </div>
            <div class="card flex  justify-center">
                <div class="flex flex-col gap-1 w-full">
                    <label for="wording">{{ $t("message.form.label.wording") }}</label>
                    <InputText id="wording" v-model="wording" aria-describedby="wording-help"
                        :placeholder='$t("message.form.label.wording-placeholder")' class="p-1.5" />
                    <small id="wording-help">{{ $t('message.form.label.wording-helper') }}</small>
                </div>
            </div>
            <div class="card flex justify-center">
                <div class="flex flex-col gap-1 w-full">
                    <label for="date">{{ $t("message.form.label.date") }}</label>
                    <Calendar id="date" v-model="date" dateFormat="dd/mm/yy" />
                    <small id="date-help">{{ $t('message.form.label.date-helper') }}</small>
                </div>
            </div>
        </div>
        <div class="flex mt-4 justify-end">
            <Button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                {{ $t("message.form.button.submit") }}
            </Button>
        </div>
    </form>
</template>
