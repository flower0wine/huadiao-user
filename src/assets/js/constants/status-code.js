/**
 * 功能描述：
 * 创建日期：2023 年 09 月 05 日
 */

// 使用严格模式
'use strict';

/**
 * 状态码
 * @type {{succeed: number, exceedLimit: number, notAllowed: number, blankParam: number, existed: number, errorParam: number, notExist: number}}
 */
export const statusCode = {
    succeed: 1000,
    exceedLimit: 1001,
    errorParam: 2000,
    blankParam: 2001,
    notExist: 3000,
    existed: 3001,
    notAllowed: 3002,
}