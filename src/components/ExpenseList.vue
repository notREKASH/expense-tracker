<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const props = defineProps({
    expenses: Array,
    removeExpense: Function
})

</script>

<template>
    <div class="flex flex-col gap-2">
        <h2 class="text-center text-lg font-semibold">Expenses table</h2>
        <DataTable :value="props.expenses" sortMode="multiple" tableStyle="min-width: 50rem">
            <Column field="amount" header="Amount" sortable style="width: 25%">
                <template #body="slotProps">
                    {{ slotProps.data.amount }}€
                </template>
            </Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="wording" header="Wording" sortable style="width: 25%"></Column>
            <Column field="date" header="Date" sortable style="width: 25%"></Column>
            <Column field="id" header="Actions" style="width: 25%">
                <template #body="slotProps">
                    <button @click="removeExpense(slotProps.data.id)"
                        class="hover:outline hover:outline-1 hover:outline-gray-600 hover:bg-gray-50 hover:text-gray-600 rounded-lg text-white bg-gray-600 p-1 transition duration-300 ease-in-out">
                        🗑️
                    </button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
