import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Journey',
    description: "The journey of a thousand miles begins with a single step. Let's take that step together. We provide you with an encyclopedia of knowledge and tools to help you along the way.",
    image: '/zeit-guard/journey.svg'
  },
  {
    title: 'Task Management',
    description: "Yes, we know, yet another task manager 🙄. This is key to forming excellent habits and keeping track of your progress.",
    image: '/zeit-guard/task.svg'
  },
  {
    title: 'Focus Room',
    description: "The focus room is a place where you can concentrate on your work without any distractions. It's a great way to get things done.",
    image: '/zeit-guard/focus.svg'
  },
  {
    title: 'ICU Emergency Self Help Kit',
    description: "In case of emergency, break glass. Please don't break the glass, but we have tips on how to get things done ASAP.",
    image: '/zeit-guard/icu.svg'
  },
  {
    title: 'ZeitPost',
    description: "Taking proactive steps now will contribute to a healthier, more fulfilling life in the years to come.",
    image: '/zeit-guard/post.svg'
  },
  {
    title: 'ZeitPost',
    image: '/zeit-guard/post.svg',
    description: "ZeitGuard focuses on a unique approach to procrastination. We are fighting a war against procrastination and bad habits. Join us as we explore the world."
  }
];
const Features = () => {

  return (
    <section id="features" className="container mx-auto scroll-mt-20">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Explore the features of ZeitGuard
        </h1>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/10 pt-0 border-none text-white transform transition-transform hover:scale-105"
            >
              <div 
                className="h-72 bg-cover rounded-t-lg"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;