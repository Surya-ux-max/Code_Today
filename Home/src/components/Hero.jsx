function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-50">

      <div className="container-custom text-center">

        <h1 className="heading-primary">
          Connect With The World
        </h1>

        <p className="subtitle mt-6 max-w-2xl mx-auto">
          Join millions of users sharing ideas,
          building communities and engaging in
          meaningful conversations.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="btn-primary">
            Get Started
          </button>

          <button className="btn-secondary">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;