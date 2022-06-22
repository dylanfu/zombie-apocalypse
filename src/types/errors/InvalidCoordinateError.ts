export default class InvalidCoordinateError extends Error {
  constructor(){
    super('Please provide valid coordinates')
  }
}
