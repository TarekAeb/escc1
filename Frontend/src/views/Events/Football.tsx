import { IoBasketball, IoFootball } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { TbAntennaBars5 } from "react-icons/tb";
import { SiPremierleague } from "react-icons/si";
import MatchCard from "./Components/MatchCard";
import DefaultFlag from "/assets/images/algeria.png";
import AlgerianTeam from "/assets/images/algerian.png";
import Majer from "/assets/images/majer.png";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Match {
  fixture: {
    date: string;
  };
  teams: {
    home: { name: string };
    away: { name: string };
  };
  league: {
    name: string;
    season: string;
  };
}

const Football: React.FC = () => {
  const [nextMatch, setNextMatch] = useState<Match | null>(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setNextMatch(response.data[0]); // Assuming the first match is the next match
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatchData();
  }, []);


    const formattedDate = nextMatch
        ? new Date(nextMatch.fixture.date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
          })
        : null;

    const formattedTime = nextMatch
        ? new Date(nextMatch.fixture.date).toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
          })
        : null;

    return (
        <div className="w-full ml-20 overflow-hidden">
            <div className="bg-gradient">
                <div className="w-full flex justify-between">
                    <div className="p-4 xl:p-6 flex flex-col">
                        <div className="p-4 pl-6">
                            <div className="flex gap-4 items-center">
                                {nextMatch &&<div className="flex gap-1">
                                  <img src={nextMatch.teams.home.logo} alt={`${nextMatch.teams.home.name} logo`} className="w-6 h-6" />
                                  <img src={nextMatch.teams.away.logo} alt={`${nextMatch.teams.away.name} logo`} className="w-6 h-6" />
                                </div>}
                                {nextMatch ? (
                                    <div>
                                        <p>{formattedDate}</p>
                                        <p>{formattedTime}</p>
                                    </div>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>

                        {/* Additional Content */}
                        <div className="flex flex-col gap-4 p-6 pt-10">
                            {nextMatch? (
                              <div className="flex items-center text-[#d3d1d1] gap-2">
                                <img className="w-8 h-8" src={nextMatch.league.logo} />
                                <p className="text-md">{nextMatch.league.name} ({nextMatch.league.season})</p>
                            </div>
                              ):(
                            <div className="flex items-center text-[#d3d1d1] gap-2">
                                <SiPremierleague className="text-3xl text-[#360036]" />
                                <p className="text-md">PREMIER LEAGUE</p>
                            </div>
                            )}
                            {nextMatch?(
                            <div>
                                <h2 className="text-4xl font-bold">{nextMatch.teams.home.name}</h2>
                                <h2 className="text-4xl text-[#d3d1d1]">{nextMatch.teams.away.name}</h2>
                            </div>
                              ):
                            <div>
                                <h2 className="text-4xl font-bold">Real Madrid</h2>
                                <h2 className="text-4xl text-[#d3d1d1]">Barcelonna</h2>
                            </div>
                          }
                            {/* Betting, Live Match, Stats */}
                            <div className="flex space-x-4 max-lg:hidden">
                                <div className="flex items-center gap-1">
                                    <div className="hex hex1 relative">
                                        <GoArrowRight className="absolute text-grayA top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold -rotate-90" />
                                    </div>
                                    <p className="font-bold text-sm">All Bets</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="hex relative">
                                        <GoArrowRight className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold -rotate-90" />
                                    </div>
                                    <p className="font-bold text-sm">Live Match</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="hex relative">
                                        <TbAntennaBars5 className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold -rotate-90" />
                                    </div>
                                    <p className="font-bold text-sm">Statistics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Images */}
                    <div className="min-w-1/2 h-full">
                        <img
                            src={AlgerianTeam}
                            alt="algerianTeam"
                            className="h-full w-full max-lg:hidden"
                        />
                        <img
                            src={Majer}
                            alt="Rabeh Majer"
                            className="lg:hidden h-full w-full"
                        />
                    </div>
                </div>
                {/* Scrollable MatchCard section */}
                <div className="w-full px-4 overflow-x-auto">
                    <div className="flex gap-4">
                        <MatchCard />
                        <MatchCard />
                        <MatchCard />
                        <MatchCard />
                        <MatchCard />
                        <MatchCard />
                        <MatchCard />
                    </div>
                </div>
            </div>
            {/* Additional Layout */}
            <div className="w-full flex justify-between">
                <div className="flex flex-col p-4 xl:w-[80%]">
                    <div className="w-full flex justify-between p-4">
                        <div className="flex gap-3">
                            <h2 className="font-bold">Premier League</h2>
                            <h2>All Games</h2>
                        </div>
                        <div>Results</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="py-2 px-4 bg-grayG h-16 rounded-xl gap-6 flex justify-between items-center"
                            >
                                <div className="flex flex-col items-start">
                                    <h2 className="font-bold">14:00</h2>
                                    <p className="text-sm">13 Apr</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={DefaultFlag} className="w-10 h-10 " />
                                    <p>Everton</p>
                                </div>
                                <p className="text-grayA">VS</p>
                                <div className="flex items-center gap-3">
                                    <img src={DefaultFlag} className="w-10 h-10 " />
                                    <p className="text-grayA">City</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-10 h-10 p-1 bg-grayC rounded-lg flex items-center justify-center">
                                        <p>2</p>
                                    </div>
                                    <div className="w-10 h-10 p-1 bg-grayC rounded-lg flex items-center justify-center">
                                        <p>2</p>
                                    </div>
                                    <div className="w-10 h-10 p-1 bg-grayC rounded-lg flex items-center justify-center">
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-72 gap-3 p-4 xl:w-[20%]">
                    <div className="font-bold text-sm p-4">TOP TEAMS</div>
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="text-[#9f9f9f] py-2 px-4 rounded-xl bg-[#282828] flex justify-between items-center">
                            <div className="flex gap-3">
                                <img src={DefaultFlag} className="w-10 h-10 " />
                                <div>
                                    <p>Everton</p>
                                    <p className="text-[#C9C9C9] text-xs">#1</p>
                                </div>
                            </div>
                            <p>4</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Football;
