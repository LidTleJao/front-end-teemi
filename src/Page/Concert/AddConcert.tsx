import { Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import HeaderUser from "../../components/HeadUser";

export default function AddConcertPage() {
    const navigate = useNavigate();

    function navigateToMapsPage() {
      navigate("/maps");
    }
    function navigateToHomePage() {
      navigate("/home");
    }

  return (
    <>
    <HeaderUser />
      <div className="addconcert-cont" style={{flexDirection:"column"}}>
      <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "black",
                fontFamily: "Mitr, sans-serif",
              }}
              variant="h4"
              marginTop={"15px"}
            >
              เพิ่มคอนเสิร์ต
            </Typography>
          </div>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            width: 400,
            height: 550,
            borderRadius: 5,
            backgroundColor: "#D9D9D9",
            
          }}
        >
          
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"30px"
            }}
          >
            <TextField
              placeholder="ชื่อคอนเสิร์ต"
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="ไลน์อัพ"
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <FormControl sx={{ width: 355 }}>
              <InputLabel
                // id="demo-select-small-label"
                sx={{ marginTop: "-8px" }}
              >
                ประเภทของคอนเสิร์ต
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // placeholder="จังหวัด"
                // value={age}
                // label="ชนิดโรงแรม"
                // onChange={handleChange}
                sx={{ borderRadius: 20, bgcolor: "white", height: "40px" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="วันที่ทำการแสดง"
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="จำนวนวันที่แสดง"
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            <TextField
              id="outlined-textarea"
              placeholder="รายละเอียด"
              multiline
              sx={{ m: 1, width: "22pc" }}
              InputProps={{
                sx: {
                  borderRadius: "20px",
                  bgcolor: "white",
                },
                startAdornment: <></>,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ width: 355 }}>
              <InputLabel
                // id="demo-select-small-label"
                sx={{ marginTop: "-8px" }}
              >
                ชนิดการแสดงคอนเสิร์ต
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                sx={{ borderRadius: 20, bgcolor: "white", height: "40px" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              marginRight: "25px",
              marginTop:"10px",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "white" }}
                sx={{
                  width: "9pc",
                  color: "black",
                  fontWeight: "Bold",
                  borderRadius: 3,
                  fontFamily: "Mitr, sans-serif",
                }}
                // onClick={navigateToMapsPage}
              >
                ยืนยันเพิ่มข้อมูล
              </Button>
            </div>
            <div>
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
                onClick={navigateToMapsPage}
              >
                แผนที่
              </Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              marginRight: "25px",
              marginTop: "10px",
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "white" }}
                sx={{
                  width: "ึpc",
                  color: "black",
                  fontWeight: "Bold",
                  borderRadius: 3,
                  fontFamily: "Mitr, sans-serif",
                }}
                onClick={navigateToHomePage}
              >
                กลับหน้า
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
