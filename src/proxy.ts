type TargetFun<V> = (...args: any[]) => V

function memoize<V> (fn: TargetFun<V>) {
  return new Proxy(fn, {
    // 在对象中添加cache
    // @ts-ignore
    cache: new Map<string, V>(),
    apply(target, thisArg, argsList) {
      // 获取当前cache
      const currentCache = (thisArg as any).cache;

      // 根据当前参数直接生成 Map 的 key
      let cacheKey = argsList.toString();

      // 当前没有被缓存，执行调用，添加缓存
      if (!currentCache.has(cacheKey)) {
        currentCache.set(cacheKey, target.apply(thisArg, argsList));
      }

      // 返回被缓存的值
      return currentCache.get(cacheKey);
    }
  })
}