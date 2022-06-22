import ICharacter from "./ICharacter";
import IGrid from "./IGrid";

export default interface IWorld {
  grid: IGrid,
  zombies: Array<ICharacter>,
  creatures: Array<ICharacter>,
  currentZombieId: number,
}