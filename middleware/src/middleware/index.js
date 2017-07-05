
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  console.log('next', next)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// const logger = store => {
//   return next => {
//     // 这里是真正的中间件，即 next
//     return action => {
//       console.group(action.type)
//       console.info('dispatching', action)
//       let result = next(action)
//       console.log('middleware store', store)
//       console.log('next state', store.geState())
//       console.groupEnd(action.type)
//       return result
//     }
//   }
// }


const crashReporter = store => next => action => {
  try{
    console.log('crashReporter')
    console.log('next', next)
    return next(action)
  } catch (err) {
    console.error('Caught an exceptional', err)
    throw err
  }
}

const middlewareOne = store => next => action => {
  console.log('middlewareOne')
  console.log('next', next)
  return next(action)
}

const middlewareTwo = store => next => action => {
  console.log('middlewareTwo')
  console.log('next', next)
  return next(action)
}

const middlewareThree = store => next => action => {
  console.log('middlewareThree')
  console.log('next', next)
  return next(action)
}


export {logger, crashReporter, middlewareOne, middlewareTwo, middlewareThree}



