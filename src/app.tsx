// 设置标题
export function onRouteChange({ matchedRoutes }): void {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}
