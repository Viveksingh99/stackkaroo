import React from "react";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const SmallCard = () => {
  return (
    <div>
      <Typography
        fontFamily="outfit"
        fontWeight={600}
        fontSize="22px"
        color="#36454F"
        textAlign="center"
        marginBottom="10px"
      >
        In the realm of digital solutions, we offer expertise in
      </Typography>
      <div className="flex flex-wrap gap-10 justify-center">
      <Button variant="outlined">Website Development</Button>
      <Button variant="outlined">App Development</Button>
      <Button variant="outlined">UI/UX Design</Button>
      <Button variant="outlined">Digital Marketing</Button>
      <Button variant="outlined">SEO Optimization</Button>
      </div>
      <Typography
        fontFamily="outfit"
        fontWeight={600}
        fontSize="22px"
        color="#36454F"
        textAlign="center"
        marginY="10px"
      >
        showcasing our proficiency across various facets of the digital platform{" "}
      </Typography>
    </div>
  );
};

export default SmallCard;
