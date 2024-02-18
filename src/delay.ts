/**
 * 延时函数
 * @param milliseconds - 延时毫秒数
 * @returns 返回一个 Promise 对象
 */
export function delay<Response>(milliseconds: number) {
  return new Promise<Response>((resolve) => setTimeout(resolve, milliseconds));
}
