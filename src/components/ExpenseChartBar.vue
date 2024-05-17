<script setup>
import { ref, watch } from 'vue';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import { barOptions, datasets } from '@/data/ChartBar';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const props = defineProps({
    expenses: Array
});

const chartData = ref({
    labels: [],
    datasets: datasets
});

// Update chart data when expenses change
const updateChartData = () => {
    const newLabels = props.expenses.map((expense) => expense.category);
    const newData = props.expenses.map((expense) => expense.amount);

    chartData.value = {
        labels: newLabels,
        datasets: datasets.map((dataset) => {
            return {
                ...dataset,
                data: newData
            };
        })
    };
};

watch(() => props.expenses, updateChartData, { deep: true });

// Initialize chart data
updateChartData();
</script>

<template>
    <Bar :data="chartData" :options="barOptions" />
</template>