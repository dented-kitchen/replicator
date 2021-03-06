
/**
 * Represents commonly used units in recipes.
 */
export default class Units {
  constructor(options) {
    const defaults = {
      name: '',
      symbol: '',
    };

    const actual = Object.assign({}, defaults, options);

    this.name = actual.name;
    this.symbol = actual.symbol;
    if (actual.plural) this.plural = actual.plural;
  }

  toJSON() {
    return this.name;
  }

  /**
   * Returns a string with the units name.
   * @returns {string} The units name.
   */
  toString() {
    return this.name;
  }

  /**
   * Find and returns a Units constant given a string name or symbol. Must be exact match.
   * @param {string} str Unit name or symbol to lookup.
   * @returns {Units} Matching Units object, or count (TODO: ??) if not found.
   */
  static Lookup(str) {
    let result = UNITS.count;
    Object.values(UNITS).forEach((unit) => {
      if ((str === unit.name) ||                      // Match the unit name
          (str === unit.name + 's') ||                // Match the plural unit name
          (str === unit.symbol) ||                    // Match the symbol
          (unit.plural && str === unit.plural)) {     // Match a custom plural name
        result = unit;
      }
    });

    return result;
  }


  /** 
   * Temperature units constant for Celsius (°C).
   */
  static get CELSIUS() { return UNITS.celsius; }

  /**
   * Units constant for a count (a unit-less number).
   * For example, this would be used for the number of eggs.
   */
  static get COUNT() { return UNITS.count; }

  /**
   * Weight units constant for grams (g).
   */
  static get GRAMS() { return UNITS.grams; }

  /**
   * Temperature units constant for Fahrenheit (°F).
   */
  static get FAHRENHEIT() { return UNITS.fahrenheit; }

  /**
   * Time units constant for minutes (m).
   */
  static get MINUTES() { return UNITS.minutes; }

  /**
   * Volume measure constant for a teaspoon (tsp).
   */
  static get TEASPOON() { return UNITS.teaspoon; }
}

// Create 'singleton' constants for each pre-defined unit type
// These are accessed via the Units class static getters above
const UNITS = Object.freeze({
  celsius: Object.freeze(
    new Units({
      name: 'Celsius',
      symbol: 'C',
    })
  ),
  count: Object.freeze(
    new Units({
      name: 'count',
      symbol: '',
    })
  ),
  fahrenheit: Object.freeze(
    new Units({
      name: 'Fahrenheit',
      symbol: 'F',
    })
  ),
  grams: Object.freeze(
    new Units({
      name: 'gram',
      symbol: 'g',
    })
  ),
  minutes: Object.freeze(
    new Units({
      name: 'minute',
      symbol: 'm',
    })
  ),
  teaspoon: Object.freeze(
    new Units({
      name: 'teaspoon',
      symbol: 'tsp',
    })
  ),
});
