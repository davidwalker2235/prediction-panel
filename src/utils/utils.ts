import {MarkersType, MarkerType} from "@/types/globalTypes";

export const findStationByPosition = (data: MarkersType, targetPosition: {lat: number, lng: number}) => {
  return data.find((station: MarkerType) =>
    station.position[0] === targetPosition.lat &&
    station.position[1] === targetPosition.lng
  );
};

export const findStationByKey = (data: MarkersType, key: string) => {
  return data.find((station: MarkerType) =>
    station.markerKey === key
  );
};

export const isTheSameMarker = (marker1: MarkerType, marker2: MarkersType) => {
  const obj1Str = JSON.stringify(marker1);
  const obj2Str = JSON.stringify(marker2);
  return obj1Str === obj2Str;
};

export const generateRandomArrays = () => {
  const arrayLength = 24;
  const targetSum = 30;
  const minSum = targetSum * 0.8; // 80% del total

  let a = new Array(arrayLength);
  let b = new Array(arrayLength);
  let c = new Array(arrayLength);

  for (let i = 0; i < arrayLength; i++) {
    a[i] = Math.floor(Math.random() * targetSum);
    let minB = Math.max(0, minSum - a[i]);
    b[i] = Math.floor(Math.random() * (targetSum - a[i] - minB + 1)) + minB;

    c[i] = targetSum - a[i] - b[i];
  }

  return [a, b, c];
}