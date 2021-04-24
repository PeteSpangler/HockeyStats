/* eslint-disable jsx-a11y/anchor-is-valid */

import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function FetchTeams() {
  const { isLoading, error, data, isFetching } = useQuery('teamsData', () =>
    fetch('https://statsapi.web.nhl.com/api/v1/teams').then((res) =>
      res.json(),
    ),
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      {
        <ul>
          {data.teams.map((teams) => (
            <li key={teams.id}>{teams.name}</li>
          ))}
        </ul>
      }
      <div>{isFetching ? 'Updating...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
