import { useEffect, useState } from 'react'

export default function useActiveSection(ids) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [ids])
  return active
}
