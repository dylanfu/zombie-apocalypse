export const validateNumber = async (
  input: string
): Promise<boolean | string> => {
  const match = input.match(/^(\d+)$/)
  return match
    ? true
    : 'Invalid format for grid dimensions, valid format would be i.e. 5'
}

export const validateCoordinate = async (
  input: string
): Promise<boolean | string> => {
  const match = input.match(/^(\s?\d+,\d+\s?)$/)
  return match
    ? true
    : 'Invalid format for zombie coordinates, valid format would be i.e. 1,1'
}

export const validateCoordinateList = async (
  input: string
): Promise<boolean | string> => {
  const match = input.match(/^(\s?\d+,\d+\s?)+$/)
  return match
    ? true
    : 'Invalid format for creatures coordinates, valid format would be i.e. 1,1 2,3'
}

export const validateMoves = async (
  input: string
): Promise<boolean | string> => {
  const match = input.match(/^[U,R,D,L]+$/)
  return match
    ? true
    : 'Invalid format for movements, valid movements are i.e. LRUD'
}
