import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

type Team = {
  id: number;
  name: string;
};

type TeamsPage = {
  results: Team[];
};

async function getTeam({ teamParam = 1 }) {
  const res = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamParam}`,
  );
  if (!res.ok) {
    throw new Error('Error fetching data');
  }
  const dataFromServer = await res.json();
  const data: TeamsPage = {
    results: dataFromServer.results,
  };
  return data;
}

export default function Teams() {}
