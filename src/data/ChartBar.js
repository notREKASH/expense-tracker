const datasets = [
  {
    label: "Expenses",
    data: [],
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1,
  },
];

const barOptions = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: "Category",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Amount",
      },
    },
  },
};

export { datasets, barOptions };
