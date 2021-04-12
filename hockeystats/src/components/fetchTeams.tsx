import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function GetTeam() {
  const { isLoading, error, data, isFetching } = useQuery('teams', () =>
    fetch('https://statsapi.web.nhl.com/api/v1/teams/').then((res) =>
      res.json(),
    ),
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An Error has occured:';

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.link}</p>
      <strong>{data.locationName}</strong>
      <strong>{data.shortName}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
