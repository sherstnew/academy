import instagram from './static/icons/instagram.png';
import telegram from './static/icons/telegram.png';
import vk from './static/icons/vk.png';

export const ACADEMYCONFIG = {
  HOST: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ' https://academy-server.cyclic.app',
  CONTACT: 'https://t.me/Mr_Palex',
  INST: {
    link: 'https://www.instagram.com/academy_pfv',
    icon: instagram,
  },
  TG: {
    link: 'https://t.me/academypfv',
    icon: telegram,
  },
  VK: {
    link: 'https://vk.com/academypfv',
    icon: vk,
  },
};