<script setup>
import ExpenseForm from '../components/ExpenseForm.vue'
import ExpenseList from '../components/ExpenseList.vue'
import ExpenseChart from '../components/ExpenseChartBar.vue'
import ExpenseChartPolar from '../components/ExpenseChartPolar.vue'
import Footer from '../components/AppFooter.vue'
import { onMounted, ref } from 'vue'

const chartChanged = ref(false)
const expenses = ref([])

const addExpense = (expense) => {
    expenses.value.push({
        id: expense.id,
        amount: expense.amount,
        category: expense.category,
        wording: expense.wording,
        date: expense.date
    })
    localStorage.setItem('expenses', JSON.stringify(expenses.value))
}

const removeExpense = (id) => {
    console.log('Removing expense with id:', id)
    expenses.value = expenses.value.filter((expense) => expense.id !== id)
    localStorage.setItem('expenses', JSON.stringify(expenses.value))
}


onMounted(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
        try {
            const parsedExpenses = JSON.parse(storedExpenses);
            expenses.value = parsedExpenses;
        } catch (error) {
            console.error('Failed to parse expenses:', error);
        }
    } else {
        console.log('No expenses found in localStorage');
    }
});

</script>

<template>
    <main class="max-w-screen-xl mx-auto mt-2 px-10 flex flex-col gap-3">
        <h1 class="text-center font-bold text-xl">Expense Tracker</h1>
        <ExpenseForm :on-add-expense="addExpense" />
        <div class="flex flex-col">
            <div>
                <ExpenseList :expenses="expenses" :remove-expense="removeExpense" />
            </div>
            <div class="mt-4 border-t-2 pt-4">
                <h3 class="text-center font-semibold text-lg mb-2">Expenses Chart</h3>
                <ExpenseChartPolar :expenses="expenses" v-if="chartChanged" />
                <ExpenseChart :expenses="expenses" v-else />
                <div class="flex align-middle justify-center mt-2">
                    <button @click="chartChanged = !chartChanged"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                        Changed to {{ chartChanged ? 'Polar' : 'Bar' }} Chart
                    </button>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>