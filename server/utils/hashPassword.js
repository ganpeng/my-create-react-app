'use strict'

import { genSalt, hash, compare } from 'bcryptjs'
import Promise from 'bluebird' 


export const _hash = Promise.promisify(hash)
export const _genSalt = Promise.promisify(genSalt)
export const _compare = Promise.promisify(compare)


export default { _hash, _genSalt, _compare }



