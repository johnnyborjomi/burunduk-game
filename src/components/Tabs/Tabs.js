import React, {useState} from "react";
import stl from './Tabs.module.css';

const Tabs = ({tabs}) => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="tabs">
            <div className={stl.tabs_links}>
                {tabs.map((item, i) => {
                    return (<div 
                        key={item.text} 
                        className={`${stl.tabs_link} ${current === i ? stl.tabs_link_active : ''}`} 
                        onClick={() => setCurrent(i)}>
                            {item.text}
                    </div>)
                })}
            </div>
            <div className={stl.tabs_tabs}>
                {tabs[current].el}
            </div>
        </div>
    )
}

export default Tabs;