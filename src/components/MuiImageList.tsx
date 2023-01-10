import React from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";
const images = [
  {
    img: "https://source.unsplash.com/random",
    title: "image 1",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 2",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 3",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
];
const imagesTwo = [
  {
    img: "https://source.unsplash.com/random",
    title: "image 1",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 2",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 3",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image 4",
  },
];
const MuiImageList = () => {
  return (
    <Stack>
      <ImageList sx={{ width: 500, height: 400 }} cols={3} rowHeight={164}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164h&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        sx={{ width: 500, height: 400 }}
        cols={3}
        variant="woven"
        gap={8}
      >
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164h&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ width: 500, height: 400, overflowY: "scroll" }}>
        <ImageList cols={3} variant="masonry" gap={8}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MuiImageList;
