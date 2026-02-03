import CategoryCard from '../CategoryCard/CategoryCard'
import sampleVideo from '../../assets/videos/sample.mp4'
import sample2Video from '../../assets/videos/sample2.mp4'
import sample3Video from '../../assets/videos/sample3.mp4'
import { useLanguage } from '../../context/LanguageContext'
import './CategorySection.css'

function CategorySection() {
  const { t } = useLanguage()
  const categories = [
    { name: t.category.guarantee, image: sampleVideo, video: sampleVideo, link: '/guarantee' },
    { name: t.category.howToOrder, image: sample2Video, video: sample2Video, link: '/how-to-order' },
    { name: t.category.gallery, image: sample3Video, video: sample3Video, link: '/gallery' }
  ]

  return (
    <section className="category-section" id="work">
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.link} category={category} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection

