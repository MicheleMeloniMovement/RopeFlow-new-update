
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/ropeflow-hero.jpg)' }}>
        <div className="bg-black/60 p-8 rounded-2xl text-center max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rope Flow & Rotational Movement</h1>
          <p className="text-xl mb-6">with Michele Meloni</p>
          <p className="text-base mb-4">Rediscover the natural ability to move with clarity, balance, and freedom.</p>
          <div className="flex gap-4 justify-center">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-xl hover:bg-gray-300">Join a Class</button>
            </a>
            <a href="https://www.youtube.com/@MicheleMeloniMovement" target="_blank" rel="noopener noreferrer">
              <button className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black">Watch on YouTube</button>
            </a>
          </div>
        </div>
      </section>

      <section className="p-10 md:p-20 bg-zinc-900">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed max-w-4xl">
          I’m Michele Meloni – professional dancer, movement coach and Rope Flow teacher with over 20 years of experience across Europe. I specialize in rotational training and somatic movement. My work blends performance art, fitness, and body awareness practices to support mobility, strength, and creative expression. I speak Italian, English, German and Spanish – and I teach in all four languages.
        </p>
      </section>

      <section className="p-10 md:p-20 bg-zinc-800">
        <h2 className="text-3xl font-bold mb-6">What I Teach</h2>
        <p className="text-lg leading-relaxed max-w-4xl">
          This unique method is based on spiral motion and spinal engine theory. We practice coordination, rhythm, and dynamic balance through circular and figure-8 patterns using a weighted rope. Whether you're an athlete, dancer, or complete beginner, the practice helps unlock full-body movement and improve body awareness, mobility, and focus.
        </p>
      </section>

      <section className="p-10 md:p-20 bg-zinc-900">
        <h2 className="text-3xl font-bold mb-6">Classes & Workshops</h2>
        <ul className="list-disc pl-6 text-lg max-w-3xl space-y-2">
          <li>Be Bright Movement Studio – Las Palmas</li>
          <li>Studio für künstlerischen Tanz – Berlin</li>
          <li>Workshops at TU Sport Berlin</li>
          <li>Rope Flow for Sasha Waltz & Guests Youth Company</li>
          <li>Movement Labs for Theater Thikwa Berlin</li>
        </ul>
      </section>

      <section className="p-10 md:p-20 bg-zinc-800">
        <h2 className="text-3xl font-bold mb-6">Credentials</h2>
        <ul className="list-disc pl-6 text-lg max-w-3xl space-y-2">
          <li>Certified Personal Trainer & Nutrition Consultant – ORTHOvita Berlin</li>
          <li>Back School Instructor (Rückenschullehrer Lizenz)</li>
          <li>Master in Choreography & Contemporary Dance – DanceHaus Milan</li>
        </ul>
      </section>

      <section className="p-10 md:p-20 bg-zinc-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-lg">📧 michele_meloni@yahoo.it</p>
        <p className="text-lg">📱 +49 157 86795376</p>
        <p className="text-lg">📍 Berlin & Las Palmas</p>
        <div className="flex justify-center gap-4 mt-6 text-xl">
          <a href="https://www.instagram.com/michelemeloni.movement" target="_blank" className="hover:text-gray-400">Instagram</a>
          <a href="https://www.youtube.com/@MicheleMeloniMovement" target="_blank" className="hover:text-gray-400">YouTube</a>
        </div>
      </section>
    </main>
  );
}
