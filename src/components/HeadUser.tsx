import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeaderUser() {
  // const { user, logOut } = Userlogin
    const navigate = useNavigate();

  function navigateToLoginPage() {
    navigate("/");
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{ backgroundColor: "black", justifyContent: "end", height: 80 }}
        >
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
            <Typography
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                color: "white",
                ml: 2,
                fontFamily: "Mitr, sans-serif",
                fontStyle:"oblique"
              }}
              variant="h4"
              marginTop={"15px"}
            >
              Teemi
            </Typography>
          </div>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            sx={{
              width: "8pc",
              color: "black",
              fontWeight: "Bold",
              borderRadius: 3,
              mr: 2,
              fontFamily: "Mitr, sans-serif",
            }}
            onClick={navigateToLoginPage}
          >
            ล็อกเอาท์
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HeaderUser;
