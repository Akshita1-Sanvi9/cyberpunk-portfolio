
export default function ParallaxScene() {
  return (
    <section className="relative h-[300vh] overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-full" data-parallax data-speed="0.2">
        <img src="/src/assets/neon-grid.png" className="w-full h-full object-cover opacity-30" />
      </div>

      
      <div className="absolute top-0 left-0 w-full h-full" data-parallax data-speed="0.5">
        <img src="/src/assets/cityscape.png" className="w-full h-full object-cover opacity-50" />
      </div>

     
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-neonCyan font-terminal">
        <h1 className="text-5xl mb-4">Welcome to Akshita's World</h1>
        <p className="text-xl">Scroll to explore the layers</p>
      </div>
    </section>
  )
}
