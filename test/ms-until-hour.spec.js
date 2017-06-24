import msUntilHour from '../src/ms-until-hour'
import { assert, expect } from 'chai'

describe('when calling msUntilHour with 65 minutes before the target hour', () => {
  it('should return the ms equivalent of 65 minutes', () => {
    const inputDate = new Date()
    const inputHours = 1
    const inputMinutes = 55
    const inputSeconds = 0
    const inputMilliseconds = 0
    const targetHour = 3
    const expectedOutput = 65 * 60 * 1000 // 65 minutes & 60 seconds * 1000 milliseconds
    
    inputDate.setHours(inputHours)
    inputDate.setMinutes(inputMinutes)
    inputDate.setSeconds(inputSeconds)
    inputDate.setMilliseconds(inputMilliseconds)

    expect(msUntilHour(inputDate, targetHour)).to.equal(expectedOutput)
  })
})

describe('when calling msUntilHour 23 hours before the target hour, spanning across days', () => {
  it('should return the ms equivalent of 23 hours', () => {
    const inputDate = new Date()
    const inputHours = 23
    const inputMinutes = 0
    const inputSeconds = 0
    const inputMilliseconds = 0
    const targetHour = 22
    const expectedOutput = 23 * 60 * 60 * 1000 // 23 hours * 60 minutes & 60 seconds * 1000 milliseconds
    
    inputDate.setHours(inputHours)
    inputDate.setSeconds(inputSeconds)
    inputDate.setMinutes(inputMinutes)
    inputDate.setMilliseconds(inputMilliseconds)

    expect(msUntilHour(inputDate, targetHour)).to.equal(expectedOutput)
  })
})

describe('when calling msUntilHour at exactly the same time as the target hour', () => {
  it('should return the ms equivalent of 24 hours', () => {
    const inputDate = new Date()
    const inputHours = 23
    const inputMinutes = 0
    const inputSeconds = 0
    const inputMilliseconds = 0
    const targetHour = 23
    const expectedOutput = 24 * 60 * 60 * 1000 // 24 hours * 60 minutes & 60 seconds * 1000 milliseconds
    
    inputDate.setHours(inputHours)
    inputDate.setSeconds(inputSeconds)
    inputDate.setMinutes(inputMinutes)
    inputDate.setMilliseconds(inputMilliseconds)

    expect(msUntilHour(inputDate, targetHour)).to.equal(expectedOutput)
  })
})

describe('when calling msUntilHour with an invalid date, but a valid target hour', () => {
  it('should throw an error if a string is passed', () => {
    assert.throws(() => { msUntilHour('string', 2)} )
  })

  it('should throw an error if undefined is passed', () => {
    assert.throws(() => { msUntilHour(undefined, 2)} )
  })
})

describe('when calling msUntilHour with a valid date but an invalid target hour', () => {
  it('should throw an error if a string is passed', () => {
    assert.throws(() => { msUntilHour(new Date(), 'string')} )
  })

  it('should throw an error if undefined is passed', () => {
    assert.throws(() => { msUntilHour(new Date(), undefined)} )
  })

  it('should throw an error if a float is passed', () => {
    assert.throws(() => { msUntilHour(new Date(), 1.2)} )
  })
})

describe('when calling msUntilHour with a valid date and a target hour out of range', () => {
  it('should throw an error if -1 is passed', () => {
    assert.throws(() => { msUntilHour(new Date(), -1)} )
  })

  it('should throw an error if 24 is passed', () => {
    assert.throws(() => { msUntilHour(new Date(), 24)} )
  })
})

describe('when calling msUntilHour with a valid date and a target hour is at edge of range0', () => {
  it('should not throw an error if target hour is 0', () => {
    assert.doesNotThrow(() => { msUntilHour(new Date(), 0)} )
  })

  it('should not throw an error if target hour is 23', () => {
    assert.doesNotThrow(() => { msUntilHour(new Date(), 23)} )
  })
})
