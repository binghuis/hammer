/**
 * 延时函数
 * @param milliseconds - 延时毫秒数
 * @template Response - 返回值类型
 * @returns 返回一个 Promise 对象
 * @example
 * 在异步函数内通过 await 调用
 * ```ts
 * await delay(1000); // 延时 1 秒
 * ```
 */
export function delay<Response>(milliseconds: number) {
  return new Promise<Response>((resolve) => setTimeout(resolve, milliseconds));
}
