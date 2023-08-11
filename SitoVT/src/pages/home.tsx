import React from 'react';
/*import Immagine1 from '../assets/veronatrento-1.jpg';
import { Carousel } from 'antd';*/
import '../style.scss';
import { Carousel } from 'antd';
import img1 from "../assets/veronatrento-1.jpg"

const home: React.FC = () => {
    return(
        <Carousel style={{ maxWidth: "1000px", margin: "0 auto"}} autoplay>
        <div>
          <img src={img1} alt="sborra" />
        </div>
        <div>
        <img src={img1} alt="sborra" />
        </div>
        <div>
        <img src={img1} alt="sborra" />
        </div>
        <div>
        <img src={img1} alt="sborra" />
        </div>
      </Carousel>
);
    };

export default home;