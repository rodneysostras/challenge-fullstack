import React from 'react'
import { Link } from 'react-router-dom'

import Breadcrumbs from '../../breadcrumbs'

import './styles.scss'

export default function PageLayout(props) {
    const { breadcrumbs, children, page, title } = props
    return (
        <section className="layout__page">
            { breadcrumbs && (
                <Breadcrumbs>
                    { breadcrumbs.map((value, idx) => {
                        if(typeof value === 'string') {
                            return (<span key={idx}>{value}</span>)
                        } else {
                            return Object.keys(value).map((key) => (<Link to={value[key]}>{key}</Link>))
                        }
                    })}
                </Breadcrumbs>
            )}

            <h1>{ title }</h1>

            <div className="layout__page__wrap">{ children }</div>
        </section>
    )
}
