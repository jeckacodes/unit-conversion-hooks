import React, { useState } from 'react';

function Converter() {
    const [lbs, setLbs] = useState(0);
    const [kgs, setKgs] = useState(0);

    const onChange = (e) => {
        var unit = e.target.name;
        var value = e.target.value;
        if (unit === 'lbs') {
            setLbs(value);
            setKgs(0.454*value);
        } else if (unit === 'kgs') {
            setKgs(value);
            setLbs(2.2*value);
        }
        // var [state, other] = unit === 'lbs' ? [setLbs, setKgs] : [setKgs, setLbs];
        // state(value);
        // but then we have to set the opposing state according to the conversion

    }

    return (
        <div>
            <form>
                <label>
                    lbs
                    <input name="lbs" value={lbs} onChange={onChange} />
                </label>
                <label>
                    kgs
                    <input name="kgs" value={kgs} onChange={onChange} />
                </label>
            </form>
        </div>
    )
}

export default Converter;