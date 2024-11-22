import React from "react";

// Import default flag as a fallback if no flag is provided for a team
import DefaultFlag from "../../../../public/assets/images/algeria.png";

// MatchCard component with dynamic props for team details
const MatchCard = ({
  team1 = { name: "Team 1", flag: DefaultFlag },
  team2 = { name: "Team 2", flag: DefaultFlag },
  time = "00:00",
  date = "01 Jan",
}) => (
  <div className="w-96 md:w-[350px] h-64 p-5 bg-grayG shadow-lg rounded-2xl flex flex-col gap-6">
    {/* Top Section: Team initials and match time */}
    <div className="flex justify-between items-center mb-4">
      <div className="text-sm text-right flex">
        <div className="font-semibold border-grayC bg-grayG border w-12 h-12 rounded-full flex items-center justify-center">
          <img
            src={DefaultFlag}
            alt={`${team1.name} Flag`}
            className="rounded-full w-7 h-7"
          />
        </div>
        <div className="font-semibold border-grayC bg-grayG border w-12 h-12 rounded-full flex items-center justify-center -translate-x-2">
          <img
            src={DefaultFlag}
            alt={`${team1.name} Flag`}
            className="rounded-full w-7 h-7"
          />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-bold text-lg">{time}</p>
        <p className="text-sm text-grayA">{date}</p>
      </div>
    </div>

    {/* Middle Section: Team flags and names */}
    <div className="w-full flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <img
          src={DefaultFlag}
          alt={`${team1.name} Flag`}
          className="rounded-full w-6 h-6"
        />
        <p>Algeria</p>
      </div>
    </div>

    {/* Bottom Section: Full team names */}
    <div className="text-lg mt-4">
      <h2 className="font-bold">{team1.name}</h2>
      <h2 className="text-grayA">{team2.name}</h2>
    </div>
  </div>
);

export default MatchCard;
