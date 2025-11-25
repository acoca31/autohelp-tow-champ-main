import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ThemeToggle } from "@/components/ThemeToggle";
import Autoplay from "embla-carousel-autoplay";
import platforma1 from "@/assets/platforma-1.jpeg";
import platforma2 from "@/assets/platforma-2.jpeg";
import platforma3 from "@/assets/platforma-3.jpeg";
import platforma4 from "@/assets/platforma-4.jpeg";

const Index = () => {
  const images = [platforma1, platforma2, platforma3, platforma4];
  const phoneNumber = "0786459707";
  
  const cities = [
    { name: "Câmpulung Moldovenesc", highlight: true },
    { name: "Suceava", highlight: false },
    { name: "Gura Humorului", highlight: false },
    { name: "Vatra Dornei", highlight: false },
    { name: "Bistrița", highlight: false },
  ];

  const services = [
    {
      title: "Tractări Auto Non-Stop",
      description: "Disponibili 24/7 pentru orice tip de urgență auto. Echipă profesionistă și echipament modern pentru tractarea vehiculului dumneavoastră în siguranță.",
      icon: "🚗",
    },
    {
      title: "Transport Marfă",
      description: "Servicii profesionale de transport marfă pentru orice destinație. Livrăm rapid și în siguranță cu echipamente specializate.",
      icon: "📦",
    },
    {
      title: "Tractări de Urgență",
      description: "Răspundem rapid la orice situație de urgență. Suntem lângă tine când ai nevoie, oricând și oriunde în zonă.",
      icon: "🚨",
    },
  ];

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <h1 className="sr-only">
  Tractări auto 24/7 în Suceava, Câmpulung Moldovenesc, Gura Humorului, Vatra Dornei și Bistrița – AutoHelp
</h1>
<p className="sr-only">
  AutoHelp 24/7 oferă servicii profesionale de tractări auto, platformă auto și transport marfă în Suceava, 
  Câmpulung Moldovenesc, Gura Humorului, Vatra Dornei și Bistrița. Intervenție rapidă, servicii non-stop la cele mai bune prețuri.
</p>
      <ThemeToggle />
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-float">
              <span className="gradient-text">AutoHelp 24/7</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Servicii profesionale de tractări auto și transport marfă
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-pulse-glow"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Sună acum: {phoneNumber}
            </Button>
          </div>

          <div className="max-w-7xl mx-auto">
            <Carousel 
              className="w-full" 
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                })
              ]}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/5] md:aspect-video overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 group">
                      <img
                        src={image}
                        alt={`Servicii tractări auto AutoHelp 24/7 - Imagine ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent items-end p-8">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-3xl font-bold mb-3 text-primary drop-shadow-lg">AutoHelp 24/7</h3>
                          <p className="text-base leading-relaxed opacity-95 drop-shadow-md">
                            Asistență rutieră de încredere, disponibilă oricând ai nevoie. 
                            Suntem o platformă modernă de tractări auto, dedicată intervențiilor rapide și eficiente, 
                            indiferent de oră sau locație. Cu o rețea extinsă de parteneri profesioniști, asigurăm 
                            servicii sigure și transparente, la prețuri corecte. Alegând AutoHelp 24/7, beneficiezi 
                            de promptitudine, seriozitate și suport permanent – pentru ca fiecare drum să se termine în siguranță.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-primary/90 hover:bg-primary border-0 text-white shadow-lg h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-2 md:right-4 bg-primary/90 hover:bg-primary border-0 text-white shadow-lg h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
            
            {/* Mobile description below carousel */}
            <div className="md:hidden mt-6 px-4 animate-fade-in">
              <h3 className="text-xl font-bold mb-3 gradient-text">AutoHelp 24/7</h3>
              <p className="text-sm leading-relaxed text-foreground/90">
                Asistență rutieră de încredere, disponibilă oricând ai nevoie. 
                Suntem o platformă modernă de tractări auto, dedicată intervențiilor rapide și eficiente, 
                indiferent de oră sau locație. Cu o rețea extinsă de parteneri profesioniști, asigurăm 
                servicii sigure și transparente, la prețuri corecte. Alegând AutoHelp 24/7, beneficiezi 
                de promptitudine, seriozitate și suport permanent – pentru ca fiecare drum să se termine în siguranță.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            <span className="gradient-text">Zone Deservite</span>
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Câmpulung Moldovenesc - destacat pe centru */}
            <div className="flex justify-center animate-fade-in">
              <div className="px-12 py-5 rounded-full font-bold text-2xl bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground shadow-[var(--shadow-glow)] animate-pulse-glow hover:scale-110 transition-all duration-300 bg-[length:200%_auto] hover:bg-[position:right_center] shimmer">
                Câmpulung Moldovenesc
              </div>
            </div>
            
            {/* Restul orașelor */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {cities.slice(1).map((city, index) => (
                <div
                  key={city.name}
                  className="px-8 py-4 rounded-full font-semibold text-lg bg-card text-card-foreground border-2 border-border hover:border-primary hover:shadow-[var(--shadow-glow)] hover:scale-110 transition-all duration-300 animate-fade-in hover:bg-gradient-to-r hover:from-card hover:to-primary/10"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            <span className="gradient-text">Serviciile Noastre</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="hover:shadow-[var(--shadow-glow)] transition-all duration-500 border-2 hover:border-primary hover:scale-105 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-fade-in group overflow-hidden relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-center font-bold gradient-text">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4 relative z-10">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Sună-mă
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ai nevoie de ajutor?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto">
            Suntem disponibili 24/7 pentru tine. Nu ezita să ne suni!
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/95 font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 animate-pulse-glow"
            onClick={handleCall}
          >
            <Phone className="mr-3 h-7 w-7 animate-float" />
            {phoneNumber}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gradient-to-b from-muted/50 to-muted border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-xl font-bold mb-2 gradient-text">AutoHelp 24/7</p>
          <p className="text-sm md:text-base mb-3">Tractări auto și transport marfă - Servicii profesionale non-stop</p>
          <p className="text-xs md:text-sm opacity-75">
            © {new Date().getFullYear()} AutoHelp 24/7. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
