import React from 'react'
import styles from './Bio.module.css'
import {getGravatarURL} from '../utils/getGravatarURL'

let email = "matan13av@gmail.com"

function Bio(props) {
    let photoURL = getGravatarURL({
        email: email,
        size: 56,
    })

    return (
        <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
            <img src={photoURL} alt="Me"/>
            <p>
                A programmer is a person who fix a problem that you don't know you have,
                in a way you don't understand.
            </p>
        </div>
    )
}

export default Bio
