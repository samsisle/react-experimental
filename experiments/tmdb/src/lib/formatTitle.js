/**
 * This function replaces all non-word characters in a movie title with underscores.
 *
 * @param {string} S
 */
export default function formatTitle(S) {
  const formattedTitle = S.toLowerCase().replace(/\W+/g, '_');
  // Some movie titles end in parentheses. For example,
  // Birds of Prey (And the Fantabulous Emancipation of One Harley Quinn)
  if (formattedTitle.charAt(formattedTitle.length - 1) === '_') {
    return formattedTitle.slice(0, -1);
  } else {
    return formattedTitle;
  }
}
