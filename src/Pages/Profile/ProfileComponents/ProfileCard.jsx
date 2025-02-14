import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import bin from "../../../../public/icons/bin.svg";

export default function ProfileCard() {
  return (
    <Box sx={{ mt: 0.5, mb: 2.5 }}>
      <Box>
        <Grid2
          container
          spacing={{ xs: 1, md: 1.5 }}
          columns={{ xs: 2, sm: 2, md: 2 }}
        >
          <Grid2 item key={1} xs={3} sm={2} md={1.5}>
            <Card
              sx={{
                maxWidth: "90%",
                background: "#fff",
                borderRadius: "0px",
                border: "none",
                display: "flex",
                p: 0.5,
              }}
            >
              <CardContent sx={{ display: "flex", gap: 10 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`/image.png`}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </Box>
                <Box sx={{ width: "80%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        width: "60%",
                      }}
                    >
                      Абдршин Рамиль Хайруллаевич
                    </Typography>
                    <Typography
                      variant="body2"
                      color="black"
                      sx={{ width: "40%", textAlign: "right" }}
                    >
                      Родился 01.11.1925 с. Новомусино Шарлыкского района
                      Оренбургской области
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", mt: 0.5, flexDirection: "column" }}
                  >
                    <Typography variant="body2" sx={{ color: "#737373" }}>
                      При форсировании Днепра отделение под командованием
                      сержанта Абдршина первым заняло оборону...
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
                          width: "30%",
                          borderRadius: "0px",
                          backgroundColor: "#E01D04",
                          mt: 2,
                          fontSize: "12px",
                        }}
                        variant="contained"
                      >
                        Редактировать
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#E01D04",
                          borderRadius: "0px",
                          mt: 2,
                        }}
                      >
                        <img src={bin} alt="bin" />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
