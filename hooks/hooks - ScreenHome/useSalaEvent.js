import { useState } from "react";
import { GlobalApis } from "../../Apis/GlobalApis";

export const useSalaEvent = () => {
  const [DataSala, setDataSala] = useState([]);
  const [SelectName, setSelectName] = useState("Filtra por Sala");
  const [LoadingF, setLoadingF] = useState(false);
  const [IsFilter, setIsFilter] = useState(false);

  const [IsSearch, setIsSearch] = useState(false);

  const ChangetoSearch = () => {
    setIsSearch(!IsSearch);
  };

  const ChangeSelected = ({ Selected }) => {
    setSelectName(Selected);
    if (Selected != "No filtrar") {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  };

  const GetSalaEvent = () => {
    fetch(GlobalApis.ApiTodosEventos)
      .then((respuestas) => {
        if (respuestas.ok) {
          respuestas.json();
        }
      })
      .then((Data) => {
        const ArrayP = [];

        Data.data.forEach((D) => {
          if (!ArrayP.includes(D.room?.location)) {
            if (SelectName != D.room?.location) {
              ArrayP.push(D.room?.location);
            }
          }
        });

        if (ArrayP != []) {
          if (SelectName != "Filtra por Sala" && SelectName != "No filtrar") {
            ArrayP.push("No filtrar");
          }
          setDataSala(ArrayP);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingF(true);
      });
  };

  return {
    GetSalaEvent: GetSalaEvent,
    DataSala: DataSala,
    SelectName: SelectName,
    ChangeSelected: ChangeSelected,
    LoadingF: LoadingF,
    IsFilter: IsFilter,
    ChangetoSearch: ChangetoSearch,
    IsSearch: IsSearch,
  };
};
