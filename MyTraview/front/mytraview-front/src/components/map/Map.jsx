import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../api_config/ApiBaseUrl';
import { call } from '../../api_config/ApiService';
import { Select, Option } from "@material-tailwind/react";
const { kakao } = window;

const Map = () => {

  const [myMap, setMyMap] = useState();
  const [myMarker, setMyMarKer] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [areaCode, setAreaCode] = useState();
  const [category, setCategory] = useState();
  const [rating, setRating] = useState();
  const [placeName, setPlaceName] = useState();
  const [items, setItems] = useState();
  const [myInfowindow, setMyInfowindow] = useState();
  var [markers, setMarkers] = useState([]);
  // var markers = [];


  let req = {
    areaCode: areaCode,
    mapX: latitude,
    mapY: longitude,
    placeName: placeName,
    category: category,
    rating: rating
  }

  const selectedLatLng = () => {
    console.log("마지막으로 선택하신 위도 및 경도의 값은 " + "위도는:" + latitude + "경도는: " + areaCode);
    console.log("areaCode는: " + areaCode);
  }

  const savePlace = () => {
    call('/place/registration', 'POST', req)
      .then(
        (res) => {
          console.log(res);
        }
      )
  }

  const retrieveByCategory = (categoryValue) => {

    call(`/place/retrieve4?category=${categoryValue}`, 'GET')
    .then((res) => {
        removeMarker();
        for (var i = 0; i < res.length; i++) {


          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다    
          // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: myMap, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(res[i].mapX, res[i].mapY) // 마커를 표시할 위치
            // title : items[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            // image : markerImage // 마커 이미지 
          });

          markers.push(marker);
        }
        console.log(markers);
      })

  }

  const retrieveResponse = () => {
    console.log(markers);
  }

  const removeMarker = () => {
    
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    // markers = [];
  }
  
  // let removeMarker2 = () => {
  //   for (var i = 0; i < markers.length; i++) {
  //     markers.shift();
  //     // markers[i].setMap(null);
  //   }
  // };


  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  var mapTypeControl = new kakao.maps.MapTypeControl();

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();

  var geocoder = new kakao.maps.services.Geocoder();

  function searchAddrFromCoords(coords, callback) {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  }

  function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }

  // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
  function displayCenterInfo(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      var infoDiv = document.getElementById('centerAddr');

      for (var i = 0; i < result.length; i++) {
        // 행정동의 region_type 값은 'H' 이므로
        if (result[i].region_type === 'H') {
          infoDiv.innerHTML = result[i].address_name;
          break;
        }
      }
    }
  }








  useEffect(() => {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.46833675493725, 126.88624594942107), //지도의 중심좌표.
      level: 5 //지도의 레벨(확대, 축소 정도)
    };

    var kakaoMap = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);





    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker(),
      infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

    searchAddrFromCoords(kakaoMap.getCenter(), displayCenterInfo);

    // 지도에 마커를 표시합니다
    marker.setMap(kakaoMap);
    setMyMarKer(marker);
    setMyInfowindow(infowindow);


    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    // kakao.maps.event.addListener(kakaoMap, 'click', function (mouseEvent) {
    //   // 클릭한 위도, 경도 정보를 가져옵니다 
    //   var latlng = mouseEvent.latLng;


    //   // 마커 위치를 클릭한 위치로 옮깁니다
    //   marker.setPosition(latlng);

    //   var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    //   message += '경도는 ' + latlng.getLng() + ' 입니다';

    //   // var resultDiv = document.getElementById('clickLatlng'); 
    //   console.log(message);

    //   setLatitude(latlng.getLat());

    //   setLongitude(latlng.getLng())

    //   // setMyMarKer(marker);

    // });


    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(kakaoMap,'click', function (mouseEvent) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
          detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
          
          var content = '<div class="bAddr">' +
          '<span class="title">법정동 주소정보</span>' +
          detailAddr +
          '</div>';
          // 클릭한 위도, 경도 정보를 가져옵니다 
          var latlng = mouseEvent.latLng;
          
          removeMarker();
          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);
          
          // markers.push(marker);

          var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
          message += '경도는 ' + latlng.getLng() + ' 입니다';

          // var resultDiv = document.getElementById('clickLatlng'); 
          console.log(message);

          setLatitude(latlng.getLat());

          setLongitude(latlng.getLng())

          // marker.setMap(kakaoMap);

          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          infowindow.setContent(content);
          infowindow.open(kakaoMap, marker);
          const addrName = result[0].address.address_name
          const areaCode = addrName.split(' ');
          setAreaCode(areaCode[0]);
        }
      });
    });

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(kakaoMap, 'idle', function () {
      searchAddrFromCoords(kakaoMap.getCenter(), displayCenterInfo);
    });



    setMyMap(kakaoMap)
    // setMyMarKer(marker)
    // setMyInfowindow(infowindow)
  }
    , [markers])


  return (
    <>
      {/* <div className="map_wrap"> */}
      <div id="map" style={{ width: '700px', height: '300px' }}></div>
      <div className="hAddr">
        <span className="title">지도중심기준 행정동 주소정보</span>
        <span id="centerAddr"></span>
      </div>
      {/* </div> */}

      <div id="retrieve" onClick={retrieveResponse}>조회하기</div>
      <div id="api" className='w-72'>
        <Select label="Request Api">
          <Option onClick={selectedLatLng}>마지막으로 선택한 위도 경도 및 지번 주소</Option>
          <Option onClick={savePlace}>해당 위치 위도 경도 저장하기</Option>
          <Option onClick={() => { retrieveByCategory(category); console.log(category); }}>카테고리로 모든 위도 경도 조회하기</Option>
        </Select>
      </div>
      <div id="category" className='w-72'>
        <Select label="카테고리">
          <Option onClick={() => { setCategory("관광"); console.log("관광"); }}>관광</Option>
          <Option onClick={() => { setCategory("레져"); console.log("레저"); }}>레져</Option>
          <Option onClick={() => { setCategory("여행"); console.log("여행"); }}>여행</Option>
          <Option onClick={() => { setCategory("식당"); console.log("식당"); }}>식당</Option>
          <Option onClick={() => { setCategory("테스트"); console.log("테스트"); }}>테스트</Option>
        </Select>
      </div>
      <div id="rating" className='w-72'>
        <Select label="별점">
          <Option onClick={() => { setRating(1) }}>1</Option>
          <Option onClick={() => { setRating(2) }}>2</Option>
          <Option onClick={() => { setRating(3) }}>3</Option>
          <Option onClick={() => { setRating(4) }}>4</Option>
          <Option onClick={() => { setRating(5) }}>5</Option>
        </Select>
      </div>
      <div id="retrieveByCategory" style={{ width: "300px", display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => { retrieveByCategory("관광"); console.log("관광"); }}>관광</button>
        <button onClick={() => { retrieveByCategory("레져"); console.log("레져"); }}>레져</button>
        <button onClick={() => { retrieveByCategory("여행"); console.log("여행"); }}>여행</button>
        <button onClick={() => { retrieveByCategory("식당"); console.log("식당"); }}>식당</button>
        <button onClick={() => { retrieveByCategory("테스트");}}>테스트</button>
        <button onClick={() => {console.log(markers);}}>테스트</button>
      </div>

    </>
  )
}

export default Map
