
const YouTube = ({ data }) => {
  return (
    <section className="prose prose-lg container py-12">
      <h2>{data.title}</h2>
      <iframe width="560" height="315" 
      src={data.embedurl}
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    </section>
  );
};


export default YouTube;
