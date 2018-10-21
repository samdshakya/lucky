import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/pages/Intro'
import SelectNumber from '@/pages/SelectNumber'
import EnterDetails from '@/pages/EnterDetails'
import FundDetails from '@/pages/FundDetails'

import CheckStatus from '@/pages/check_status/CheckStatus'
import VerifyDetails from '@/pages/check_status/VerifyDetails'
import ViewStatus from '@/pages/check_status/ViewStatus'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Intro',
		meta: { layout: "default" },
		component: Intro
	},
	{
		path: '/select-number',
		name: 'SelectNumber',
		meta: { layout: "default" },
		component: SelectNumber
	},
	{
		path: '/enter-details',
		name: 'EnterDetails',
		meta: { layout: "default" },
		component: EnterDetails
	},
	{
		path: '/fund-details',
		name: 'FundDetails',
		meta: { layout: "default" },
		component: FundDetails
	},
	{
		path: '/check-status',
		name: 'CheckStatus',
		meta: { layout: "status" },
		component: CheckStatus
	},
	{
		path: '/verify-details',
		name: 'VerifyDetails',
		meta: { layout: "status" },
		component: VerifyDetails
	},
	{
		path: '/view-status',
		name: 'ViewStatus',
		meta: { layout: "status" },
		component: ViewStatus
	}
	],
	linkActiveClass: "exact-active",
	linkExactActiveClass: "active"
})
