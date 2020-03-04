const fs = require('fs');
personalData = (name, age) => {
    const datas = {
        name: name,
        age: age,
        address: 'Jombang',
        isMarried: false,
        interestInCoding: true,
        Province: 'East Java',
        Hobbies: [
            'Design',
            'Game',
            'Learn'
        ],
        skills: [
            {
                skillName: 'JavaScript',
                level: 'Advanced'
            },
            {
                skillName: 'ReactJS, AngularJS',
                level: 'Beginner'
            },
            {
                skillName: 'CSS, Bootstrap, MaterializeCSS, Animate',
                level: 'Advanced'
            },
            {
                skillName: 'SASS',
                level: 'Beginner'
            },
            {
                skillName: 'AnimeJS',
                level: 'Beginner'
            },
            {
                skillName: 'HTML5, SVG',
                level: 'Advanced'
            },
            {
                skillName: 'MySQL',
                level: 'Beginner'
            }
        ],
        listSchools: [
            {
                name: 'SDN Wangkalkepuh',
                year_in: 2006,
                year_out: 2012
            },
            {
                name: 'SMPN 1 Gudo',
                year_in: 2012,
                year_out: 2015
            },
            {
                name: 'SMKN Gudo',
                year_in: 2015,
                year_out: 2018
            },
            {
                name: 'STMIK ASIA Malang',
                year_in: 2018,
                year_out: null
            }
        ]
    }
    // fs.writeFileSync("renderJSON.js", JSON.stringify(datas));
    // return JSON.stringify(datas)
}
console.log('Ferdian Ahmad Rozikin', 20);