export type MemberData = {
  age: number;
  country: string;
  occupation: string;
  bio: string;
  height: string;
  education: string;
  badgeType: 'PREMIUM' | 'BASIC';
  image: string;
  gender: 'Male' | 'Female';
};

export const allMembers: MemberData[] = [
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Female'
  },
  {
    age: 36,
    country: 'Canada',
    occupation: 'SOFTWARE ENGINEER',
    bio: 'Tech lead at an enterprise startup. Passionate about AI, snowboarding, and fine coffees. Looking to build a secure foundation with a partner who is intellectual, caring, and ready for long-term commitment.',
    height: '175–183 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Male'
  },
  {
    age: 29,
    country: 'United States',
    occupation: 'FINANCIAL ANALYST',
    bio: 'Dedicated finance professional who loves running, classical music, and international cuisines. Seeking a family-oriented partner who shares traditional values with a modern perspective.',
    height: '155–163 CM',
    education: "BACHELOR'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Female'
  },
  {
    age: 31,
    country: 'United Kingdom',
    occupation: 'DOCTOR',
    bio: 'Compassionate physician with a love for travel and cooking. Seeking a grounded partner who values family, integrity, and shared adventures across the globe.',
    height: '163–170 CM',
    education: "MEDICAL DEGREE",
    badgeType: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Male'
  },
  {
    age: 28,
    country: 'United Arab Emirates',
    occupation: 'MARKETING DIRECTOR',
    bio: 'Creative professional leading brand strategy for a luxury retail group. Values ambition, warmth, and authenticity. Looking for a partner who dreams big but stays grounded.',
    height: '168–175 CM',
    education: "BACHELOR'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Female'
  },
  {
    age: 38,
    country: 'Germany',
    occupation: 'INVESTMENT BANKER',
    bio: 'Senior banker with a passion for classical music, alpine hiking, and artisan coffee. Seeking a thoughtful, family-oriented partner for a meaningful long-term commitment.',
    height: '178–185 CM',
    education: "MBA",
    badgeType: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Male'
  },
  {
    age: 27,
    country: 'Singapore',
    occupation: 'UX DESIGNER',
    bio: 'Design thinker who crafts digital experiences by day and explores street food scenes by night. Seeking someone kind, curious, and ready to co-create a beautiful life together.',
    height: '158–165 CM',
    education: "BACHELOR'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Female'
  },
  {
    age: 33,
    country: 'France',
    occupation: 'ENTREPRENEUR',
    bio: 'Founded two successful ventures in sustainable fashion. Values depth, creativity, and honest connection. Looking for a partner who appreciates slow living and ambitious dreaming.',
    height: '172–180 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80',
    gender: 'Male'
  }
];
