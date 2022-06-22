export default class ZeroActiveZombiesError extends Error {
  constructor(){
    super('No actives zombies left to move, cannot access an active zombie')
  }
}
