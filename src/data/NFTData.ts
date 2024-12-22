import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  CardImg1,
  CardImg2,
  CardImg3,
  CardImg4,
  CardImg5,
  CardImg6,
} from './images';

export interface NFTProps {
  id: string | number;
  title: string;
  artist: string;
  image: string;
  price: string;
  timeAgo: string;
  link: string;
  totalMembers: number;
  avatars: string[];
  fileUrl?: string; // Optional property for the file URL
}

export const NFTData: NFTProps[] = [
  {
    id: 1,
    title: 'Diabetes',
    artist: '',
    image: CardImg1,
    price: '21/02/23',
    timeAgo: '30s',
    link: '#!',
    totalMembers: 21,
    avatars: [Avatar1, Avatar2, Avatar3],
    fileUrl: 'https://hdq.uswr.ac.ir/article-1-344-en.pdf', // Add file URL here
  },
  {
    id: 2,
    title: 'Corona',
    artist: 'Esthera Jackson',
    image: CardImg2,
    price: '24/04/23',
    timeAgo: '58s',
    link: '#!',
    totalMembers: 16,
    avatars: [Avatar5, Avatar3],
    fileUrl: '/files/corona.pdf', // Add file URL here
  },
  {
    id: 3,
    title: 'E-bola',
    artist: 'Nick Wilson',
    image: CardImg3,
    price: '01/12/23',
    timeAgo: '12m',
    link: '#!',
    totalMembers: 12,
    avatars: [Avatar3, Avatar1, Avatar2],
    fileUrl: '/files/ebola.pdf', // Add file URL here
  },
  {
    id: 4,
    title: 'Asthama',
    artist: 'Peter Will',
    image: CardImg4,
    price: '21/11/23',
    timeAgo: '15m',
    link: '#!',
    totalMembers: 28,
    avatars: [Avatar2, Avatar4, Avatar5, Avatar3],
    fileUrl: '/files/swipe-circles.pdf', // Add file URL here
  },
  {
    id: 5,
    title: 'Hypertension',
    artist: 'Will Smith',
    image: CardImg5,
    price: '12/06/23',
    timeAgo: '20m',
    link: '#!',
    totalMembers: 19,
    avatars: [Avatar3, Avatar4, Avatar1],
    fileUrl: '/files/mesh-gradients.pdf', // Add file URL here
  },
  {
    id: 6,
    title: '3D Cubes Art',
    artist: 'Manny Gates',
    image: CardImg6,
    price: '18/05/23',
    timeAgo: '35m',
    link: '#!',
    avatars: [Avatar1, Avatar5],
    totalMembers: 24,
    fileUrl: '/files/3d-cubes-art.pdf', // Add file URL here
  },
];
