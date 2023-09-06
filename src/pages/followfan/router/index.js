/**
 * 功能描述：VueRouter
 * 创建日期：2023 年 02 月 27 日
 */

// 使用严格模式
'use strict';
import VueRouter from "vue-router";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            name: "followFanBoard",
            path: "/followfan/:viewedUid(\\d+)",
            component: () => import("@/pages/followfan/pages/HuadiaoFollowFanBoard"),
            children: [{
                name: "followBoard",
                path: "follow",
                components: {
                    followFanExhibit: () => import("@/pages/followfan/pages/HuadiaoFollowBoard"),
                },
                beforeRouteLeave() {
                    this.$store.commit("clearDeletedFollow");
                }
            },
            {
                name: "fanBoard",
                path: "fan",
                components: {
                    followFanExhibit: () => import("@/pages/followfan/pages/HuadiaoFanBoard"),
                },
                beforeRouteLeave() {
                    this.$store.commit("clearDeletedFan");
                }
            }]
        },
    ]
})