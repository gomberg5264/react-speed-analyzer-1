import { TERMINATE_TEST } from './types'

/**
 * Unsubscribes existing subscriptions.
 */
export const terminateTest = () => ({
  'BAQEND': async ({ dispatch, getState, db }) => {
    const { competitorSubscription, speedKitSubscription } = getState().result
    if(competitorSubscription) {
      competitorSubscription.unsubscribe()
    }
    if(speedKitSubscription) {
      speedKitSubscription.unsubscribe()
    }

    dispatch({
      type: TERMINATE_TEST,
      payload: {}
    })
  }
})