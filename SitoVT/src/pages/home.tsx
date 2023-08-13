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
        <img src={img1} alt="img1" />
        </div>
        <div>
        <img src={img1} alt="img2" />
        </div>
        <div>
        <img src={img1} alt="img3" />
        </div>
        <div>
        <img src={img1} alt="img4" />
        </div>
      </Carousel>
);
    };

export default home;