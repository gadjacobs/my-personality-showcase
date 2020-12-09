import { Bar } from "react-chartjs-2";

export default function WorkSummary() {
  const data = {
    labels: [
      "Autonomy",
      "Creativity",
      "Variety",
      "Self Dev",
      "Structure",
      "Security",
      "Influence",
      "Prestige",
      "Performance",
      "Financial Rewards",
      "Work Life Balance",
      "Working Conditions",
      "Work Relationships",
      "Altruism",
    ],
    datasets: [
      {
        label: "Value Profiles",
        data: [2, 6, 4, 6, 7, 5, 5, 5, 5, 6, 4, 7, 6, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 20, 147, 0.2)",
          "rgba(64, 244, 208, 0.2)",
          "rgba(210, 105, 30, 0.2)",
          "rgba(255, 69, 0, 0.2)",
          "rgba(139, 0, 139, 0.2)",
          "rgba(220, 20, 60, 0.2)",
          "rgba(244, 164, 96, 0.2)",
          "rgba(25, 25, 112, 0.2)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 20, 147, 1)",
            "rgba(64, 244, 208, 1)",
            "rgba(210, 105, 30, 1)",
            "rgba(255, 69, 0, 1)",
            "rgba(139, 0, 139, 1)",
            "rgba(220, 20, 60, 1)",
            "rgba(244, 164, 96, 1)",
            "rgba(25, 25, 112, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
}
