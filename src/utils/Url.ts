export function updateUrl(query: string) {
  window.history.replaceState(null, null, window.location.origin + "?q=" + query)
}
