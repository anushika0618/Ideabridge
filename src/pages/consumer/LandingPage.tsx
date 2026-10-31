import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { IdeaCard } from '@/features/ideas/IdeaCard';
import {
  PlusCircle,
  Building2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { ideas, challenges } = useApp();

  const featuredIdeas = ideas.slice(0, 3);
  const featuredChallenges = challenges.slice(0, 2);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-semibold animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>The Consumer-to-Company Product Innovation Platform</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Turn your everyday product ideas into{' '}
          <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            real commercial products.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          IdeaBridge connects everyday consumers with forward-thinking food, beverage, snack, and
          lifestyle brands. Pitch concepts, validate demand, and win corporate grants.
        </p>

        {/* Dual Primary Calls to Action */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
          <Link to="/explore" className="w-full sm:w-1/2">
            <Button
              size="lg"
              variant="primary"
              className="w-full justify-center px-6 py-3.5 text-base shadow-lg shadow-brand-500/25 font-bold"
            >
              Continue as Consumer
            </Button>
          </Link>
          <Link to="/company/dashboard" className="w-full sm:w-1/2">
            <Button
              size="lg"
              variant="enterprise"
              leftIcon={<Building2 className="w-5 h-5" />}
              className="w-full justify-center px-6 py-3.5 text-base shadow-lg shadow-emerald-600/20 font-bold"
            >
              Continue as Startup
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <span>Have an idea right now?</span>
          <Link to="/submit" className="font-semibold text-brand-600 hover:underline inline-flex items-center gap-1">
            <PlusCircle className="w-3.5 h-3.5" />
            Directly Submit a Concept
          </Link>
        </div>

        {/* Live Platform Stats Strip */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-slate-200/70">
          <div className="p-3">
            <div className="text-2xl font-extrabold text-slate-900">1,480+</div>
            <div className="text-xs text-slate-500 font-medium">Consumer Concepts</div>
          </div>
          <div className="p-3">
            <div className="text-2xl font-extrabold text-brand-600">89%</div>
            <div className="text-xs text-slate-500 font-medium">Brand Scout Review Rate</div>
          </div>
          <div className="p-3">
            <div className="text-2xl font-extrabold text-slate-900">52</div>
            <div className="text-xs text-slate-500 font-medium">Enterprise Partners</div>
          </div>
          <div className="p-3">
            <div className="text-2xl font-extrabold text-emerald-600">$47.5k</div>
            <div className="text-xs text-slate-500 font-medium">In Innovation Grants</div>
          </div>
        </div>
      </section>

      {/* How It Works (Consumer & Company Parallel Flow) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="neutral" size="sm">Two-Way Innovation Engine</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How IdeaBridge Bridges Consumers & Enterprises
          </h2>
          <p className="text-sm text-slate-500">
            A transparent pipeline from kitchen frustrations to retail shelf breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 relative space-y-3 border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Consumers Pitch Solutions</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Identify friction in food, drinks, snacks, home essentials, and lifestyle products.
              Pitch structured concepts targeting specific retail brands.
            </p>
          </Card>

          <Card className="p-6 relative space-y-3 border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Community Validates Demand</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Everyday consumers upvote, refine formulation ideas, suggest packaging tweaks, and
              signal genuine willingness to purchase.
            </p>
          </Card>

          <Card className="p-6 relative space-y-3 border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. Companies Scout & Build</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Corporate R&D teams evaluate consumer signals, shortlist promising ideas into lab
              testing, and license concepts for commercial launch.
            </p>
          </Card>
        </div>
      </section>

      {/* Featured Sponsored Challenges Banner */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="warning" size="sm" className="mb-1">Cash Grants & Deals</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Active Corporate Innovation Challenges
            </h2>
          </div>
          <Link to="/challenges">
            <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Challenges
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredChallenges.map((challenge) => (
            <Card key={challenge.id} className="p-6 border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="warning" size="sm">{challenge.cat}</Badge>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                    Award: {challenge.rewardPackage?.title || challenge.reward}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900">{challenge.title}</h3>
                <p className="text-xs text-slate-500">Sponsored by: <strong className="text-slate-700">{challenge.company}</strong></p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{challenge.tagline || challenge.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="text-xs text-slate-400">{challenge.ideas} submissions</span>
                <Link to={`/submit?challenge=${challenge.id}`}>
                  <Button variant="primary" size="sm">
                    Pitch for this Challenge
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Consumer Ideas */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <Badge variant="brand" size="sm" className="mb-1">Trending Concepts</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Breakthrough Consumer Submissions
            </h2>
            <p className="text-sm text-slate-500">
              Top-voted ideas catching the attention of verified corporate product teams.
            </p>
          </div>
          <Link to="/explore">
            <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Concepts
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </section>

      {/* Corporate Scout Callout Banner */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>For Enterprise R&D & Product Scouts</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Stop guessing what customers need. Scout validated demand directly.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            IdeaBridge provides enterprise innovation teams with algorithmic trend clustering,
            quantitative customer validation, and direct pipelines to innovative consumers.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link to="/company">
              <Button
                variant="enterprise"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Access Enterprise Scout Suite
              </Button>
            </Link>
            <Link to="/company/auth">
              <Button
                variant="outline"
                size="md"
                className="bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:text-white"
              >
                Corporate Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
