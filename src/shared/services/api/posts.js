import fetch from 'isomorphic-fetch'
import { API_URL } from '../config'

export function get() {
  return fetch(`${API_URL}/posts`)
    .then(res => res.json())
    .then(res => res)
}
