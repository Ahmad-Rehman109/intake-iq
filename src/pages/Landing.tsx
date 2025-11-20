import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, BarChart3, ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IntakeIQ
            </h1>
          </div>
          <Link to="/auth">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Sign In
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            AI-Powered Lead Qualification
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
            Stop Losing
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              $20K/Month
            </span>
            <span className="block mt-2">to Unqualified Leads</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            IntakeIQ automatically qualifies immigration law leads, scores them by quality,
            and only sends you clients worth your time. Save 15+ hours per week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No credit card required • Setup in 5 minutes
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-border/40 hover:border-primary/40 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Lead Scoring</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI automatically classifies every lead as Hot, Qualified, or Unqualified
              based on your firm's criteria
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/40 hover:border-primary/40 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Branded Intake Forms</h3>
            <p className="text-muted-foreground leading-relaxed">
              Give clients a professional intake experience with your firm's branding.
              Mobile-friendly and secure.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/40 hover:border-primary/40 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Dashboard</h3>
            <p className="text-muted-foreground leading-relaxed">
              See new leads instantly, track conversion rates, and manage your pipeline
              from one central dashboard.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">How IntakeIQ Works</h3>
          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Client Fills Out Intake Form",
                description: "Potential clients answer 8 simple questions about their case, timeline, and budget"
              },
              {
                step: "2",
                title: "AI Scores the Lead",
                description: "IntakeIQ instantly analyzes location, budget, timeline, and case type to determine lead quality"
              },
              {
                step: "3",
                title: "You Get Notified",
                description: "Hot leads trigger instant email alerts. Dashboard updates in real-time. Focus only on qualified prospects."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {item.step}
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-lg mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/40">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Professional Plan</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold text-primary">$1,500</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "Unlimited lead submissions",
                "Automatic AI lead scoring",
                "Branded intake portal",
                "Real-time dashboard & notifications",
                "Email auto-responders",
                "Custom service area settings"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/auth" className="block">
              <Button size="lg" className="w-full">
                Start Free Trial
              </Button>
            </Link>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              14-day free trial • Cancel anytime
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h3 className="text-4xl font-bold mb-4">
            Ready to Qualify Better Leads?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join immigration law firms saving 15+ hours per week with IntakeIQ
          </p>
          <Link to="/auth">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 IntakeIQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;