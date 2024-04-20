import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import HeaderUser from "../../components/HeadUser";
import { useNavigate } from "react-router-dom";

export default function EditHotelPage() {
  const navigate = useNavigate();

//   function navigateToMapsPage() {
//     navigate("/maps");
//   }
  function navigateToHomePage() {
    navigate("/home");
  }

  return (
    <>
      <HeaderUser />
      <div className="edithotel-cont">
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
              แก้ไขข้อมูลโรงแรม
            </Typography>
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
                เลือกโรงแรม
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
                ชนิดโรงแรม
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
              placeholder="ที่อยู่"
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
              justifyContent: "end",
              alignItems: "end",
              marginRight: "25px",
            }}
          >
            <div >
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
                // onClick={navigateToMapsPage}
              >
                ยืนยันแก้ไขข้อมูล
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
