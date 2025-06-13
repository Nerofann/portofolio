
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-80 h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-6">
                Crafting Digital Experiences
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development and design, I specialize in creating 
                modern, responsive applications that deliver exceptional user experiences. My passion lies 
                in the intersection of design and technology.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What I Do</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Frontend Development</Badge>
                    <Badge variant="secondary">Backend Development</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                    <Badge variant="secondary">Mobile Development</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
