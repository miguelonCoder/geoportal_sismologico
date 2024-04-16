import { Earthquake } from "./earthquake.entity";

export interface Report {
  id: string,
  earthquake: string | Earthquake,
  description: string,
  geom: number[],
  tags: string[]
}