import { useState } from "react";
import { useCallback } from "react";

export default function useRefresh() {

    const [StateRefresh,setStateRefresh] = useState(false);

    const Refresh  = useCallback(()=>{
        setStateRefresh(true);
         setTimeout(()=>{
            setStateRefresh(false);
           },1000);
      },[]);

  return ({
    ScreenRefresHome: Refresh,
    StateRefresh: StateRefresh,
  })
}
