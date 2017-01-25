import FiltersList from 'src/components/filters-list'
import {expect} from 'chai'

describe('filters-list.', () => {
  describe('getUniq.', () => {
    it('can get array with uniq vals by getUniq', () => {
      const c = {
        red: 'red',
        white: 'white',
        blue: 'blue'
      }

      const arr = [c.red, c.white, c.blue, c.red, c.white]
      const result = FiltersList.methods.getUniq(arr)
      const expectedLength = Object.keys(c).length

      expect(result).to.have.length(expectedLength)
      expect(result.indexOf(c.red) > -1).to.be.true
      expect(result.indexOf(c.white) > -1).to.be.true
      expect(result.indexOf(c.blue) > -1).to.be.true
    })

    it('can handle array if integers', () => {
      const c = {
        first: 1,
        second: 2,
        third: 3
      }

      const arr = [c.first, c.second, c.third, c.first, c.second]
      const result = FiltersList.methods.getUniq(arr)
      const expectedLength = Object.keys(c).length

      expect(result).to.have.length(expectedLength)
      expect(result.indexOf(c.first) > -1).to.be.true
      expect(result.indexOf(c.second) > -1).to.be.true
      expect(result.indexOf(c.third) > -1).to.be.true
    })

    it('can handle empty arr', () => {
      const result = FiltersList.methods.getUniq([])

      expect(result).to.have.length(0)
    })

    it('can\'t handle no params', () => {
      expect(() => FiltersList.methods.getUniq()).to.throw('getUniq: array is mandatory')
    })
  })

  // TODO (S.Panfilov)
  describe('onSelect.', () => {
    it('QQQQ', () => {
      // const result = FiltersList.methods.onSelect()
    })
  })

  // TODO (S.Panfilov)
  describe('filterBy.', () => {
    it('invalid params', () => {
      const method = 'filterBy'
      expect(() => FiltersList.methods[method]()).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([])).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([], null, null)).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method](null, '', null)).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method](null, null, '')).to.throw(`${method}: params should exist`)
    })

    it('can filter array of objects by value', () => {
      const c = {
        red: 'red',
        white: 'white',
        blue: 'blue'
      }

      const arr = [
        {
          name: `${c.red}_color_1`,
          color: c.red
        },
        {
          name: `${c.red}_color_2`,
          color: c.red
        },
        {
          name: `${c.white}_color_1`,
          color: c.white
        },
        {
          name: `${c.blue}_color_1`,
          color: c.blue
        },
        {
          name: `${c.blue}_color_2`,
          color: c.blue
        },
        {
          name: `${c.blue}_color_3`,
          color: c.blue
        },
      ]

      const redArr = FiltersList.methods.filterBy(arr, c.red, 'color')
      const blueArr = FiltersList.methods.filterBy(arr, c.blue, 'color')
      const whiteArr = FiltersList.methods.filterBy(arr, c.white, 'color')

      expect(redArr).to.have.length(2)
      expect(whiteArr).to.have.length(1)
      expect(blueArr).to.have.length(3)

      expect(redArr.filter(v => v.name === `${c.red}_color_1`)).to.be.have.length(1)
      expect(redArr.filter(v => v.name === `${c.red}_color_2`)).to.be.have.length(1)

      expect(whiteArr.filter(v => v.name === `${c.white}_color_1`)).to.be.have.length(1)

      expect(blueArr.filter(v => v.name === `${c.blue}_color_1`)).to.be.have.length(1)
      expect(blueArr.filter(v => v.name === `${c.blue}_color_2`)).to.be.have.length(1)
      expect(blueArr.filter(v => v.name === `${c.blue}_color_3`)).to.be.have.length(1)

    })
  })

  // TODO (S.Panfilov)
  describe('filterByColors.', () => {
    it('invalid params', () => {
      const method = 'filterByColors'
      expect(() => FiltersList.methods[method]()).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([])).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([], null)).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method](null, '')).to.throw(`${method}: params should exist`)
    })
  })

  // TODO (S.Panfilov)
  describe('filterColorsBy.', () => {
    it('invalid params', () => {
      const method = 'filterColorsBy'
      expect(() => FiltersList.methods[method]()).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([])).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([], null, null)).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method](null, '', null)).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method](null, null, '')).to.throw(`${method}: params should exist`)
    })
  })

  // TODO (S.Panfilov)
  describe('getFilteredArr.', () => {
    it('invalid params', () => {
      const method = 'getFilteredArr'
      expect(() => FiltersList.methods[method]()).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([])).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([], null)).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method]([], null, '')).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method](null, '')).to.throw(`${method}: params should exist`)
      expect(() => FiltersList.methods[method](null, '', '')).to.throw(`${method}: params should exist`)
    })
  })
  // TODO (S.Panfilov)
  describe('getFilteredByColorArr.', () => {
    it('QQQQ', () => {
      // const result = FiltersList.methods.onSelect()
    })
  })
})