import throttle from 'lodash/throttle';

const handleScroll = throttle(() => {
  console.log('Scroll event fired');
}, 1000);

window.addEventListener('scroll', handleScroll);
