import { IoIosSearch } from "react-icons/io";
import { IoFootball, IoBasketball } from "react-icons/io5";
import ManchesterUnited from "/assets/manchester.svg"; // Adjusted path

interface SubSidebarProps {
  openSidebar: boolean;
  // setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubSidebar = ({ openSidebar }: SubSidebarProps) => {
  // Example data for teams and leagues to make it easier to add items dynamically
  const teams = [
    { name: "Manchester United", img: ManchesterUnited, score: 424 },
    { name: "Manchester City", img: ManchesterUnited, score: 424 },
    { name: "Real Madrid", img: ManchesterUnited, score: 424 },
    { name: "Barcelona", img: ManchesterUnited, score: 424 },
    { name: "Bayern Munich", img: ManchesterUnited, score: 424 },
  ];

  const leagues = [
    { name: "Premier League", score: 424 },
    { name: "La Liga", score: 324 },
    { name: "Bundesliga", score: 224 },
    { name: "Serie A", score: 424 },
    { name: "Ligue 1", score: 124 },
  ];

  return (
    <div
      className={`${openSidebar ? "" : "hidden"} w-60 md:w-80 h-screen bg-grayD absolute left-20 flex flex-col gap-6 z-20`}
    >
      <div className="flex flex-col items-center gap-4 p-8">
        <h2 className="text-white font-bold text-xl text-center">
          ESC <span className="text-grayC font-normal">Sports</span>
        </h2>
        <div className="flex items-center gap-3 py-3 px-4 border border-grayC rounded-3xl">
          <IoIosSearch className="text-xl" />
          <input
            type="search"
            className="bg-transparent outline-none"
            placeholder="Jump to..."
          />
        </div>
      </div>
      <div className="w-full flex flex-col p-4">
        <h2 className="w-full text-start font-bold text-grayE">
          Main Categories
        </h2>
        <div className="flex flex-wrap py-4 gap-2">
          <div className="w-[48%] bg-grayB text-grayC rounded-2xl h-28 flex flex-col gap-3 items-center justify-center">
            <IoFootball className="text-4xl" />
            <p className="text-white">Football</p>
          </div>
          <div className="w-[48%] bg-grayB text-grayC rounded-2xl h-28 flex flex-col gap-3 items-center justify-center">
            <IoBasketball className="text-4xl" />
            <p className="text-white">Basketball</p>
          </div>
          <div className="w-[48%] bg-grayB text-grayC rounded-2xl h-28 flex flex-col gap-3 items-center justify-center">
            <p className="text-white">Tennis</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto px-5">
        {/* Teams Section */}
        <div className="w-full flex flex-col">
          <h2 className="w-full text-start font-bold text-grayE">Teams</h2>
          <div className="flex flex-col py-4 gap-5">
            {teams.map((team, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    src={team.img}
                    className="w-10"
                    alt={`${team.name} logo`}
                  />
                  <p>{team.name}</p>
                </div>
                <p className="text-grayC">{team.score}</p>
              </div>
            ))}
            <p className="text-blue-500 cursor-pointer">See more</p>
          </div>
        </div>
        {/* Leagues Section */}
        <div className="w-full flex flex-col">
          <h2 className="w-full text-start font-bold text-grayE">Leagues</h2>
          <div className="flex flex-col py-4 gap-5">
            {leagues.map((league, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>{league.name}</div>
                <p className="text-grayC">{league.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSidebar;
