'use strict'

import { routes as auth } from './default/authentication'
import { routes as main } from './main'

export default [ ...auth, ...main ]
