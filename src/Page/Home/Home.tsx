import { Box } from "@mui/system";
// import "./Home.css";
import HeaderUser from "../../components/HeadUser";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateToAddHotelPage() {
    navigate("/addhotel");
  }
  function navigateToAddConccertPage() {
    navigate("/addconcert");
  }
  function navigateToEditHotelPage() {
    navigate("/edithotel");
  }
  function navigateToEditConcertPage() {
    navigate("/editconcert");
  }
  return (
    <>
      <HeaderUser />
      <div className="home-cont">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{
            width: 500,
            height: 550,
            borderRadius: 5,
            backgroundColor: "#D9D9D9",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Mitr, sans-serif",
            }}
            variant="h4"
            marginTop={"15px"}
          >
            Teemi
          </Typography>
          <div style={{ display:"flex",flexDirection: "row" }}>
            <div style={{marginRight:"10px"}}>
              <Button
              variant="contained"
              style={{ backgroundColor: "white" }}
              sx={{
                width: "8pc",
                color: "black",
                fontWeight: "Bold",
                borderRadius: 3,
                fontFamily: "Mitr, sans-serif",
              }}
              onClick={navigateToAddHotelPage}
            >
              เพิ่มโรงแรม
            </Button>
            </div>
            
            <div style={{marginRight:"10px"}}>
            <Button
              variant="contained"
              style={{ backgroundColor: "white" }}
              sx={{
                width: "10pc",
                color: "black",
                fontWeight: "Bold",
                borderRadius: 3,
                fontFamily: "Mitr, sans-serif",
              }}
              onClick={navigateToEditHotelPage}
            >
              แก้ไขข้อมูลโรงแรม
            </Button>
            </div>

            <div>
            <Button
              variant="contained"
              style={{ backgroundColor: "white" }}
              sx={{
                width: "10pc",
                color: "black",
                fontWeight: "Bold",
                borderRadius: 3,
                fontFamily: "Mitr, sans-serif",
              }}
              // onClick={navigateToAddHotelPage}
            >
              ลบข้อมูลโรงแรม
            </Button>
            </div>
          </div>
          <div style={{ display:"flex",flexDirection: "row", marginTop:"20px" }}>
            <div style={{marginRight:"10px"}}>
              <Button
              variant="contained"
              style={{ backgroundColor: "white" }}
              sx={{
                width: "8pc",
                color: "black",
                fontWeight: "Bold",
                borderRadius: 3,
                fontFamily: "Mitr, sans-serif",
              }}
              onClick={navigateToAddConccertPage}
            >
              เพิ่มคอนเสิร์ต
            </Button>
            </div>
            
            <div style={{marginRight:"10px"}}>
            <Button
              variant="contained"
              style={{ backgroundColor: "white" }}
              sx={{
                width: "11pc",
                color: "black",
                fontWeight: "Bold",
                borderRadius: 3,
                fontFamily: "Mitr, sans-serif",
              }}
              onClick={navigateToEditConcertPage}
            >
              แก้ไขข้อมูลคอนเสิร์ต
            </Button>
            </div>

            <div>
            <Button
              variant="contained"
              style={{ backgroundColor: "white" }}
              sx={{
                width: "10pc",
                color: "black",
                fontWeight: "Bold",
                borderRadius: 3,
                fontFamily: "Mitr, sans-serif",
              }}
              // onClick={navigateToAddHotelPage}
            >
              ลบข้อมูลคอนเสิร์ต
            </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default HomePage;
