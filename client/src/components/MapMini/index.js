import React, { useEffect } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ourCategory } from "../../helper";

function MapMini() {
  const DBO = useSelector((store) => store.post);
  const id = useParams();

  useEffect(() => {
    
  },[])

  const ourPost = DBO.filter((el) => el.id === Number(id.id));
  const ourCoord = [ourPost[0]?.coordinatesX, ourPost[0]?.coordinatesY];
  const ourPostTitle = ourPost[0]?.title;
  const ourPostDesription = ourPost[0]?.description;
  console.log(DBO);
  return (
    <>
      <YMaps>
        <div>
          <Map defaultState={{ center: ourCoord, zoom: 9 }} width="100%">
            <Placemark
              key={Number(id.id)}
              modules={["geoObject.addon.balloon"]}
              geometry={ourCoord}
              properties={{
                balloonContentHeader: ourPostTitle,
                balloonContent: ourPostDesription,
              }}
              options={{
                preset: [ourCategory(ourPost[0]?.category_id)],
              }}
            />
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default MapMini;
