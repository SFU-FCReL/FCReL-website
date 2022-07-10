function initMap() {

  /* SFU Surrey labs */
  // SFU Surrey Coords
  var sfuSurrey = {
    center: { lat: 49.18857580898421, lng: -122.84957375170063 },
    zoom: 17
  }

  // Map
  mapSFU = new google.maps.Map(document.getElementById('map-container'), sfuSurrey);
  
  // SRYE 3038 
  const SRYE3038 = new google.maps.Marker({ // SRYE 3038 Marker
    position:{ lat: 49.189133149910965, lng: -122.85017062517083 },
    map:mapSFU
  })
  const detailSRYE = new google.maps.InfoWindow({ //SRYE 3038 InfoWindow
    content: `<h4>SRYE 3038</h4>`
  });
  SRYE3038.addListener("mouseover", () =>{
    detailSRYE.open(mapSFU, SRYE3038);
  })

  // SRYP 1000 (190B)
  const SRYP1000 = new google.maps.Marker({ //SRYP 1000 (190B) marker
    position:{ lat: 49.188101780604725, lng: -122.84937519203575 },
    map:mapSFU
  })
  const detailSRYP = new google.maps.InfoWindow({ //SRYP 1000 (190B) InfoWindow
    content: `<h4>SRYP 1000 (190B)</h4>`
  });
  SRYP1000.addListener("mouseover", () =>{
    detailSRYP.open(mapSFU, SRYP1000);
  })

  /* Powertech Annex A */
  // PT Coords
  var pt = {
    center: { lat: 49.16056731104481, lng: -122.87991903826924 },
    zoom: 17
  }

  // Map
  mapPT = new google.maps.Map(document.getElementById('map-container2'), pt);

  // Marker
  const fcrelPT = new google.maps.Marker({
    position:{ lat: 49.160359149664195, lng: -122.87857253106795 },
    map:mapPT
  })
  
  //InfoWindow
  const detailPT = new google.maps.InfoWindow({
    content: `<h4>SFU FCReL, Powertech Labs Annex A</h4>`
  });
  fcrelPT.addListener("mouseover", () =>{
    detailPT.open(mapPT, fcrelPT);
  })


  /* Ballard */
  var ballard = {
    center: { lat: 49.19825368261045, lng: -123.00743747350514 },
    zoom: 17
  }

  // Map
  mapBallard = new google.maps.Map(document.getElementById('ballard'), ballard);

  // Marker
  const fcrelBallard = new google.maps.Marker({
    position:{ lat: 49.19834198392019, lng: -123.00800395482625 },
    map:mapBallard
  })
  
  //InfoWindow
  const detailBallard = new google.maps.InfoWindow({
    content: `<h4>Ballard Power Systems Inc.</h4>`
  });
  fcrelBallard.addListener("mouseover", () =>{
    detailBallard.open(mapBallard, fcrelBallard);
  })

}