import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";

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
                maxWidth: "100%",
                background: "#F5FCFF",
                borderRadius: "0px",
                border: "none",
                display: "flex",
                p: 1,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  gridGap: 20,
                  flexDirection: { xs: "column", md: "unset" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "100%", md: "25%" },
                  }}
                  // onClick={() => {
                  //   window.location.href = `/product/${e.id}`;
                  // }}
                >
                  <CardMedia
                    component="img"
                    image={`/image.png`}
                    //   alt={e.name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </Box>
                <Box sx={{ width: "75%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: { xs: "column", md: "unset" },
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontWeight: "bold",
                        mb: 1,
                        width: { xs: "100%", md: "60%" },
                      }}
                      //   onClick={() => {
                      //     window.location.href = `/product/${e.id}`;
                      //   }}
                    >
                      Абдршин Рамиль Хайруллаевич
                    </Typography>
                    <Typography
                      // variant="h6"
                      color="black"
                      sx={{
                        mb: 1,
                        width: { xs: "100%", md: "40%" },
                        textAlign: { xs: "left", md: "right" },
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                      //   onClick={() => {
                      //     window.location.href = `/product/${e.id}`;
                      //   }}
                    >
                      Родился 01.11.1925 с. Новомусино Шарлыкского района
                      Оренбургской области
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 1,
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      // variant="h5"
                      sx={{
                        color: "#737373",
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                      }}
                      // onClick={() => {
                      //   window.location.href = `/product/${e.id}`;
                      // }}
                    >
                      При форсировании Днепра отделение под командованием
                      сержанта Абдршина первым заняло оборону и обеспечило
                      успешную переправу на другой берег всем остальным
                      подразделениям. Во время боя командир отделения Абдршин
                      был смертельно ранен.
                    </Typography>

                    <Button
                      sx={{
                        width: { xs: "100%", md: "30%" },
                        borderRadius: "0px",
                        backgroundColor: "#E01D04",
                        mt: 4,
                        fontSize: "20px",
                      }}
                      variant="contained"
                      //   onClick={() => {
                      //     window.location.href = `/product/${e.id}`;
                      //   }}
                    >
                      Подробнее
                    </Button>
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
