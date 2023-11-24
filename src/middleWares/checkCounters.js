const checkCounters = (store) => (next) => (action) => {
  if (action.type === 'counters/addCount') {
    const counters = store.getState().counters;
    if (counters.includes(action.payload)) {
      console.log("krknvox tiv: ", action.payload)
      return;
    }
  }
  next(action)
}
export default checkCounters