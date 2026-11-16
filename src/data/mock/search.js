// Fictional profiles for testing. The photos are AI-generated (public/profiles/), not real people.
const photos = (name, n) => Array.from({ length: n }, (_, i) => `/profiles/${name}-${i + 1}.webp`)

export default [
    {
        id: 0,
        name: 'Hana',
        age: 28,
        bio: 'Coffee first, then adventures. Usually with a film camera in my bag.',
        interests: 'Travel, coffee, good food, photography',
        quote: 'Collect moments, not things.',
        specs: ['height: 162cm', 'looking: long-term', 'physique: average', 'children: someday'],
        images: photos('hana', 2)
    },
    {
        id: 1,
        name: 'Amina',
        age: 30,
        bio: 'Sunset chaser and yoga regular. I laugh loudly and often.',
        interests: 'Fitness, music, nature, travel',
        quote: 'Good vibes and golden hours.',
        specs: ['height: 170cm', 'looking: long-term', 'physique: athletic', 'children: want'],
        images: photos('amina', 2)
    },
    {
        id: 2,
        name: 'Emma',
        age: 27,
        bio: 'Happiest in the ocean. Will drag you out for a sunrise surf.',
        interests: 'Surfing, travel, wellness, adventure',
        quote: 'Salt in the air, sand in my hair.',
        specs: ['height: 168cm', 'looking: not sure yet', 'physique: active', 'children: someday'],
        images: photos('emma', 2)
    },
    {
        id: 3,
        name: 'Lucía',
        age: 29,
        bio: 'Rooftops, tapas and a good glass of red. Teach me your favourite song.',
        interests: 'Travel, music, Spanish food, fitness',
        quote: 'La vida es mejor compartida.',
        specs: ['height: 165cm', 'looking: long-term', 'physique: average', 'children: want'],
        images: photos('lucia', 2)
    },
    {
        id: 4,
        name: 'Sophie',
        age: 26,
        bio: 'Weekend hiker, weekday bookworm. Recommend me a book and I will read it.',
        interests: 'Hiking, nature, books, yoga',
        quote: 'Not all who wander are lost.',
        specs: ['height: 160cm', 'looking: casual', 'physique: active', 'children: someday'],
        images: photos('sophie', 2)
    }
]
