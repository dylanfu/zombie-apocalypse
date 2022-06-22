import { assert, expect } from 'chai'
import * as Validator from '../src/cli/Validator'

describe('Test Validator', () => {
  it('test validateNumber with valid input', () => {
    return Validator.validateNumber('4').then((result) => {
      assert.isTrue(result)
    })
  })

  it('test validateNumber with invalid input', () => {
    return Validator.validateNumber('NaN').then((result) => {
      assert.equal(
        result,
        'Invalid format for grid dimensions, valid format would be i.e. 5'
      )
    })
  })

  it('test validateCoordinate with valid input', () => {
    return Validator.validateCoordinate('1,1').then((result) => {
      assert.isTrue(result)
    })
  })

  it('test validateCoordinate with invalid input', () => {
    return Validator.validateCoordinate('invalid coordinate a,b').then(
      (result) => {
        assert.equal(
          result,
          'Invalid format for zombie coordinates, valid format would be i.e. 1,1'
        )
      }
    )
  })

  it('test validateCoordinateList with valid input', () => {
    return Validator.validateCoordinateList('1,1 0,1 2,3').then((result) => {
      assert.isTrue(result)
    })
  })

  it('test validateCoordinateList with invalid input', () => {
    return Validator.validateCoordinateList(
      'invalid coordinates 1,1,0,1,2,3'
    ).then((result) => {
      assert.equal(
        result,
        'Invalid format for creatures coordinates, valid format would be i.e. 1,1 2,3'
      )
    })
  })

  it('test validateMoves with valid input', () => {
    return Validator.validateMoves('LRUD').then((result) => {
      assert.isTrue(result)
    })
  })

  it('test validateMoves with invalid input', () => {
    return Validator.validateMoves('invalid moves ABCD').then((result) => {
      assert.equal(
        result,
        'Invalid format for movements, valid movements are i.e. LRUD'
      )
    })
  })
})
