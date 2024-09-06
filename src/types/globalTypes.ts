export type MarkerType =  {
  key: string;
  position: [number, number];
  text: string;
  amount?: number,
  probability?: number;
}

export type MarkersType = MarkerType[]
