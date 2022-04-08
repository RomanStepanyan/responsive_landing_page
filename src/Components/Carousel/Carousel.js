import { Slider } from 'react-slider-awesome';
import s from './Carousel.module.css';

import 'react-slider-awesome/dist/index.css';

const MySlider = () => {
  return (
    <div className={s.Slider}>
      <Slider rtl={false} noEffects={false} size={'small'}>
        <div>
          <img
            alt="cocker-spaniel"
            src={
              'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="dove"
            src={
              'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="cat"
            src={
              'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="horses"
            src={
              'https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="parrot"
            src={
              'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="lion"
            src={
              'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="dove"
            src={
              'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="puppy"
            src={
              'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_150.jpg'
            }
          />
        </div>
        <div>
          <img
            alt="bird"
            src={
              'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_150.jpg'
            }
          />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
