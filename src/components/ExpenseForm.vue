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

// Set the current date as the default value for the date field
date.value = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric', month: '2-digit', day: '2-digit'
})

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
        alert.log('Please fill all the fields')
    } else if (isNaN(amount.value)) {
        alert.log('Please enter a valid amount')
    } else {
        const expense = {
            id: Math.floor(Math.random() * 1000),
            amount: amount.value,
            category: category.value.name,
            wording: wording.value,
            date: date.value
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
                    <label for="amount">Amount</label>
                    <InputText id="amount" v-model="amount" class="p-1.5" placeholder="39€" />
                </div>
            </div>
            <div class="card flex  justify-center">
                <div class="flex flex-col gap-1 w-full">
                    <label for="category">Category</label>
                    <AutoComplete v-model="category" :suggestions="filteredCategories" field="name" @complete="search"
                        placeholder="Select a category" class="w-full" />
                </div>
            </div>
            <div class="card flex  justify-center">
                <div class="flex flex-col gap-1 w-full">
                    <label for="wording">Wording</label>
                    <InputText id="wording" v-model="wording" aria-describedby="wording-help" class="p-1.5" />
                    <small id="wording-help">Please enter the wording of the expense</small>
                </div>
            </div>
            <div class="card flex justify-center">
                <div class="flex flex-col gap-1 w-full">
                    <label for="date">Date</label>
                    <Calendar id="date" v-model="date" dateFormat="dd/mm/yy" />
                    <small id="date-help">Please enter the date of the expense</small>
                </div>
            </div>
        </div>
        <div class="flex mt-4 justify-end">
            <Button type="submit" label="Add expense" text raised class="p-2" />
        </div>
    </form>
</template>
