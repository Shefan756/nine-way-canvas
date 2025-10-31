import { Users } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Mr. Prem Gadhia",
      title: "Founder",
      description: "Mr. Prem Gadhia is the visionary Founder of 9 Way Media Solutions. With a strong passion for creativity, marketing, and technology, he started this company with the goal of helping businesses build a strong digital presence. He believes that with the right strategy and dedication, even a small business can achieve big success in the digital world."
    },
    {
      name: "Mrs. Shital Gadhia",
      title: "Co-Founder",
      description: "Mrs. Shital Gadhia is the creative and strategic mind behind 9 Way Media Solutions. She plays a key role in client relations, campaign planning, and brand strategy. With a forward-thinking approach and a deep understanding of digital trends, she ensures every project reflects innovation and excellence."
    }
  ];

  return (
    <section id="founders" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-subtle)" }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Founders
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {founder.name.split(' ')[1].charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>
                <p className="text-sm text-primary font-semibold">{founder.title}</p>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {founder.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-xl" style={{ background: "var(--gradient-card)" }}>
            <h3 className="text-xl font-bold text-primary mb-3">Our Founders' Vision</h3>
            <p className="text-sm text-muted-foreground max-w-3xl">
              Together, they aim to make 9 Way Media Solutions a trusted partner for businesses looking to grow online — combining creativity, results, and long-term relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
