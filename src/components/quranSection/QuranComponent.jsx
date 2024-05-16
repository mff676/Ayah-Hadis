import { useEffect, useRef, useState } from "react";
import TabsPills from "../TabsPills";
import CardJooz from "./CardJooz";
import CardSurah from "./CardSurah";
import { getQuranList } from "../../utils/data";
import { JoozList } from "../../data/JoozList";
import { SurahList } from "../../data/surah_list";

const QuranComponent = () => {
  const tabsRef = useRef([]);
  const [activeTab, setActiveTab] = useState(0);
  const arrayTabs = ['Surah', 'Juz'];
  const [surah, setSurah] = useState([])
  useEffect(() => {
    getQuranList(setSurah, 'surah')
  },[])
  return (
    <div className="flex flex-col items-center mt-16">
    <TabsPills activeTab={activeTab} setActiveTab={setActiveTab} tabsRef={tabsRef} arrayContent={arrayTabs} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-10">
        {
            activeTab === 1 ?
            JoozList.map(i => (
              <CardJooz key={i.juz} j={i}/>
            ))
            :
            surah.map(i => (
              <CardSurah key={i.number} q={i}/>
            ))
          }
    </div>
</div>
  )
}

export default QuranComponent