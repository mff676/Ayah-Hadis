import { useEffect, useRef, useState } from "react";
import TabsPills from "../TabsPills";
import CardJooz from "./CardJooz";
import CardSurah from "./CardSurah";
import { getQuranList } from "../../utils/data";
import { JoozList } from "../../data/JoozList";
import { SurahList } from "../../data/surah_list";
import CardSurahSkeleton from "../skeleton/CardSurahSkeleton";

const QuranComponent = () => {
  const tabsRef = useRef([]);
  const [activeTab, setActiveTab] = useState(0);
  const arrayTabs = ['Surah', 'Juz'];
  const [isLoading, setIsLoading] = useState(true)
  const [surah, setSurah] = useState([])
  const itemSkeleton = []
  for (let i = 0; i < 10; i++) {
    itemSkeleton.push(<CardSurahSkeleton />)
    
  }
  useEffect(() => {
    getQuranList(setSurah, 'surah').then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    })
  },[])
  return (
    <div className="flex flex-col items-center mt-16">
    <TabsPills activeTab={activeTab} setActiveTab={setActiveTab} tabsRef={tabsRef} arrayContent={arrayTabs} />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-10">

        {
          isLoading ?
          itemSkeleton
      :
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