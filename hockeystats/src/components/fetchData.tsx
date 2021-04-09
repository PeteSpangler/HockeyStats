import axios from 'axios';
import api from '../baseURL';

export interface fetchTeams {
  id: number;
  name: string;
  link: string;
  division: fetchDivisions[];
  conference: fetchConferences[];
}

export interface fetchDivisions {
  id: number;
  name: string;
  link: string;
}

export interface fetchConferences {
  id: number;
  name: string;
  link: string;
}

export interface fetchDataFromServer {
  id: number;
  name: string;
  link: string;
  divison: Array<{
    id: number;
    name: string;
    link: string;
  }>;
  conference: Array<{
    id: number;
    name: string;
    link: string;
  }>;
}
const GetTeams = () => {
  api.get('teams').then((response) => {
    return console.log(response.data);
  });
};

export const Teams = () => {
  return (
    <div>
      <table>
        <thead></thead>
      </table>
    </div>
  );
};
