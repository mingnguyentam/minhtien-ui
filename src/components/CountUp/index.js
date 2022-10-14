import { useState, useEffect, useRef } from 'react';

function CountUp({ start = 0, end, time = 5000 }) {
    const [state, setState] = useState(null);
    const ref = useRef(start);
    const accumulator = end / 200;
    const duration = time/end
    const UpdateCouterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if (ref.current > end) return setState(end);
            setState(result);
            ref.current = result;
        }
        setTimeout(UpdateCouterState, duration)
    };
    useEffect(() => {
        let isMouted = true;
        if (isMouted) {
            UpdateCouterState()
        }
        return () => (isMouted = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [end, start])
    return <>{state}</>;
}

export default CountUp;
