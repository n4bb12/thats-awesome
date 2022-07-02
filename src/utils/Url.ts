import Router from "next/router"

export function updateUrl(q: string) {
  Router.replace({ query: { q } })
}
