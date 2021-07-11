import React from 'react'
import Chart from '../../charts/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './home.css'
import { userdata } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/widgetLg'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userdata} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
