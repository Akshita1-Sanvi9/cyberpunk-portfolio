import { useEffect, useRef } from 'react'
import './Parallax.css'

// export default function Parallax() {
//   useEffect(() => {
//     const el = document.querySelector('.parallax')
//     const handleScroll = () => {
//       const scrollY = window.scrollY
//       el.style.transform = `translateY(${scrollY * 0.3}px)`
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return <div className="parallax" />
// }
export default function Parallax() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    // const handleScroll = () => {
    //   const scrollY = window.scrollY
    //   if (parallaxRef.current) {
    //     parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
    //   }
    // }
 const el = document.querySelector('.parallax')
  const handleScroll = () => {
    const scrollY = window.scrollY
    el.style.backgroundPosition = `center ${-scrollY * 0.3}px`
  }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={parallaxRef} className="parallax" />
  )
}
// {/* <section className="min-h-screen"> {/* for each major section */}</section>
//  */}
