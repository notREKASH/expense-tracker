<script setup>
import { ref, watch } from 'vue';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { PolarArea } from 'vue-chartjs';
import { datasets } from '@/data/ChartPolar';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

const props = defineProps({
    expenses: Array
});

// Before the setup function
const chartData = ref({
    labels: [],
    datasets: datasets
});

const options = {
    responsive: true,
};

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
    <PolarArea :data="chartData" :options="options" class="chart-polar" />
</template>