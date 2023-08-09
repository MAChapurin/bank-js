import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * create a new BaseScreen instance
	 * @param {Object} options - options for the screen
	 * @param {string} options.title - title for the screen
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}

	/**
	 * Render the child component content
	 * @returns {HTMLElement}
	 */
	render() {
		throw new Error('Render method must be implemented in the child class')
	}
}
