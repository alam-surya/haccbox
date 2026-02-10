/**
 * Fetch public Google Sheet as CSV and parse to rows.
 * Dev: Vite proxy. Production: PHP proxy di server (api/sheets-export.php).
 */

const SHEET_ID = '1iiRQkmHqMarmgjAkbcE3suVcTtH9aniYAf1wr75aQeY'
const GID = '0'

function getSheetCsvUrl() {
  return `/api/sheets-export?format=csv&gid=${GID}`
}

/**
 * Simple CSV parser; handles quoted fields with commas.
 * @param {string} text - Raw CSV string
 * @returns {string[][]} Array of rows, each row is array of cell strings
 */
export function parseCSV(text) {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false
  const s = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '"') {
      inQuotes = !inQuotes
    } else if (c === '\n' && !inQuotes) {
      row.push(cell.trim())
      rows.push(row)
      row = []
      cell = ''
    } else if (c === ',' && !inQuotes) {
      row.push(cell.trim())
      cell = ''
    } else {
      cell += c
    }
  }
  if (cell.trim() !== '' || row.length > 0) {
    row.push(cell.trim())
    rows.push(row)
  }
  return rows
}

/**
 * Fetch sheet CSV and return parsed rows.
 * @returns {Promise<{ rows: string[][], error: string | null }>}
 */
export async function fetchSheetData() {
  try {
    const url = getSheetCsvUrl()
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const text = await res.text()
    const rows = parseCSV(text)
    return { rows, error: null }
  } catch (err) {
    return { rows: [], error: err.message || 'Failed to load sheet' }
  }
}

export { SHEET_ID, GID, getSheetCsvUrl }
