const executeAfterEvent = (event, fn) => {
  const documentState = document.readyState;
  if (event === 'load') {
    if (documentState === 'complete') {
      // load event already pass
      fn();
    } else {
      window.addEventListener('load', fn);
    }
  }
  if (event === 'DOMContentLoaded') {
    if (documentState === 'complete' || documentState === 'interactive') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
};

export default executeAfterEvent;
