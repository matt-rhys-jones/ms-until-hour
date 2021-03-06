![](https://travis-ci.org/matt-rhys-jones/ms-until-hour.svg?branch=master)

# Get the number of milliseconds until a given hour

Lightweight helper to get the number of milliseconds from a given date until the hour you specify. Particularly handy for scheduling a `setTimeout()`.

## Usage Example
**Install**
`npm install ms-until-hour`

**Return the number of milliseconds between now and 3:00am (03:00):**

```javascript
const msUntilHour = require('ms-until-hour')

msUntilHour(new Date(), 3)
```

If the current time is 2:20am then this will return `2400000` (40 minutes * 60 seconds * 1000ms).

**Return the number of milliseconds between now and 7:00pm (19:00):**

```javascript
const msUntilHour = require('ms-until-hour')

msUntilHour(new Date(), 19)
```
...you get the idea!

## Issues
Please raise a Github issue if you spot any problems.

## Contributing
Feel free to submit issues, fixes or new features (ms-until-minute would be nice...):

- `npm run compile` - transpile from `src` to `lib`
- `npm test` - run mocha with code coverage output

Please include tests with any contributions.
