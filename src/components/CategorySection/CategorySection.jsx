import CategoryCard from '../CategoryCard/CategoryCard'
import sampleVideo from '../../assets/videos/sample.mp4'
import sample2Video from '../../assets/videos/sample2.mp4'
import sample3Video from '../../assets/videos/sample3.mp4'
import './CategorySection.css'

function CategorySection() {
  const categories = [
    {
      name: 'Guarantee',
      image: sampleVideo,
      video: sampleVideo,
      link: '/guarantee'
    },
    {
      name: 'How To Order',
      image: sample2Video,
      video: sample2Video,
      link: '/how-to-order'
    },
    {
      name: 'Gallery',
      image: sample3Video,
      video: sample3Video,
      link: '/gallery'
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

