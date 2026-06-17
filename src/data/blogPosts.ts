export type BlogPost = {
  id: number;
  title: string;
  category: 'dating' | 'relationship' | 'matchmaking';
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content?: string; // Optional field for full content
};

const blogCoffee = '/images/wuma_blog_coffee.png';

// Dummy markdown-like content for details page
const sampleContent = `
Finding someone who shares your values, lifestyle, and vision for the future isn't just about swiping right—it's about intentionality. Small talk has its place, but true connection is forged when we dare to dig a little deeper.

As matchmakers, we often advise our clients to steer the conversation toward topics that reveal character and compatibility. Here are seven conversation starters that do just that:

1. "What's a lesson you've learned recently that changed your perspective?"
This question immediately shifts the dynamic. It shows you're interested in their growth and mindset. People who are introspective usually love this question.

2. "If you could design your perfect Saturday from start to finish, what would it look like?"
Our weekends reflect our priorities. Are they active and adventurous, or slow and relaxed? This gives you a clear window into how your lifestyles might align.

3. "What's the best piece of advice you've ever received?"
The advice we hold onto says a lot about the values we prioritize. Whether it's a career lesson or relationship wisdom, it opens up a meaningful narrative.

4. "What's something you're passionate about that not many people know?"
Everyone has a hidden passion or a quirky hobby. Giving someone the floor to talk about something they genuinely love creates an instant energetic shift.

5. "How do you recharge when you're feeling completely drained?"
This is crucial for long-term compatibility. Do they need social interaction to recharge, or do they retreat into solitude? Understanding their emotional needs early on is a superpower.

6. "What's a goal you're working toward right now?"
Ambition and drive are attractive. This question allows them to talk about their future and what they're currently dedicating their energy to.

7. "What does a successful relationship look like to you?"
While this might seem direct for a first date, framing it as a philosophical question can lead to an incredible discussion about expectations, boundaries, and shared visions.

At WuMa, we believe every introduction is an opportunity. By moving beyond small talk, you're not just passing the time—you're actively discovering if this is someone you want to share your time with.
`;

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '7 Conversation Starters That Go Beyond Small Talk',
    category: 'dating',
    tag: 'DATING ADVICE',
    date: 'MAY 28, 2026',
    readTime: '5 MIN READ',
    excerpt: 'An intimate, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers.',
    image: blogCoffee,
    content: sampleContent,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 2,
    title: 'Navigating Cross-Cultural Relationships with Grace',
    category: 'relationship',
    tag: 'RELATIONSHIP TIPS',
    date: 'JUN 12, 2026',
    readTime: '6 MIN READ',
    excerpt: 'Learn how to bridge cultural gaps and celebrate traditions while building a solid foundation for your shared future.',
    image: blogCoffee,
    content: sampleContent,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 3,
    title: 'The Art of the Follow-Up After a Great First Date',
    category: 'dating',
    tag: 'DATING ADVICE',
    date: 'JUL 04, 2026',
    readTime: '4 MIN READ',
    excerpt: 'You had a wonderful time. Now what? Our matchmakers share the exact text templates to secure a second date.',
    image: blogCoffee,
    content: sampleContent,
    author: {
      name: 'David Wu',
      role: 'FOUNDER & CEO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 4,
    title: 'Why We Insist on Background Checks for All Members',
    category: 'matchmaking',
    tag: 'MATCHMAKING GUIDES',
    date: 'AUG 18, 2026',
    readTime: '7 MIN READ',
    excerpt: 'Safety and intentionality are our top priorities. Discover the rigorous vetting process behind every WuMa introduction.',
    image: blogCoffee,
    content: sampleContent,
    author: {
      name: 'Elena Rostova',
      role: 'HEAD OF VETTING',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 5,
    title: 'How to Know if You Are Truly Ready for Marriage',
    category: 'relationship',
    tag: 'RELATIONSHIP TIPS',
    date: 'SEP 05, 2026',
    readTime: '8 MIN READ',
    excerpt: 'Marriage is a massive commitment. These five key indicators can help you determine if you are emotionally prepared.',
    image: blogCoffee,
    content: sampleContent,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 6,
    title: 'Demystifying the Elite Matchmaking Process',
    category: 'matchmaking',
    tag: 'MATCHMAKING GUIDES',
    date: 'OCT 21, 2026',
    readTime: '5 MIN READ',
    excerpt: 'Ever wondered what happens behind the scenes? An exclusive look at how we hand-select and curate matches.',
    image: blogCoffee,
    content: sampleContent,
    author: {
      name: 'David Wu',
      role: 'FOUNDER & CEO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
    }
  }
];
