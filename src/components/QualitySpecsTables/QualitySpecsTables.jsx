import { useState, useEffect, useRef } from 'react'
import { fetchSheetData } from '../../utils/sheetUtils'
import './QualitySpecsTables.css'

function QualitySpecsTables({ specTitles }) {
  const [data, setData] = useState({ rows: [], error: null })
  const [loading, setLoading] = useState(true)
  const mainRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchSheetData()
      .then((res) => {
        if (!cancelled) {
          setData(res)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setData({ rows: [], error: err.message })
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const main = mainRef.current
    if (!main) return
    const block = main.querySelector(`[data-active="true"]`)
    if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [activeIndex])

  const titles = specTitles || []
  const { rows, error } = data

  return (
    <div className="quality-specs-tables">
      <nav className="quality-specs-nav" aria-label="Quality specs">
        <ul className="quality-specs-nav-list">
          {titles.map((title, index) => (
            <li key={index} className="quality-specs-nav-item">
              <button
                type="button"
                className={`quality-specs-nav-link ${activeIndex === index ? 'quality-specs-nav-link--active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div ref={mainRef} className="quality-specs-main">
        {loading && (
          <div className="quality-specs-loading">Loading…</div>
        )}
        {error && !loading && (
          <div className="quality-specs-error">
            Could not load table. Make sure the sheet is shared as “Anyone with the link can view”.
          </div>
        )}
        {!loading && !error && rows.length > 0 && (
          <>
            {titles.map((title, blockIndex) => (
              <div
                key={blockIndex}
                className="quality-specs-block"
                data-active={activeIndex === blockIndex}
              >
                <h3 className="quality-specs-block-title">{title}</h3>
                <div className="quality-specs-table-wrap">
                  <table className="quality-specs-table">
                    <tbody>
                      {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default QualitySpecsTables
