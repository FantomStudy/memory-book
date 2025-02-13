import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Pagination,
  Typography,
} from "@mui/material";
import React from "react";

export default function BookCards() {
  return (
    <Box sx={{ mt: 1, mb: 5 }}>
      <Box sx={{ mb: 5 }}>
        {/* <SidebarFilter setFilters={setFilters} /> */}
      </Box>
      <Box>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 4 }}
        >
          <Grid2 item={"true"} key={1} xs={6} sm={4} md={3}>
            <Card
              sx={{
                maxWidth: "100%",
                background: "#F5FCFF",
                // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "0px",
                border: "none",
                // transition: "transform 0.2s, box-shadow 0.2s",
                // "&:hover": {
                //   transform: "scale(1.05)",
                //   boxShadow: " 0 8px 30px rgba(0, 0, 0, 0.2)",
                // },
                display: "flex",
                p: 1,
              }}
            >
              <CardContent sx={{ display: "flex", gridGap: 20 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "25%",
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
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        mb: 1,
                        width: "60%",
                      }}
                      //   onClick={() => {
                      //     window.location.href = `/product/${e.id}`;
                      //   }}
                    >
                      Абдршин Рамиль Хайруллаевич
                    </Typography>
                    <Typography
                      variant="h6"
                      color="black"
                      sx={{ mb: 1, width: "40%", textAlign: "right" }}
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
                      variant="h5"
                      sx={{ color: "#737373" }}
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
                        width: "30%",
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

      <Pagination
        //   count={Math.ceil((products.count || 0) / ProductsPerPage)}
        //   page={currentPage}
        //   onChange={handleChangePage}
        sx={{ mt: 4, mb: 4, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
}
