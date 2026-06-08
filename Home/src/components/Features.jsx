const features = [
    {
        title: "Real Thinking",
        description: "AI thinking capabilities.to the maximum level"
    },
    {
        title: "Unreal workflow",
        description: "Seamless integration with your existing workflow."
    
    },
    {
        title: "Unreal workflow",
        description: "Seamless integration with your existing workflow."
    }
]

function Features(){
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

  {features.map((feature) => (

    <div className="card">

      <h3 className="text-2xl font-bold">
        {feature.title}
      </h3>

      <p className="mt-4 text-gray-500">
        {feature.description}
      </p>

    </div>

  ))}

</div>
    );
}

export default Features;