/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';

type Teams = {
  id: number;
  name: string;
  firstYearOfPlay: string;
};

function GetTeams() {
  return useQuery(
    'teams',
    async (): Promise<Array<Teams>> => {
      const { data } = await axios.get(
        'https://statsapi.web.nhl.com/api/v1/teams',
      );
      return data.teams;
    },
  );
}

function FetchTeams() {
  const { status, error, data, isFetching } = GetTeams();

  return (
    <div>
      {status === 'loading' ? (
        'Loading...'
      ) : error instanceof Error ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <ul>
            {data?.map((teams) => (
              <div>
                <li key={teams.id}>
                  {teams.name} debuted in {teams.firstYearOfPlay}
                </li>
              </div>
            ))}
          </ul>
          <div>{isFetching ? 'Updating...' : ''}</div>
          <ReactQueryDevtools initialIsOpen />
        </>
      )}
    </div>
  );
}
export default FetchTeams;
