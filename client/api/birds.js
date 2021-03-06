// Create client portion of api functions
import requestor from './consume'

const apiUrl = '/birds'

// Bird APIs
export function getAllBirds (consume = requestor) {
  return consume(apiUrl + '/birds', 'get', {})
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getBirdIdByName (birdName, consume = requestor) {
  return consume(`/birds/birds/${encodeURIComponent(birdName)}`, 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getBirdsByColourAndSize (colour, size, consume = requestor) {
  return consume(`/birds/birds/${encodeURIComponent(colour)}/${encodeURIComponent(size)}`, 'get', {})
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getBirdByID (id, consume = requestor) {
  return consume(`/birds/birds/${encodeURIComponent(id)}`, 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

// Handle errors in application
function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: API route for ${method} ${route} ${err.message} missing`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
