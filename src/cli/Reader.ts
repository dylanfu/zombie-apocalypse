import * as inquirer from 'inquirer'
import IConfiguration from '../types/interfaces/IConfiguration'
import { parseCoordinate, parseCoordinateList, parseMoves } from './Parser'
import {
  validateCoordinate,
  validateCoordinateList,
  validateMoves,
  validateNumber
} from './Validator'

export const input = async (): Promise<IConfiguration> => {
  const questions = [
    {
      name: 'dimensions',
      message: 'Enter dimensions of grid:',
      type: 'input',
      validate: validateNumber
    },
    {
      name: 'zombieCoordinate',
      message: 'Enter intial coordinate of zombie:',
      type: 'input',
      validate: validateCoordinate
    },
    {
      name: 'creatureCoordinates',
      message: 'Enter coordinates of creatures:',
      type: 'input',
      validate: validateCoordinateList
    },
    {
      name: 'moves',
      message: 'Enter moves:',
      type: 'input',
      validate: validateMoves
    }
  ]

  const answers = await inquirer.prompt(questions)

  return {
    dimensions: parseInt(answers.dimensions),
    zombieCoordinate: parseCoordinate(answers.zombieCoordinate),
    creatureCoordinates: parseCoordinateList(answers.creatureCoordinates),
    moves: parseMoves(answers.moves)
  }
}
