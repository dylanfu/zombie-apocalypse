import * as Reader from '../cli/Reader'
import * as Display from '../cli/Display'
import * as SimulatorService from '../services/SimulatorService'
import Logger from '../util/Logger'

export const execute = async (): Promise<void> => {
  try {
    const params = await Reader.input()
    const results = SimulatorService.simulate(params)
    Display.displaySimulatorResult(results)
  } catch (error) {
    Logger.error(error)
    process.exit()
  }
}
