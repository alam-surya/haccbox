import CategoryCard from '../CategoryCard/CategoryCard'
import sampleVideo from '../../assets/videos/sample-retro.mp4'
import sample2Video from '../../assets/videos/sample2-retro.mp4'
import sample3Video from '../../assets/videos/sample3-retro.mp4'
import './CategorySection.css'

function CategorySection() {
  const categories = [
    {
      name: 'About Us',
      image: sampleVideo,
      video: sampleVideo,
      link: '/about-us'
    },
    {
      name: 'Portfolio',
      image: sample3Video,
      video: sample3Video,
      link: '/portfolio'
    },
    {
      name: 'Our Products',
      image: sample2Video,
      video: sample2Video,
      link: '/products'
    }
  ]

  return (
    <section className="category-section" id="work">
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection

