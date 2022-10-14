import styles from './Facts.module.scss';
import classNames from 'classnames/bind';
import TypewriterComponent from 'typewriter-effect';
import { useState, useEffect } from 'react';

import { facts } from '../../../data';
const cx = classNames.bind(styles);
function Fact() {
    const [fact, setFact] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setFact(fact === facts.length - 1 ? 0 : fact + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [fact]);
    return (
        <TypewriterComponent
            options={{
                strings: [...facts],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
                delay: 15,
                deleteSpeed: 15,
                cursor: ''
              }}
        />
    );
}

export default Fact;
