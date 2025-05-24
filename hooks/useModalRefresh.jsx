import { useState } from "react"

export default function useModalRefresh() {

    const [StateRefresh,setStateRefresh] = useState(true);
    const [ModalStateRefresh,setModalStateRefresh] = useState(false);
    const Refresh = () => {
        setStateRefresh(!StateRefresh);
        setModalStateRefresh(!ModalStateRefresh);
    };

  return ({
    ScreenScannerRefresh: Refresh,
    StateRefresh: StateRefresh,
    ModalStateRefresh: ModalStateRefresh,
  })
}
