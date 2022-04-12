import React from 'react'

import './styles.scss'

export default function Breadcrumbs({ children }) {
    return (
        <ol className="breadcrumbs">
            { children && React.Children.map(children, (child) => (
                <li>{ child }</li>
            )) }
        </ol>
    )
}
