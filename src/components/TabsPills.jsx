import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const TabsPills = ({ activeTab, setActiveTab, tabsRef, arrayContent }) => {
    const [indicatorStyle, setIndicatorStyle] = useState({});
    useEffect(() => {
        const updateIndicator = () => {
            const tab = tabsRef.current[activeTab];
            const width = tab.getBoundingClientRect().width;
            const left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left;
            setIndicatorStyle({ width: `${width}px`, left: `${left}px` });
        };
        updateIndicator();
    }, [activeTab, arrayContent.length]);
    if (arrayContent.length > 0) {
        const contentGrid = `grid-cols-${arrayContent.length}`;
        return (
            <div role="tablist" aria-label="tabs" className={`relative min-w-[50%] lg:mx-auto h-12 grid ${contentGrid} items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition`}>
                <div className="absolute indicator h-11 my-auto top-0 bottom-0 rounded-full bg-green-primary shadow-md" style={indicatorStyle}></div>
                {arrayContent.map((label, index) => (
                    <button
                        key={index}
                        ref={(el) => (tabsRef.current[index] = el)}
                        role="tab"
                        aria-selected={activeTab === index}
                        aria-controls={`panel-${index + 1}`}
                        onClick={() => setActiveTab(index)}
                        className={`relative h-full text-sm tab rounded-full ${activeTab === index ? 'text-white-text' : 'text-gray-600'}`}
                    >
                        <span className={`text-xs sm:text-base ${activeTab === index ? 'text-white-text' : 'text-gray-600'}`}>{label}</span>
                    </button>
                ))}
            </div>
        );
    } else {
        return null; 
    }
}
TabsPills.propTypes = {
    activeTab: PropTypes.number.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    tabsRef: PropTypes.object.isRequired,
    arrayContent: PropTypes.array.isRequired
}
export default TabsPills