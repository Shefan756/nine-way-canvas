import { Target, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Vision = () => {
  return (
    <section id="vision" className="py-20 px-6 relative overflow-hidden" style={{ background: "var(--gradient-card)" }}>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Vision & <span className="text-primary">Mission</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-background" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To empower every business — small or large — to build a powerful online presence through creativity, strategy, and innovation. We aim to be recognized as one of India's most trusted and result-driven digital marketing agencies.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 hover:border-secondary/50 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-background" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
                <li>• Help brands connect with their audience through meaningful digital experiences</li>
                <li>• Provide customized marketing solutions that deliver measurable results</li>
                <li>• Continuously innovate and stay ahead in the fast-changing digital world</li>
                <li>• Build long-term relationships based on trust, creativity, and performance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
