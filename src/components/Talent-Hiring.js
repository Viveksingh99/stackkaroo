import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";


const Hiring = () => {
    const Data = [
        {
            img:'/locations.png',
            title:'Unleashing Top Talent Globally',
            discription:'We offer 5% top talents and supports companies hiring from various time zones.'
        },
        {
            img:'/promotion.png',
            title:'Securing Success',
            discription:'The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.'
        },
        {
            img:'/pin.png',
            title:'Beyond Borders',
            discription:'We provide both, flexible full-time and part-time jobs'
        },
        {
            img:'/badge.png',
            title:'End-to-End Excellence',
            discription:'In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.'
        },
        {
            img:'/performance.png',
            title:'Efficiency Redefined',
            discription:'The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.'
        },
        {
            img:'/commitment.png',
            title:'Simplified Contracts Satisfied Partnerships',
            discription:'The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.'
        }
    ]
  return (
    <>
      <div className="text-center my-10">
        <h3 className="text-[#E68F50]">
          Stackkaroo’s Talent Hiring & Job Placement Services
        </h3>
        <p>
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. <br /> We
          also provide global job opportunities with good salaries, support, and
          professional development.
        </p>
      </div>
      <div className="flex flex-wrap justify-center px-5">
      {Data.map((item, index)=>(
        <Card sx={{ width:'350px', borderRadius:'20px', margin:'10px'}} key={index}>
          <CardContent sx={{ textAlign: 'center' }}>
        <Image
            src={item.img}
            width={80}
            height={80}
            alt="Picture of the author"
            style={{ display: 'block', margin: 'auto' }}
          />
            <Typography variant="h6" component="div" sx={{ margin: 'auto', color:'#0A56F1', marginY:'20px' }}>
             {item.title}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom:'20px'}}>
              {item.discription}
            </Typography>
          </CardContent>
        </Card>
      ))}
      </div>
    </>
  );
};

export default Hiring;
