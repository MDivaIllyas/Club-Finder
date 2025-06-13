import robot from '../assets/robotic-club.jpg'
import music from '../assets/musicFest-club.jpg'
import photo from '../assets/photo-club.jpg'
import environment from '../assets/environment-logo.jpg'
import anime from '../assets/anime-club.jpg'

const plantaranClub = [
  {
   id: 'robotics',
   name: 'Robotics Club',
   image: robot,
   shortDescription: 'Build and code robots with fellow enthusiasts.',
   description: 'Learn about robotics, compete in competitions, and join hands-on workshops every month!',
   events: [
     { name: 'Intro to Arduino', date: '2025-06-20' },
     { name: 'Robotics Expo', date: '2025-07-12' }
   ]
 },
 {
    id: 'music',
    name: 'Music Club',
    image: music,
    shortDescription: 'Jam, perform, and learn with fellow music lovers.',
    description: 'Join weekly jam sessions, showcase your talent in campus events, and learn from experienced musicians.',
    events: [
      { name: 'Open Mic Night', date: '2025-06-22' },
      { name: 'Songwriting Workshop', date: '2025-07-05' }
    ]
  },
  {
    id: 'photography',
    name: 'Photography Club',
    image: photo,
    shortDescription: 'Capture moments and improve your photography skills.',
    description: 'Explore photography techniques, join photowalks, and take part in monthly photo contests.',
    events: [
      { name: 'Sunset Photowalk', date: '2025-06-18' },
      { name: 'Editing Masterclass', date: '2025-07-08' }
    ]
  },
  {
    id: 'environment',
    name: 'Environmental Club',
    image: environment,
    shortDescription: 'Protect nature through community projects.',
    description: 'Organize clean-up drives, tree planting, and eco-awareness campaigns. Make an impact locally and globally.',
    events: [
      { name: 'Campus Clean-Up Day', date: '2025-06-25' },
      { name: 'Plastic-Free Week', date: '2025-07-15' }
    ]
  },
  {
    id: 'anime',
    name: 'Anime & Manga Club',
    image: anime,
    shortDescription: 'Discuss, watch, and draw anime and manga together.',
    description: 'Weekly anime screenings, fan art contests, cosplay gatherings, and manga review nights for all fans.',
    events: [
      { name: 'Anime Marathon', date: '2025-06-21' },
      { name: 'Cosplay Day', date: '2025-07-10' }
    ]
  },
]

export default plantaranClub;