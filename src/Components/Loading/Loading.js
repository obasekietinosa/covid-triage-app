import React from 'react'

var content = {
    'loading': {
        'en': "Please wait…",
        'fr': "Encore un peu de patience…"
    }
}

export default function Loading(props) {
    return (
        <div className="text-center">
            {content.loading[props.lang]}
        </div>
    )
}
