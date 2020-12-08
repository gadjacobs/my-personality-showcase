import PersonalityTrait from "./personalityTrait";

export default function Personality() {
  const traits = [
    {
      trait: "Mind",
      name: "Introverted",
      color: "pink",
      percentage: "71%",
    },
    {
      trait: "Energy",
      name: "Intuitive",
      color: "green",
      percentage: "64%",
    },
    {
      trait: "Nature",
      name: "Thinking",
      color: "gray",
      percentage: "51%",
    },
    {
      trait: "Tactics",
      name: "Prospecting",
      color: "yellow",
      percentage: "60%",
    },
    {
      trait: "Identity",
      name: "Turbulent",
      color: "blue",
      percentage: "53%",
    },
  ];
  return traits.map((trait, i) => {
    return (
      <div class="p-4 lg:w-1/5 sm:w-1/2 w-full">
        <PersonalityTrait
          trait={trait.trait}
          name={trait.name}
          color={trait.color}
          percentage={trait.percentage}
        />
      </div>
    );
  });
}
