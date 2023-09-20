import { DetailsInterface } from "@/components/ProjectDetails"

interface ProjectType extends DetailsInterface {
  image: string
}

const projectsList: ProjectType[] = [
  {
    title: 'Reading List',
    desc: 'Explore a catalog of books, add them to your reading list and remove them as well. You can take a look on each book\'s details, such as the author or the synopsis.',
    image: '/readlist-shot.jpg',
    usedTech: ['Next.js', 'TypeScript', 'TailwindCSS', 'ESLint'],
    link: 'https://readlist-opal.vercel.app',
    repoLink: 'https://github.com/CronoCode120/readlist',
    bgColor: 'rgb(191,219,254)'
  },
  {
    title: 'Wordle',
    desc: 'A recreation of the classic Wordle game. Fully playable! Instructions are included in the page.',
    image: '/wordle-shot.jpg',
    usedTech: ['Next.js', 'TailwindCSS', 'TypeScript', 'ESLint'],
    link: 'https://wordle-zeta-five.vercel.app',
    repoLink: 'https://github.com/CronoCode120/wordle',
    bgColor: 'rgb(254,240,138)'
  },
  {
    title: 'E-commerce Site',
    desc: 'Online fictional shop where you can explore products, check their details, add them to a cart and buy them. The products are retrieved from a Sanity dashboard containing all the catalog data, which can be edited at any time.',
    image: '/ecommerce-shot.jpg',
    usedTech: ['Next.js', 'CSS', 'Sanity', 'Stripe', 'REST Api'],
    link: 'https://online-shop-five-alpha.vercel.app',
    repoLink: 'https://github.com/CronoCode120/online-shop',
    bgColor: 'rgb(245,208,254)'
  },
  {
    title: 'CRUD App',
    desc: 'A simple social app where you can create an account and log in; create, edit and delete posts; edit your profile, change your credentials and delete your own account. You can also like and comment other users\' posts.',
    image: '/social-shot.jpg',
    usedTech: ['Next.js', 'TailwindCSS', 'MongoDB', 'REST Api'],
    link: 'https://think-share.vercel.app',
    repoLink: 'https://github.com/CronoCode120/thinkShare',
    bgColor: 'rgb(167,243,208)'
  }
]

export default projectsList