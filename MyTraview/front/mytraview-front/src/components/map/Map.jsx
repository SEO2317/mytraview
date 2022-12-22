import React, { useEffect, useState } from 'react'
const { kakao } = window;

const Map = () => {

  const [myMap, setMyMap] = useState();
  const [myMarker, setMyMarKer] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

//   const baseURL = 'http://localhost:3100/place';
  let headers = new Headers({
    "Content-Type": "application/json",
  })

  let req = {
    areaCode: null,
    mapX : latitude,
    mapY : longitude,
    placeName : null,
    category: null,
    rating: null
  }

  const options = {
      method: "GET",
      headers : headers,
      body: JSON.stringify(req)
  }

  const selectedLatLng = () => {
    console.log("마지막으로 선택하신 위도 및 경도의 값은 " + "위도는:" + latitude + "경도는: " + longitude);
  }




//   const savePlace = () => {
//     fetch(baseURL,)
//   }

  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  var mapTypeControl = new kakao.maps.MapTypeControl();

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();


  useEffect(() => {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.46833675493725, 126.88624594942107), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var kakaoMap = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다 
      position: kakaoMap.getCenter()
    });
    // 지도에 마커를 표시합니다
    marker.setMap(kakaoMap);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(kakaoMap, 'click', function (mouseEvent) {

      // 클릭한 위도, 경도 정보를 가져옵니다 
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      message += '경도는 ' + latlng.getLng() + ' 입니다';

      // var resultDiv = document.getElementById('clickLatlng'); 
      console.log(message);

      setLatitude(latlng.getLat());

      setLongitude(latlng.getLng())

      setMyMarKer(marker);

    });

    setMyMap(kakaoMap)
  }
    , [])


  return (
    <>
      <div id="map" style={{ width: '1000px', height: '700px' }}></div>
      <button onClick={selectedLatLng}>마지막으로 선택한 위도 경도</button>
      {/* <button onClick={savePlace}>해당 위치 위도 경도 저장하기</button> */}
    </>
  )
}

export default Map
