import { expect } from 'chai'
import Grid from '../src/models/Grid'
import EMove from '../src/types/enums/EMove'

describe('Test Grid Class', () => {
  it('test if coordinates are valid', () => {
    const grid = new Grid(4)
    const coordinate = { x: 1, y: 2 }
    expect(grid.isValidCoordinate(coordinate)).to.equal(true)
  })

  it('test if coordinate are invalid', () => {
    const grid = new Grid(4)
    const coordinate = { x: 5, y: 5 }
    expect(grid.isValidCoordinate(coordinate)).to.equal(false)
  })

  it('test retrieval of next move coordinate', () => {
    const grid = new Grid(4)
    const coordinate = { x: 1, y: 1 }
    expect(grid.getNextCoordinate(coordinate, EMove.LEFT)).to.deep.equal({
      x: 0,
      y: 1
    })
    expect(grid.getNextCoordinate(coordinate, EMove.RIGHT)).to.deep.equal({
      x: 2,
      y: 1
    })
    expect(grid.getNextCoordinate(coordinate, EMove.UP)).to.deep.equal({
      x: 1,
      y: 0
    })
    expect(grid.getNextCoordinate(coordinate, EMove.DOWN)).to.deep.equal({
      x: 1,
      y: 2
    })
  })

  it('test left edge move', () => {
    const grid = new Grid(2)
    const coordinate = { x: 0, y: 0 }
    const result = { x: 1, y: 0 }
    expect(grid.getNextCoordinate(coordinate, EMove.LEFT)).to.deep.equal(result)
  })

  it('test right edge move', () => {
    const grid = new Grid(2)
    const coordinate = { x: 1, y: 0 }
    const result = { x: 0, y: 0 }
    expect(grid.getNextCoordinate(coordinate, EMove.RIGHT)).to.deep.equal(
      result
    )
  })

  it('test upper edge move', () => {
    const grid = new Grid(2)
    const coordinate = { x: 0, y: 0 }
    const result = { x: 0, y: 1 }
    expect(grid.getNextCoordinate(coordinate, EMove.UP)).to.deep.equal(result)
  })

  it('test bottom edge move', () => {
    const grid = new Grid(2)
    const coordinate = { x: 0, y: 1 }
    const result = { x: 0, y: 0 }
    expect(grid.getNextCoordinate(coordinate, EMove.DOWN)).to.deep.equal(result)
  })
})
