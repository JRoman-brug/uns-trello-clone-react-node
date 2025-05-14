import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CanonicalTag() {
  const { id } = useParams()

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}/projects/${id}`
    let link = document.querySelector("link[rel='canonical']")

    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }

    link.setAttribute('href', canonicalUrl)
  })
  return null
}

export default CanonicalTag
