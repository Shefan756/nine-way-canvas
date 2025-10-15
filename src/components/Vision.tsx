import { Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Vision = () => {
  return (
    <section id="vision" className="py-32 px-6 relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Vision & Aim
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card className="border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg group" style={{ background: "var(--gradient-card)" }}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Lightbulb className="w-8 h-8 text-background" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 leading-relaxed">
                To be the leading digital marketing partner that empowers businesses to achieve
                unprecedented growth through innovative strategies and creative excellence. We envision
                a world where every brand can harness the full potential of digital platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-lg group" style={{ background: "var(--gradient-card)" }}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Target className="w-8 h-8 text-background" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Our Aim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 leading-relaxed">
                To deliver exceptional digital marketing solutions that drive measurable results. We aim
                to build lasting relationships with our clients by consistently exceeding expectations
                and helping them navigate the ever-evolving digital landscape with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
