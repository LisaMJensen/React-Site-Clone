import React from 'react';
import Pin from './Pin';
import pancakeImage from '../assets/images/pancake.jpg';

var masterPinList = [
  {
    image: <img src={pancakeImage} />,
    title: "Buttermilk Pancakes",
    link: 'link',
  },
  // {
  //   image: <img src={} />,
  //   title:
  //     link:
  // },
  // {
  //   image: <img src={} />,
  //   title:
  //     link:
  // },
  // {
  //   image: <img src={} />,
  //   title:
  //     link:
  // },
  // {
  //   image: <img src={} />,
  //   title:
  //     link:
  // },
]

function PinList() {
  return (
    <div>
      {masterPinList.map((pin, index) =>
        <Pin image={pin.image}
          title={pin.title}
          link={pin.link}
          key={index} />
      )}
    </div>
  );
}

export default PinList;