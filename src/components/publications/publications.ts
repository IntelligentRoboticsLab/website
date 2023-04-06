import { z } from 'zod';
import { Publication } from './publication';

const PubsByYear = z.array(z.object({
    year: z.string(), publications: z.array(Publication)
}));

export const publicationsByYear = PubsByYear.parse([
    {
        year: '2023',
        publications: [
            {
                title: 'Neural Factorization of Shape and Reflectance of a football Under an Unknown Illumination',
                authors: [
                    'Xavier Monté'
                ],
                date: '2023-02-03',
                year: '2023',
                type: 'misc',
                tags: ['BSc', 'NERF'],
                id: 'monte2022',
                file: 'https://staff.fnwi.uva.nl/a.visser/education/bachelorAI/Monte_NERF_of_a_football_under_unknown_illumination.pdf',
            }
        ]
    },
    {
        year: '2022',
        publications: [
            {
                title: 'Dutch Nao Team - Technical Report',
                authors: [
                    'Lex Bolt',
                    'Fyor Klein Gunnewiek',
                    'Hidde Lekanne gezegd Deprez',
                    'Lasse van Iterson',
                    'Derck Prinzhorn'
                ],
                date: '2022-12-26',
                year: '2022',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'Bolt2022',
                file: '/publications/2022/Bolt2022.pdf'
            },
            {
                title: 'Team Qualification Document for RoboCup 2022 Bangkok, Thailand',
                authors: [
                    'Wike Duivenvoorden',
                    'Hidde Lekanne gezegd Deprez',
                    'Thomas Wiggers',
                    'Jakob Kaizer',
                    'Rogier van der Weerd',
                    'Pim Heeman',
                    'Arnoud Visser'
                ],
                date: '2022-02-14',
                year: '2022',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'Duivenvoorden2022',
                file: '/publications/2022/Duivenvoorden2022.pdf'
            },
            {
                title: 'Dutch Nao Team - Technical Report',
                authors: [
                    'Jakob Kaiser',
                    'Hidde Lekanne gezegd Deprez',
                    'Wike Duivenvoorden',
                    'Pim Heeman',
                    'Rogier van der Weerd',
                    'Thomas Wiggers'
                ],
                date: '2022-01-16',
                year: '2022',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'Kaiser2021',
                file: '/publications/2022/Kaiser2021.pdf'
            }
        ]
    },
    {
        year: '2021',
        publications: [
            {
                title: 'Dutch Nao Team - Technical Report',
                authors: [
                    'Pim Heeman',
                    'Thomas Wiggers',
                    'Hidde Lekanne gezegd Deprez',
                    'Wouter Zwerink'
                ],
                date: '2021-01-01',
                year: '2021',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'Heeman2021',
                file: '/publications/2021/Heeman2021.pdf'
            },
            {
                title: 'Project AI: Real-time object detection and avoidance for autonomous Nao Robots performing in the Standard Platform League',
                authors: ['Rogier van der Weerd'],
                date: '2021-07-13',
                year: '2021',
                type: 'techreport',
                tags: ['Msc', 'Object-Detection', 'YOLO'],
                id: 'Weerd2021',
                file: '/publications/2021/Weerd2021.pdf'
            }
        ]
    },
    {
        year: '2020',
        publications: [
            {
                title: 'Dutch Nao Team - Technical Report',
                authors: [
                    'Thomas Wiggers',
                    'Douwe van der Wal',
                    'Hidde Lekanne gezegd Deprez',
                    'Wouter Zwerink',
                    'Pieter Kronemeijer'
                ],
                date: '2020-01-15',
                year: '2020',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'Wiggers2020',
                file: '/publications/2020/Wiggers2020.pdf'
            },
            {
                title: 'Team Qualification Document for RoboCup 2020 Bordeaux, France',
                authors: [
                    'Hidde Lekanne gezegd Deprez',
                    'Pieter Kronemeijer',
                    'Caitlin Lagrand',
                    'Thomas Wiggers',
                    'Douwe van der Wal',
                    'Quinten Coltof',
                    'Wouter Zwerink',
                    'and Arnoud Visser'
                ],
                date: '2020-01-22',
                year: '2020',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'gezegdDeprez2020',
                file: '/publications/2020/gezegdDeprez2020.pdf'
            },
            {
                title: 'Enhancing simulation images with GANs',
                authors: ['Hidde Lekanne gezegd Deprez'],
                date: '2020-07-03',
                year: '2020',
                type: 'misc',
                tags: ['BSc', 'GAN', 'Simulation'],
                id: 'gezegdDeprez2020b',
                file: '/publications/2020/gezegdDeprez2020b.pdf'
            }
        ]
    },
    {
        year: '2019',
        publications: [
            {
                title: 'Team Qualification Document for RoboCup 2019, Sydney, Australia',
                authors: [
                    'Pieter Kronemeijer',
                    'Caitlin Lagrand',
                    'Sébastien Negrijn',
                    'Michiel van der Meer',
                    'Douwe van der Wal',
                    'Jier Nzuanzu',
                    'Rob Hesselink',
                    'Wouter Zwerink',
                    'Akash Raj Komarlu Narendra Gupta',
                    'Arnoud Visser'
                ],
                date: '2019-01-15',
                year: '2019',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'kronemeijerqualification2019',
                file: '/publications/2019/kronemeijerqualification2019.pdf'
            }
        ]
    },
    {
        year: '2018',
        publications: [
            {
                title: 'Team Qualification Document for RoboCup 2018, Montreal, Canada',
                authors: [
                    'Caitlin Lagrand',
                    'Sébastien Negrijn',
                    'Michiel van der Meer',
                    'Douwe van der Wal',
                    'Linda Petrini',
                    'Hidde Lekanne Deprez',
                    'Pieter Kronemeijer',
                    'Santhosh Kumar Rajamanickam',
                    'Jier Nzuanzu',
                    'Lukas Jelinek',
                    'Arnoud Visser'
                ],
                date: '2018-01-31',
                year: '2018',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'Lagrand2018',
                file: '/publications/2018/Lagrand2018.pdf'
            },
            {
                title: 'Dutch Nao Team - Technical Report',
                authors: [
                    'Hidde Lekanne gezegd Deprez',
                    'Douwe van der Wal',
                    'Pieter Kronemeijer',
                    'Michiel van der Meer',
                    'Linda Petrini',
                    'Thomas Groot',
                    'Jier Nzuanzu',
                    'Caitlin Lagrand'
                ],
                date: '2018-12-31',
                year: '2018',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'LekannegezegdDeprez2018',
                file: '/publications/2018/LekannegezegdDeprez2018.pdf'
            },
            {
                title: 'Making a robot stop a penalty - Using Q Learning and Transfer Learning',
                authors: ['Ruben van Heusden'],
                date: '2018-06-02',
                year: '2018',
                type: 'misc',
                tags: ['BSc', 'RL', 'Keeper'],
                id: 'vanHeusden2018',
                file: '/publications/2018/vanHeusden2018.pdf'
            }
        ]
    },
    {
        year: '2017',
        publications: [
            {
                title: 'Learning a Robot to Score a Penalty - Minimal Reward Reinforcement Learning',
                authors: ['Caitlin G. Lagrand'],
                date: '2017-07-02',
                year: '2017',
                type: 'misc',
                tags: ['BSc', 'RL'],
                id: 'Lagrand2017Learning',
                file: '/publications/2017/Lagrand2017Learning.pdf'
            },
            {
                title: 'Team Description Paper for RoboCup 2017, Nagoya, Japan',
                authors: [
                    'Caitlin Lagrand',
                    'Sébastien Negrijn',
                    'Patrick de Kok',
                    'Michiel van der Meer',
                    'Douwe van der Wal',
                    'Pieter Kronemeijer',
                    'Ozzy Ulger',
                    'Arnoud Visser'
                ],
                date: '2017-05-03',
                year: '2017',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'LagrandDescription2017',
                file: '/publications/2017/LagrandDescription2017.pdf'
            },
            {
                title: 'Detecting a checkered black and white football',
                authors: [
                    'Caitlin Lagrand',
                    'Douwe van der Wal',
                    'Pieter Kronemeijer'
                ],
                date: '2017-02-06',
                year: '2017',
                type: 'techreport',
                tags: ['Object-Recognition'],
                id: 'Lagrandball2017',
                file: '/publications/2017/Lagrandball2017.pdf'
            },
            {
                title: 'Exploiting Symmetries to Relocalise in RoboCup Soccer',
                authors: ['Sébastien Negrijn'],
                date: '2017-12-19',
                year: '2017',
                type: 'mastersthesis',
                tags: ['MSc', 'Localization'],
                id: 'negrijn_thesis',
                file: '/publications/2017/negrijn_thesis.pdf'
            },
            {
                title: 'Dutch Nao Team - Technical Report',
                authors: [
                    'Douwe van der Wal',
                    'Pieter Kronemeijer',
                    'Caitlin Lagrand'
                ],
                date: '2017-12-31',
                year: '2017',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'vanderWal2017',
                file: '/publications/2017/vanderWal2017.pdf'
            }
        ]
    },
    {
        year: '2016',
        publications: [
            {
                title: 'Autonomous robot soccer matches',
                authors: [
                    'Caitlin Lagrand',
                    'Patrick de Kok',
                    'Sebastien Negrijn',
                    'Michiel van der Meer',
                    'Arnoud Visser'
                ],
                date: '2016-11-11',
                year: '2016',
                type: 'inproceedings',
                tags: ['Technical-Report'],
                id: 'lagrand2016',
                file: '/publications/2016/lagrand2016.pdf'
            },
            {
                title: 'The Roasted Tomato Challenge for a Humanoid Robot',
                authors: ['Caitlin Lagrand', 'Michiel van der Meer', 'Arnoud Visser'],
                date: '2016-05-04',
                year: '2016',
                type: 'inproceedings',
                tags: ['Technical-Report', 'Object-Recognition'],
                id: 'lagrand2016icarsc',
                file: '/publications/2016/lagrand2016icarsc.pdf'
            },
            {
                title: 'Towards the Humanoid Robot Butler',
                authors: ['Caitlin Lagrand', 'Michiel van der Meer'],
                date: '2016-01-01',
                year: '2016',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'lagrand2016towards',
                file: '/publications/2016/lagrand2016towards.pdf'
            },
            {
                title: 'Team Qualification Document for RoboCup 2017, Nagoya, Japan',
                authors: [
                    'Caitlin Lagrand',
                    'Sébastien Negrijn',
                    'Patrick de Kok',
                    'Michiel van der Meer',
                    'Douwe van der Wal',
                    'Pieter Kronemeijer',
                    'Arnoud Visser'
                ],
                date: '2016-11-30',
                year: '2016',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'lagrandqualification2017',
                file: '/publications/2016/lagrandqualification2017.pdf'
            },
            {
                title: 'Dutch Nao Team - Technical Report',
                authors: [
                    'Caitlin Lagrand',
                    'Michiel van der Meer',
                    'Jonathan Gerbscheid',
                    'Thomas Groot',
                    'Sebastien Negrijn',
                    'Patrick de Kok'
                ],
                date: '2016-10-14',
                year: '2016',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'lagrandtech2016',
                file: '/publications/2016/lagrandtech2016.pdf'
            }
        ]
    },
    {
        year: '2015',
        publications: [
            {
                title: 'Team Qualification Document for RoboCup 2016 – Leipzig, Germany',
                authors: [
                    'Patrick de Kok',
                    'Sébastien Negrijn',
                    'Mustafa Karaalioğlu',
                    'Caitlin Lagrand',
                    'Michiel van der Meer',
                    'Jonathan Gerbscheid',
                    'Thomas Groot',
                    'Arnoud Visser'
                ],
                date: '2015-01-01',
                year: '2015',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'dnt2016tqd',
                file: '/publications/2015/dnt2016tqd.pdf'
            }
        ]
    },
    {
        year: '2014',
        publications: [
            {
                title: 'Horn And Whistle Recognition Techniques For NAO Robots',
                authors: ['Niels W. Backer'],
                date: '2014-06-01',
                year: '2014',
                type: 'misc',
                tags: ['Whistle-Detection'],
                id: 'backer2014horn',
                file: '/publications/2014/backer2014horn.pdf'
            },
            {
                title: 'Learning to recognize horn and whistle sounds for humanoid robots',
                authors: ['Niels Backer', 'Arnoud Visser'],
                date: '2014-11-07',
                year: '2014',
                type: 'inproceedings',
                tags: ['Whistle-Detection'],
                id: 'backer2014learning',
                file: '/publications/2014/backer2014learning.pdf'
            },
            {
                title: 'Team Description for RoboCup 2014 – João Pessoa, Brasil',
                authors: [
                    'Patrick de Kok',
                    'Duncan ten Velthuis',
                    'Niels Backer',
                    'Jasper van Eck',
                    'Fabian Voorter',
                    'Arnoud Visser',
                    'Jijju Thomas',
                    'Gabriel Delgado Lopes',
                    'Gabriëlle Ras',
                    'Nico Roos'
                ],
                date: '2014-06-06',
                year: '2014',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'dnt2014tdp',
                file: '/publications/2014/dnt2014tdp.pdf'
            },
            {
                title: 'Cognitive Image Processing for Humanoid Soccer in Dynamic Environments',
                authors: ['Gabriëlle E.H. Ras'],
                date: '2014-01-01',
                year: '2014',
                type: 'misc',
                tags: ['Technical-Report'],
                id: 'ras2014cognitive',
                file: '/publications/2014/ras2014cognitive.pdf'
            },
            {
                title: 'Nao detection with a cascade of boosted weak classifier based on Ħaar-like features',
                authors: ['Duncan ten Velthuis'],
                date: '2014-01-01',
                year: '2014',
                type: 'misc',
                tags: ['Object-Recognition'],
                id: 'tenvelthuis2014nao',
                file: '/publications/2014/tenvelthuis2014nao.pdf'
            },
            {
                title: 'A coaching robot in the Standard Platform League',
                authors: ['Fabian Voorter'],
                date: '2014-06-01',
                year: '2014',
                type: 'misc',
                tags: ['BSc', 'Strategy'],
                id: 'voorter2014coaching',
                file: '/publications/2014/voorter2014coaching.pdf'
            }
        ]
    },
    {
        year: '2013',
        publications: [
            {
                title: 'ViCTOriA: Visual Compass Ŧo Orientate Accurately',
                authors: ['Patrick de Kok', 'Georgios Methenitis', 'Sander Nugteren'],
                date: '2013-07-07',
                year: '2013',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'dekok2013victoria',
                file: '/publications/2013/dekok2013victoria.pdf'
            },
            {
                title: 'Visual Tracking of Humanoid Robots',
                authors: ['Nick de Wolf', 'Steve Nowee'],
                date: '2013-01-22',
                year: '2013',
                type: 'techreport',
                tags: ['BSc'],
                id: 'dewolf2013visual',
                file: '/publications/2013/dewolf2013visual.pdf'
            },
            {
                title: 'Team Description for RoboCup 2013 in Eindhoven, the Netherlands',
                authors: [
                    'Patrick de Kok',
                    'Nicolò Girardi',
                    'Amogh Gudi',
                    'Chiel Kooijman',
                    'Georgios Methenitis',
                    'Sébastien Negrijn',
                    'Nikolaas Steenbergen',
                    'Duncan ten Velthuis',
                    'Camiel Verschoor',
                    'Auke Wiggers',
                    'Arnoud Visser'
                ],
                date: '2013-05-25',
                year: '2013',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'dnt2013tdp',
                file: '/publications/2013/dnt2013tdp.pdf'
            },
            {
                title: 'Team Description for RoboCup 2014 in João Pessoa, Brasil',
                authors: [
                    'Patrick de Kok',
                    'Sébastien Negrijn',
                    'Eugenio Bargiacchi',
                    'Amogh Gudi',
                    'Chiel Kooijman',
                    'Ilse van der Linden',
                    'Georgios Methenitis',
                    'Duncan ten Velthuis',
                    'Camiel Verschoor',
                    'Auke Wiggers',
                    'Arnoud Visser'
                ],
                date: '2013-11-27',
                year: '2013',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'dnt2014tqd',
                file: '/publications/2013/dnt2014tqd.pdf'
            },
            {
                title: 'Automated Optimization of Walking Parameters for the NAO Humanoid Robot',
                authors: ['Nicolò Girardi', 'Chiel Kooijman', 'Auke J. Wiggers'],
                date: '2013-07-07',
                year: '2013',
                type: 'techreport',
                tags: ['Technical-Report', 'Motion'],
                id: 'girardi2013automated',
                file: '/publications/2013/girardi2013automated.pdf'
            },
            {
                title: 'Automated Optimization of Walking Parameters for the NAO Humanoid Robot',
                authors: [
                    'Nicolò Girardi',
                    'Chiel Kooijman',
                    'Auke Wiggers',
                    'Arnoud Visser'
                ],
                date: '2013-11-07',
                year: '2013',
                type: 'inproceedings',
                tags: ['Technical-Report', 'Motion'],
                id: 'girardi2013bnaic',
                file: '/publications/2013/girardi2013bnaic.pdf'
            },
            {
                title: 'Feature Detection and Localization for the RoboCup Soccer SPL',
                authors: [
                    'Amogh Gudi',
                    'Patrick de Kok',
                    'Georgios K. Methenitis',
                    'Nikolaas Steenbergen'
                ],
                date: '2013-01-01',
                year: '2013',
                type: 'techreport',
                tags: ['Technical-Report', 'Localization'],
                id: 'gudi2013feature',
                file: '/publications/2013/gudi2013feature.pdf'
            },
            {
                title: 'NAVIGATE – Nao Visual Gait and Trajectory Estimation',
                authors: [
                    'Chiel Kooijman',
                    'Steven Laan',
                    'Camiel R. Verschoor',
                    'Auke J. Wiggers'
                ],
                date: '2013-02-04',
                year: '2013',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'kooijman2013navigate',
                file: '/publications/2013/kooijman2013navigate.pdf'
            },
            {
                title: 'Orientation finding using a grid based visual compass',
                authors: [
                    'Georgios Methenitis',
                    'Patrick M. de Kok',
                    'Sander Nugteren',
                    'Arnoud Visser'
                ],
                date: '2013-11-07',
                year: '2013',
                type: 'inproceedings',
                tags: ['Technical-Report'],
                id: 'methenitis2013orientation',
                file: '/publications/2013/methenitis2013orientation.pdf'
            },
            {
                title: 'Intelligent Robotics Lab',
                authors: ['Camiel Verschoor', 'Patrick de Kok', 'Arnoud Visser'],
                date: '2013-06-13',
                year: '2013',
                type: 'techreport',
                tags: ['Management', 'Technical-Report'],
                id: 'verschoor2013irl',
                file: '/publications/2013/verschoor2013irl.pdf'
            },
            {
                title: 'Discovering reoccurring motifs to predict opponent behavior',
                authors: ['Auke Wiggers', 'Arnoud Visser'],
                date: '2013-11-27',
                year: '2013',
                type: 'inproceedings',
                tags: ['Technical-Report'],
                id: 'wiggers2013discovering',
                file: '/publications/2013/wiggers2013discovering.pdf'
            },
            {
                title: 'Discovering reoccurring motifs to predict opponent behavior',
                authors: ['Auke Wiggers', 'Arnoud Visser'],
                date: '2013-11-25',
                year: '2013',
                type: 'inproceedings',
                tags: ['Technical-Report'],
                id: 'wiggers2013discoveringb',
                file: '/publications/2013/wiggers2013discoveringb.pdf'
            }
        ]
    },
    {
        year: '2012',
        publications: [
            {
                title: 'A Dynamic Kick for the Nao Robot',
                authors: ['Inge Becht', 'Maarten de Jonge', 'Richard Pronk'],
                date: '2012-07-26',
                year: '2012',
                type: 'techreport',
                tags: ['Technical-Report', 'Stability', 'Kick', 'Kinematics'],
                id: 'becht2012dynamic',
                file: '/publications/2012/becht2012dynamic.pdf'
            },
            {
                title: 'Dutch Nao Team – Explanatory paper about the educational value of Robotic Programming',
                authors: [
                    'Inge Becht',
                    'Maarten de Jonge',
                    'Anna Keune',
                    'Sander Nugteren',
                    'Camiel Verschoor',
                    'Duncan ten Velthuis'
                ],
                date: '2012-01-01',
                year: '2012',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'becht2012explanatory',
                file: '/publications/2012/becht2012explanatory.pdf'
            },
            {
                title: 'Dutch Nao Team – Team Description for RoboCup 2012',
                authors: [
                    'Camiel Verschoor',
                    'Duncan ten Velthuis',
                    'Auke Wiggers',
                    'Michael Cabot',
                    'Anna Keune',
                    'Sander Nugteren',
                    'Hendrik van Egmond',
                    'Hessel van der Molen',
                    'Richard Rozeboom',
                    'Inge Becht',
                    'Maarten de Jonge',
                    'Richard Pronk',
                    'Chiel Kooijman',
                    'Arnoud Visser'
                ],
                date: '2012-06-01',
                year: '2012',
                type: 'inproceedings',
                tags: ['Technical-Report'],
                id: 'dnt2012tdp',
                file: '/publications/2012/dnt2012tdp.pdf'
            },
            {
                title: 'Dutch Nao Team – Team Description for RoboCup 2012 – Mexico City, Mexico',
                authors: [
                    'Duncan ten Velthuis',
                    'Camiel Verschoor',
                    'Auke Wiggers',
                    'Michael Cabot',
                    'Anna Keune',
                    'Sander Nugteren',
                    'Hendrik van Egmond',
                    'Tim van Rossum',
                    'Hessel van der Molen',
                    'Richard Rozeboom',
                    'Inge Becht',
                    'Maarten de Jonge',
                    'Richard Pronk',
                    'Chiel Kooijman',
                    'Roman Slaap',
                    'Arnoud Visser'
                ],
                date: '2012-01-11',
                year: '2012',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'dnt2012tqd',
                file: '/publications/2012/dnt2012tqd.pdf'
            },
            {
                title: 'Dutch Nao Team – Team Description for RoboCup 2013 – Eindhoven, the Netherlands',
                authors: [
                    'Duncan ten Velthuis',
                    'Camiel Verschoor',
                    'Auke Wiggers',
                    'Hessel van der Molen',
                    'Tijmen Blankenvoort',
                    'Michael Cabot',
                    'Anna Keune',
                    'Sander Nugteren',
                    'Hendrik van Egmond',
                    'Richard Rozeboom',
                    'Inge Becht',
                    'Maarten de Jonge',
                    'Richard Pronk',
                    'Chiel Kooijman',
                    'Roman Slaap',
                    'Arnoud Visser'
                ],
                date: '2012-11-08',
                year: '2012',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'dnt2013tqd',
                file: '/publications/2012/dnt2013tqd.pdf'
            },
            {
                title: 'Getting a kick out of humanoid robotics: Using reinforcement learning to shape a soccer kick',
                authors: ['Christiaan Meijer'],
                date: '2012-07-01',
                year: '2012',
                type: 'mastersthesis',
                tags: ['MSc', 'Kick', 'RL'],
                id: 'meijer2012getting',
                file: '/publications/2012/meijer2012getting.pdf'
            },
            {
                title: 'Nao Recognition and coordination',
                authors: ['Sander Nugteren'],
                date: '2012-01-01',
                year: '2012',
                type: 'techreport',
                tags: ['Technical-Report', 'Object-Recognition'],
                id: 'nugteren2012nao',
                file: '/publications/2012/nugteren2012nao.pdf'
            },
            {
                title: 'Validation of the dynamics of an humanoid robot in USARSim',
                authors: ['Sander van Noort'],
                date: '2012-06-01',
                year: '2012',
                type: 'mastersthesis',
                tags: ['MSc', 'Simulation'],
                id: 'vannoort2012msc',
                file: '/publications/2012/vannoort2012msc.pdf'
            },
            {
                title: 'Validation of the dynamics of an humanoid robot in USARSim',
                authors: ['Sander van Noort', 'Arnoud Visser'],
                date: '2012-01-01',
                year: '2012',
                type: 'inproceedings',
                tags: ['Technical-Report', 'Simulation'],
                id: 'vannoort2012validation',
                file: '/publications/2012/vannoort2012validation.pdf'
            },
            {
                title: 'Recognizing Attack Patterns: Clustering of Optical Flow Vectors in RoboCup Soccer',
                authors: ['Auke J. Wiggers'],
                date: '2012-06-01',
                year: '2012',
                type: 'misc',
                tags: ['BSc'],
                id: 'wiggers2012recognizing',
                file: '/publications/2012/wiggers2012recognizing.pdf'
            }
        ]
    },
    {
        year: '2011',
        publications: [
            {
                title: 'Dutch Nao Team – Team Description for RoboCup 2011',
                authors: [
                    'Duncan ten Velthuis',
                    'Camiel Verschoor',
                    'Auke Wiggers',
                    'Sharon Gieske',
                    'Anna Keune',
                    'Sander Nugteren',
                    'Michael Cabot',
                    'Eszter Fodor',
                    'Maurits van Bellen',
                    'Timothy Dingeman',
                    'Tim van Rossum',
                    'Steven Laan',
                    'Arnoud Visser'
                ],
                date: '2011-07-01',
                year: '2011',
                type: 'inproceedings',
                tags: ['Technical-Report', 'Simulation', 'Object-Recognition'],
                id: 'dnt2011tdp',
                file: '/publications/2011/dnt2011tdp.pdf'
            },
            {
                title: 'Zone Blocking',
                authors: [
                    'Maurits van Bellen',
                    'Robert Iepsma',
                    'Merel de Groot',
                    'Arjen Swellengrebel'
                ],
                date: '2011-06-01',
                year: '2011',
                type: 'techreport',
                tags: ['Behavior'],
                id: 'vanbellen2011zone',
                file: '/publications/2011/vanbellen2011zone.pdf'
            },
            {
                title: 'Self-Localization in the RoboCup Soccer Standard Platform League with the use of a Dynamic Tree',
                authors: ['Hessel van der Molen'],
                date: '2011-06-01',
                year: '2011',
                type: 'misc',
                tags: ['Localization'],
                id: 'vandermolen2011selflocalization',
                file: '/publications/2011/vandermolen2011selflocalization.pdf'
            },
            {
                title: 'Technical Report 2011',
                authors: [
                    'Camiel Verschoor',
                    'Auke Wiggers',
                    'Duncan ten Velthuis',
                    'Anna Keune',
                    'Michael Cabot',
                    'Sander Nugteren',
                    'Erik van Egmond',
                    'Hessel van der Molen',
                    'Robert Iepsma',
                    'Maurits van Bellen',
                    'Merel de Groot',
                    'Eszter Fodor',
                    'Richard Rozeboom',
                    'Arnoud Visser'
                ],
                date: '2011-01-01',
                year: '2011',
                type: 'techreport',
                tags: ['Technical-Report'],
                id: 'verschoor2011tr',
                file: '/publications/2011/verschoor2011tr.pdf'
            },
            {
                title: 'Dutch Nao Team – Code Release 2011',
                authors: [
                    'Camiel Verschoor',
                    'Auke Wiggers',
                    'Duncan ten Velthuis',
                    'Anna Keune',
                    'Michael Cabot',
                    'Sander Nugteren',
                    'Erik van Egmond',
                    'Hessel van der Molen',
                    'Robert Iepsma',
                    'Maurits van Bellen',
                    'Merel de Groot',
                    'Eszter Fodor',
                    'Richard Rozeboom',
                    'Arnoud Visser'
                ],
                date: '2011-10-01',
                year: '2011',
                type: 'misc',
                tags: ['Code'],
                id: 'verschoor2011trb',
                file: '/publications/2011/verschoor2011trb.pdf'
            },
            {
                title: 'An Experimental Comparison of Mapping Methods, the Gutmann dataset',
                authors: ['Arnoud Visser', 'David de Bos', 'Hessel van der Molen'],
                date: '2011-01-01',
                year: '2011',
                type: 'inproceedings',
                tags: ['Technical-Report', 'Localization', 'SLAM'],
                id: 'visser2011experimental',
                file: '/publications/2011/visser2011experimental.pdf'
            }
        ]
    },
    {
        year: '2010',
        publications: [
            {
                title: 'Finding a goal at the other side of the field',
                authors: ['Maurits van Bellen', 'Robert Iepsma'],
                date: '2010-05-01',
                year: '2010',
                type: 'techreport',
                tags: ['Perception'],
                id: 'vanbellen2010finding',
                file: '/publications/2010/vanbellen2010finding.pdf'
            },
            {
                title: 'Emotion Expression of an Affective State Space; a humanoid robot displaying a dynamic emotional state during a soccer game',
                authors: [
                    'Alexander van der Mey',
                    'Frank Smit',
                    'Kees-Jan Droog',
                    'Arnoud Visser'
                ],
                date: '2010-11-01',
                year: '2010',
                type: 'inproceedings',
                tags: ['Technical-Report'],
                id: 'vandermey2010emotion',
                file: '/publications/2010/vandermey2010emotion.pdf'
            },
            {
                title: 'Dutch Nao Team – Team Description Paper – Standard Platform League – German Open 2010',
                authors: [
                    'Arnoud Visser',
                    'Robert Iepsma',
                    'Maurits van Bellen',
                    'Ravi Kumar Gupta',
                    'Bardia Khalesi'
                ],
                date: '2010-01-30',
                year: '2010',
                type: 'misc',
                tags: ['Technical-Report'],
                id: 'visser2010dnt',
                file: '/publications/2010/visser2010dnt.pdf'
            }
        ]
    },
    {
        year: '2009',
        publications: [
            {
                title: 'Learning by demonstration using physical manipulation of a robot model',
                authors: ['Rory Breuk'],
                date: '2009-01-01',
                year: '2009',
                type: 'misc',
                tags: ['AIBO', 'BSc'],
                id: 'breuk2009learning',
                file: '/publications/2009/breuk2009learning.pdf'
            },
            {
                title: 'Kicking a street hockey ball',
                authors: ['Bardia Khalesi', 'Ravi Kumar Gupta'],
                date: '2009-12-01',
                year: '2009',
                type: 'techreport',
                tags: ['AIBO', 'Technical-Report'],
                id: 'khalesi2009kicking',
                file: '/publications/2009/khalesi2009kicking.pdf'
            },
            {
                title: 'An appearance-based visual compass for mobile robots',
                authors: ['Jürgen Sturm', 'Arnoud Visser'],
                date: '2009-01-01',
                year: '2009',
                type: 'article',
                tags: ['AIBO', 'Paper'],
                id: 'sturm2009appearance',
                file: '/publications/2009/sturm2009appearance.pdf'
            }
        ]
    },
    {
        year: '2008',
        publications: [
            {
                title: 'A Hybrid Algorithm for Tracking and Following People using a Robotic Dog',
                authors: ['Martijn Liem', 'Arnoud Visser', 'Frans Groen'],
                date: '2008-01-01',
                year: '2008',
                type: 'inproceedings',
                tags: ['AIBO', 'Technical-Report'],
                id: 'liem2008hybrid',
                file: '/publications/2008/liem2008hybrid.pdf'
            },
            {
                title: 'Constructing A Hybrid Algorithm for Tracking and Following People using a Robotic Dog',
                authors: ['Martijn Liem'],
                date: '2008-01-01',
                year: '2008',
                type: 'mastersthesis',
                tags: ['AIBO', 'MSc'],
                id: 'liem2009constructing',
                file: '/publications/2008/liem2009constructing.pdf'
            }
        ]
    },
    {
        year: '2007',
        publications: [
            {
                title: 'A Dutch Trick: the aiBo Blindfold Challenge',
                authors: ['David Knibbe'],
                date: '2007-01-01',
                year: '2007',
                type: 'mastersthesis',
                tags: ['AIBO', 'MSc'],
                id: 'knibbe2007dutch',
                file: '/publications/2007/knibbe2007dutch.pdf'
            },
            {
                title: 'Panoramic Localization in the 4-Legged League: Removing the dependence on artificial landmarks',
                authors: ['Jürgen Sturm', 'Paul van Rossum', 'Arnoud Visser'],
                date: '2007-01-01',
                year: '2007',
                type: 'inproceedings',
                tags: ['AIBO', 'Technical-Report'],
                id: 'sturm2007panoramic',
                file: '/publications/2007/sturm2007panoramic.pdf'
            }
        ]
    },
    {
        year: '2006',
        publications: [
            {
                title: 'An appearance-based visual compass for mobile robots',
                authors: ['Jürgen Sturm'],
                date: '2006-01-01',
                year: '2006',
                type: 'mastersthesis',
                tags: ['AIBO', 'MSc'],
                id: 'sturm2006appearance',
                file: '/publications/2006/sturm2006appearance.pdf'
            },
            {
                title: 'Aibo as an intelligent robot watchdog',
                authors: ['Bou Tsing Hau'],
                date: '2006-12-01',
                year: '2006',
                type: 'mastersthesis',
                tags: ['AIBO', 'MSc'],
                id: 'tsinghau2006aibo',
                file: '/publications/2006/tsinghau2006aibo.pdf'
            },
            {
                title: 'Autonomous Color Learning in an Artificial Environment',
                authors: [
                    'Dave A. van Soest',
                    'Mark de Greef',
                    'Jürgen Sturm',
                    'Arnoud Visser'
                ],
                date: '2006-10-01',
                year: '2006',
                type: 'inproceedings',
                tags: ['AIBO', 'Technical-Report'],
                id: 'vansoest2006autonomous',
                file: '/publications/2006/vansoest2006autonomous.pdf'
            },
            {
                title: 'Dutch AIBO Team at RoboCup 2006',
                authors: [
                    'Arnoud Visser',
                    'Paul van Rossum',
                    'Joost Westra',
                    'Jürgen Sturm',
                    'Dave A. van Soest',
                    'Mark de Greef'
                ],
                date: '2006-06-01',
                year: '2006',
                type: 'inproceedings',
                tags: ['AIBO', 'Technical-Report'],
                id: 'visser2006dat',
                file: '/publications/2006/visser2006dat.pdf'
            },
            {
                title: 'Dutch Aibo Team: Technical Report RoboCup 2006',
                authors: [
                    'Arnoud Visser',
                    'Jürgen Sturm',
                    'Paul van Rossum',
                    'Joost Westra',
                    'Thijmen Bink'
                ],
                date: '2006-12-01',
                year: '2006',
                type: 'techreport',
                tags: ['AIBO', 'Technical-Report'],
                id: 'visser2006dattr',
                file: '/publications/2006/visser2006dattr.pdf'
            },
            {
                title: 'Robot companion localization at home and in the office',
                authors: ['Arnoud Visser', 'Jürgen Sturm', 'Frans Groen'],
                date: '2006-10-01',
                year: '2006',
                type: 'inproceedings',
                tags: ['AIBO', 'Technical-Report'],
                id: 'visser2006robot',
                file: '/publications/2006/visser2006robot.pdf'
            }
        ]
    },
    {
        year: '2005',
        publications: [
            {
                title: 'A behavior-based vision system on a legged robot',
                authors: ['Floris Mantz'],
                date: '2005-01-01',
                year: '2005',
                type: 'mastersthesis',
                tags: ['AIBO', 'MSc'],
                id: 'mantz2005behavior',
                file: '/publications/2005/mantz2005behavior.pdf'
            },
            {
                title: 'The Dutch AIBO Team Report on RoboCup 2004',
                authors: [
                    'Stijn Oomes',
                    'Pieter Jonker',
                    'Mannes Poel',
                    'Arnoud Visser',
                    'Marco Wiering',
                    'Wouter Caarls',
                    'Stefan Leijnen',
                    'Silvain van Weers',
                    'Niek Wijngaards',
                    'Frank Dignum'
                ],
                date: '2005-01-01',
                year: '2005',
                type: 'techreport',
                tags: ['AIBO', 'Technical-Report'],
                id: 'oomes2005dattr',
                file: '/publications/2005/oomes2005dattr.pdf'
            },
            {
                title: 'Attention Steering in Behavior-Based Vision',
                authors: ['Bayu A. Slamet'],
                date: '2005-07-01',
                year: '2005',
                type: 'misc',
                tags: ['AIBO'],
                id: 'slamet2005attention',
                file: '/publications/2005/slamet2005attention.pdf'
            },
            {
                title: 'Purposeful perception by attention-steered robots',
                authors: ['Bayu Slamet', 'Arnoud Visser'],
                date: '2005-10-01',
                year: '2005',
                type: 'inproceedings',
                tags: ['AIBO'],
                id: 'slamet2005purposeful',
                file: '/publications/2005/slamet2005purposeful.pdf'
            },
            {
                title: 'Dutch Aibo Team: Technical Report RoboCup 2005',
                authors: ['Jürgen Sturm', 'Arnoud Visser', 'Niek Wijngaards'],
                date: '2005-10-01',
                year: '2005',
                type: 'techreport',
                tags: ['AIBO', 'Technical-Report'],
                id: 'sturm2005dattr',
                file: '/publications/2005/sturm2005dattr.pdf'
            },
            {
                title: 'Dutch AIBO Team at RoboCup 2005',
                authors: [
                    'Niek Wijngaards',
                    'Frank Dignum',
                    'Pieter Jonker',
                    'Theo de Ridder',
                    'Arnoud Visser',
                    'Stefan Leijnen',
                    'Jürgen Sturm',
                    'Silvain van Weers'
                ],
                date: '2005-01-01',
                year: '2005',
                type: 'techreport',
                tags: ['AIBO', 'Technical-Report'],
                id: 'wijngaards2005dat',
                file: '/publications/2005/wijngaards2005dat.pdf'
            }
        ]
    },
    {
        year: '2004',
        publications: [
            {
                title: 'AIBO Robot as a soccer and rescue game player',
                authors: [
                    'Dragos Datcu',
                    'M. Richert',
                    'Tijmen Roberti',
                    'Wieke de Vries',
                    'Leon J.M. Rothkrantz'
                ],
                date: '2004-01-01',
                year: '2004',
                type: 'inproceedings',
                tags: ['AIBO'],
                id: 'datcu2004aibo',
                file: '/publications/2004/datcu2004aibo.pdf'
            },
            {
                title: 'The Dutch AIBO Team 2004',
                authors: [
                    'Stijn Oomes',
                    'Pieter Jonker',
                    'Mannes Poel',
                    'Arnoud Visser',
                    'Marco Wiering'
                ],
                date: '2004-07-01',
                year: '2004',
                type: 'inproceedings',
                tags: ['AIBO'],
                id: 'oomes2004dat',
                file: '/publications/2004/oomes2004dat.pdf'
            },
            {
                title: 'Kleur invariantie voor de Robocup challenge – onderzoek naar een belichtings invariante methode voor object herkenning',
                authors: ['C.A.M. Pieterse'],
                date: '2004-06-01',
                year: '2004',
                type: 'misc',
                tags: ['AIBO'],
                id: 'pieterse2004kleur',
                file: '/publications/2004/pieterse2004kleur.pdf'
            }
        ]
    }
]);
