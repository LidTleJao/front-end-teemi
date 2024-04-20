import { Button, Skeleton, TextField } from "@mui/material";
import HeaderUser from "../../components/HeadUser";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import {
  GoogleMap,
  useJsApiLoader,
  // Marker,
  Autocomplete,
  // MarkerClusterer,
} from "@react-google-maps/api";
// import { useEffect, useRef, useState } from "react";

// import React from "react";

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function MapsPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBJWjzJbgyGOrVRO9Zm9Uk0gSyq35Wx398",
    libraries: ["places"],
  });
  const navigate = useNavigate();
  
  // [markers, setMarkers] = useState([]);
  
  // const onMapClick = (e) => {
  //   setMarkers((current) => [
  //     current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //     },
  //   ]);
  // };

  if (!isLoaded) {
    return <Skeleton />;
  }

  function navigateToAddHotelPage() {
    navigate("/addhotel");
  }
  return (
    <>
      <HeaderUser />
      <div>
        <Box flexDirection={"column"}>
          <Box position={"absolute"} height={"100%"} width={"100%"}>
            <GoogleMap
              center={center}
              zoom={19}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              // onClick={onMapClick}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              //   onLoad={(map) => setMap(map)}
            >
              {/* {marker.map((marker) => (
                <Marker
                  position={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                />
              ))} */}

              {/*  */}
            </GoogleMap>
          </Box>
          <div className="mapss-cont">
            <Box
              zIndex="2"
              sx={{
                width: 400,
                height: 150,
                borderRadius: 5,
                backgroundColor: "#D9D9D9",
                display: "flex",
                justifyContent: "center",
                // alignItems: "c",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Autocomplete>
                  <TextField
                    placeholder="ชื่อโรงแรม"
                    sx={{ m: 1, width: "22pc" }}
                    InputProps={{
                      sx: {
                        borderRadius: "20px",
                        bgcolor: "white",
                        height: "35px",
                      },
                      startAdornment: <></>,
                    }}
                  />
                </Autocomplete>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                }}
              >
                <div style={{ flexGrow: 1, marginLeft: "20px" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "white" }}
                    sx={{
                      width: "6pc",
                      height: "2pc",
                      color: "black",
                      fontWeight: "Bold",
                      borderRadius: 3,
                      fontFamily: "Mitr, sans-serif",
                    }}
                    //   onClick={navigateToMapsPage}
                  >
                    ยืนยัน
                  </Button>
                </div>
                <div style={{ marginRight: "20px" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "white" }}
                    sx={{
                      width: "6pc",
                      height: "2pc",
                      color: "black",
                      fontWeight: "Bold",
                      borderRadius: 3,
                      fontFamily: "Mitr, sans-serif",
                    }}
                    onClick={navigateToAddHotelPage}
                  >
                    กลับ
                  </Button>
                </div>
              </div>
            </Box>
          </div>
        </Box>
      </div>
    </>
  );
}
