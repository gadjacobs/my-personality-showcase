import { Doughnut } from "react-chartjs-2";

export default function CareerSummary() {
  const data = {
    labels: [
      "Artistic",
      "Realistic",
      "Investigative",
      "Enterprising",
      "Conventional",
      "Social",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [27, 25, 17, 13, 10, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(25, 25, 112, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(25, 25, 112, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      width={50}
      height={25}
    />
  );
}
