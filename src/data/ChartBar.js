import i18n from "@/i18n";

const { t } = i18n.global;

const datasets = [
  {
    label: t("message.chart.label"),
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
        text: t("message.chart.x-axis"),
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: t("message.chart.y-axis"),
      },
    },
  },
};

export { datasets, barOptions };
