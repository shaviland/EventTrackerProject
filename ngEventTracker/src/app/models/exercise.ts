export class Exercise {
  id: number;
  name: string;
  type: string;
  duration: number;
  weight: number;
  numReps: number;
  numSets: number;
  place: string;

  // tslint:disable-next-line: max-line-length
  constructor(id?: number, name?: string, type?: string, duration?: number, weight?: number, numReps?: number, numSets?: number, place?: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.duration = duration;
    this.weight = weight;
    this.numReps = numReps;
    this.numSets = numSets;
    this.place = place;
  }

}
