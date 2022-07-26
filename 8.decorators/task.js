function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(',');
  
    let objectInCache = [];
    for(i=0; i<cache.length; i++) {
      if(hash === cache[i].hashT) {
        let value = cache[i].value;
        objectInCache.push(value)
      }
    };
    let objectInCache1 = objectInCache[0] 

    if (objectInCache1 !== undefined) { 
      console.log("Из кэша: " + objectInCache1);
      return "Из кэша: " + objectInCache1;
    }
    let result = func.call(this, ...args);
    cache.push({hashT: hash, value: result});

    if (cache.length > 5) { 
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }

  return wrapper;
}


function debounceDecoratorNew(func,ms) {
  let timerId = null;
  let firstStart = true;

  return function (...args) { 
    clearTimeout(timerId);
    if(firstStart) {
      timerId = setTimeout(() => {
        func.apply(this, args);
      });
      firstStart = false;
    } else {
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, ms)
    }
  }
}

function debounceDecorator2(func, ms) {
  let timerId = null;
  let firstStart = true;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    clearTimeout(timerId);

    if(firstStart) {
      timerId = setTimeout(() => {
        func.apply(this, args);
      });
      firstStart = false;
    } else {
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, ms)  
    }
  }
  
  return wrapper;  
}
