export default [
    {
        company: 'Fuzzy Logic Studio',
        website: 'http://fuzzylogicstudio.io',
        logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHqB9qfO9QgOA/company-logo_200_200/0?e=2159024400&v=beta&t=owCnCDvEJtkgegF5lnTqMnemP5Kq2YpfFwxPXSSD_As',
        summary: 'AR/VR applications to solve real-world problems',
        employeeTitle: 'Senior Software Engineer',
        startDate: new Date(),
        endDate: new Date(),
        stack: [
            'Unity',
            '.NET',
            'Azure'
        ],
        roles: [
            {
                name: 'Senior Engineer',
                duration: (Date.now - new Date('2020/06/15')).toString()
            }
        ]
    },
    {
        company: 'Zappi',
        website: 'https://www.zappi.io/web/',
        logo: 'https://assets.zappi.io/website-api/wp-files/2018/08/02135602/ZappiStore_Logo.png',
        summary: 'The ad and innovation testing platform built by brands for brands.',
        employeeTitle: 'Fullstack Engineer',
        startDate: new Date('2018/10/30'),
        endDate: new Date('2020/06/09'),
        stack: [
            'D3.js',
            'React',
            'Rails',
            'Node',
            'AWS'
        ],
        roles: [
            {
                name: 'D3.js Visualization',
                duration: (Date.now - new Date('2020/06/15')).toString()
            },
            {
                name: 'Fullstack Engineer',
                duration: (new Date('2017/08/30') - new Date('2020/06/09'))
            }
        ]
    },
    {
        company: 'WhereIsMyTransport',
        website: 'https://www.whereismytransport.com/',
        logo: 'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1472652782/bhbvpzneyrt5hmpi1tzt.png',
        summary: 'Empowering people everywhere to get where they want to go.',
        employeeTitle: 'Fullstack Engineer',
        startDate: new Date('2013/11/04'),
        endDate: new Date('2017/08/25'),
        roles: [
            {
                name: 'Frontend Engineer',
                duration: (Date.now - new Date('2020/06/15')).toString(),
                stack: [
                    'React',
                    'Angular',
                    'Webpack',
                    'Azure'
                ]
            },
            {
                name: '.NET Engineer',
                duration: (Date.now - new Date('2020/06/15')).toString(),
                stack: [
                    'C#',
                    '.NET',
                    'Azure'
                ]
            },
            {
                name: 'iOS Engineer (Objective-C)',
                duration: (Date.now - new Date('2020/06/15')).toString(),
                stack: [
                    'Objective-C',
                    'iOS'
                ]
            }
        ]
    }
]
