const SITE_NAME = 'Bank vanilla js'

export function getTitle(title) {
  return title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}`
}