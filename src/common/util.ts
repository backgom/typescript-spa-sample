const debounce = (callback: (...params: any[]) => void, limit = 100) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
      console.log('call debounce', ...args);
    }, limit);
  };
};

export { debounce };
