/**
 * Represent the RQuery class for workink with DOM elements
 */
class RQuery {
  /**
   * Create a new RQuery instance
   * @param {string|HTMLElement} selector 
   */
  constructor(selector){
    if(typeof selector === 'string') {
      this.element = document.querySelector(selector)

      if(!this.element) {
        throw new Error(`Element ${selector} not found`)
      }
    } else if (selector instanceof HTMLElement) {
      this.element = selector
    } else {
      throw new Error('Invalid selector type')
    }
  }

    /**
   * Find a element into the current element
   * @param {string} selector - A CSS selector string to search for within the selected element
   * @returns {RQuery} A new RQuery instance for the found element
   */
  find(selector) {
    const element = new RQuery(this.element.querySelector(selector))

    if(element) {
      return element
    } else {
      throw new Error(`Element ${selector} not found!`)
    }
  }

  /**
   * Set the Css style of the selected element
   * @param {string} property - The Css property to set
   * @param {string} value - The value to set for the CSS property
   * @returns {RQuery} The current RQuery instance for chaining
   */
  css(property, value) {
    if (typeof property !== 'string' || typeof value !== 'string') {
      throw new Error ('property and value must be string')
    }

    this.element.style[property] = value
    return this
  }

  /**
   * Append a new element as a child of the selected element.
   * @param {HTMLElement} childElement - The new child element to append
   * @returns {RQuery} The current RQuery instance for chaining
   */
  append(childElement){
    this.element.appendChild(childElement)
    return this
  }

    /**
   * Append a new element as a child of the selected element.
   * @param {HTMLElement} childElement - The new child element to append
   * @returns {RQuery} The current RQuery instance for chaining
   */
    before(newElement){
      if(!(newElement instanceof HTMLElement)) {
        throw new Error ('Element must be an HTMLElement')
      }

      const parentElement = this.element.parentElement

      if(parentElement) {
        parentElement.insertBefore(newElement, this.element)
        return this
      } else {
        throw new Error('Element does not have a parent element')
      }
    }
}


/**
 * Create a new RQuery instance for the given selector
 * @param {string|HTMLElement} selector - A CSS selector string or an HTMLElement
 * @returns {RQuery} A new RQuery instance for the given selector
 */
export function $R(selector) {
  return new RQuery(selector)
}