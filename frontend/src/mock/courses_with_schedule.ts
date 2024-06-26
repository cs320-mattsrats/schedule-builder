// courses.ts
import { TAllCourses } from "@/types/all_courses";

// export type TAllCourses = {
//     id: string;
//     classNumber: string;
//     subject: string;
//     section: TCourseSchedule[];
// }

// export type TCourseSchedule = {
//     id: string; 
//     day: string[];
//     starttime: string;
//     endtime: string;
//     location: string;
//     instructor?: string;
//     lab?: TLab[];
// }

// export type TLab = {
//     id: string; 
//     day: string[];
//     starttime: string;
//     endtime: string;
//     location: string;
//     instructor?: string;
// }

export const mock_next_courses: TAllCourses[] = [
    {
        id: "1",
        classNumber: "110",
        subject: "CICS",
        title: "Foundations of Programmning",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed"],
                starttime: "04:00 PM",
                endtime: "05:15 PM",
                location: "GSMN0152",
                instructor: "Reilly",
                lab: [
                    {
                        id: "LAB01LL",
                        day: ["Fri"],
                        starttime: "10:10 AM",
                        endtime: "11:00 AM",
                        location: "Morr3 203"
                    }
                ]
            },
            {
                id: "LEC02",
                day: ["Tue", "Thu"],
                starttime: "11:30 AM",
                endtime: "12:45 AM",
                location: "FlintL201",
                instructor: "Reilly",
                lab: [
                {
                    id: "LAB02LL",
                    day: ["Fri"],
                    starttime: "09:05 AM",
                    endtime: "09:55 AM",
                    location: "CS 142"
                }
                ]
            },
            {
                id: "LEC03",
                day: ["Mon", "Wed"],
                starttime: "08:30 AM",
                endtime: "09:45 AM",
                location: "CS 142",
                instructor: "Parvini",
                lab: [
                {
                    id: "LAB03LL",
                    day: ["Fri"],
                    starttime: "02:30 PM",
                    endtime: "03:20 PM",
                    location: "Morr3 203"
                }
                ]
            },
            {
                id: "LEC04",
                day: ["Tue", "Thu"],
                starttime: "01:00 PM",
                endtime: "02:15 PM",
                location: "CS 142",
                instructor: "STAFF",
                lab: [
                    {
                        id: "LAB04LL",
                        day: ["Fri"],
                        starttime: "02:30 PM",
                        endtime: "03:20 PM",
                        location: "LederCA301"
                    }
                ]
            }
        ]
    },
    {
        id: "2",
        classNumber: "160",
        subject: 'CICS',
        title: "Object-Oriented Programming",
        section: [
            {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "08:30 AM",
            endtime: "09:45 AM",
            location: "HasbAd 20",
            instructor: "Davila",
            lab: [
                {
                id: "LAB01LL",
                day: ["Fri"],
                starttime: "08:00 AM",
                endtime: "08:50 AM",
                location: "EnginLb325"
                },
                {
                id: "LAB01LM",
                day: ["Fri"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "Marstn 220"
                },
                {
                id: "LAB01LN",
                day: ["Fri"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "EnginLb325"
                },
                {
                id: "LAB01LQ",
                day: ["Fri"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "EnginLb325"
                },
                {
                id: "LAB01LR",
                day: ["Fri"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "EnginLb323"
                }
            ]
            },
            {
            id: "LEC02",
            day: ["Tue", "Thu"],
            starttime: "05:30 PM",
            endtime: "06:45 PM",
            location: "GsmnAdd 64",
            instructor: "Reilly",
            lab: [
                {
                id: "LAB02LL",
                day: ["Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "EnginLb325"
                },
                {
                id: "LAB02LM",
                day: ["Fri"],
                starttime: "02:30 PM",
                endtime: "03:20 PM",
                location: "EnginLb305"
                },
                {
                id: "LAB02LN",
                day: ["Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "EnginLb325"
                },
                {
                id: "LAB02LQ",
                day: ["Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "Marstn 211"
                },
                {
                id: "LAB02LR",
                day: ["Fri"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "Marstn 211"
                }
            ]
            }
        ]
    },
    {
        id: "3",
        classNumber: "208",
        subject: 'CICS',
        title: "Defending Democracy in a Digital World",
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "HasbAd 126",
            instructor: "Zuckerman"
        }
        ]
    },
    {
        id: "4",
        classNumber: "210",
        subject: 'CICS',
        title: "Data Structures",
        section: [
            {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "05:30 PM",
            endtime: "06:45 PM",
            location: "Goes 20",
            instructor: "Golin",
            lab: [
                {
                id: "LAB01LL",
                day: ["Mon"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "LGRT0145"
                },
                {
                id: "LAB01LM",
                day: ["Mon"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "LGRT0145"
                },
                {
                id: "LAB01LN",
                day: ["Mon"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "LGRT0147"
                },
                {
                id: "LAB01LQ",
                day: ["Mon"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "LGRT0143"
                }
            ]
            },
            {
            id: "LEC02",
            day: ["Tue", "Thu"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "Goes 20",
            instructor: "Richards",
            lab: [
                {
                id: "LAB02LL",
                day: ["Mon"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "EnginLb325"
                },
                {
                id: "LAB02LM",
                day: ["Mon"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "EnginLb325"
                },
                {
                id: "LAB02LN",
                day: ["Mon"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "EnginLb325"
                },
                {
                id: "LAB02LQ",
                day: ["Mon"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "LGRT0143"
                }
            ]
            }
        ]
    },
    {
        id: "5",
        classNumber: "237",
        subject: 'CICS',
        title: "Introduction to Research in the Discipline",
        section: [
        {
            id: "LEC01",
            day: ["Tue"],
            starttime: "10:00 AM",
            endtime: "11:15 AM",
            location: "Hasbrck138",
            instructor: "Thota",
            lab: [
            {
                id: "LAB01LL",
                day: ["Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "MOR20222"
            }
            ]
        }
        ]
    },
    {
        id: "6",
        classNumber: "256",
        subject: 'CICS',
        title: "Make: A Hands-on Introduction to Physical Computing",
        section: [
            {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "LGRC A104A",
            instructor: "Wang",
            lab: [
                {
                id: "LAB01LL",
                day: ["Mon"],
                starttime: "10:10 AM",
                endtime: "12:10 PM",
                location: "LGRC A104A"
                }
            ]
            }
        ]
        },
        {
        id: "7",
        classNumber: "291T",
        subject: 'CICS',
        title: "Seminar - CICS Transfer Success",
        section: [
            {
            id: "SEM01",
            day: ["Thu"],
            starttime: "10:00 AM",
            endtime: "10:50 AM",
            location: "FlintL105",
            instructor: "Anderson"
            }
        ]
        },
        {
        id: "8",
        classNumber: "298A",
        subject: 'CICS',
        title: "Practicum - Leadership: Communicating Across Expertise",
        section: [
            {
            id: "PRA01",
            day: ["Fri"],
            starttime: "11:30 AM",
            endtime: "12:20 PM",
            location: "CS 140",
            instructor: "Anderson"
            },
            {
            id: "PRA02",
            day: ["Wed"],
            starttime: "11:30 AM",
            endtime: "12:20 PM",
            location: "CS 140",
            instructor: "Anderson"
            },
            {
            id: "PRA03",
            day: ["Fri"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "LGRT0147",
            instructor: "Anderson"
            }
        ]
    },
    {
        id: "9",
        classNumber: "305",
        subject: 'CICS',
        title: "Social Issues in Computing",
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "MOR1N349",
            instructor: "Mei"
        },
        {
            id: "LEC02",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "MOR1N349",
            instructor: "Mei"
        },
        {
            id: "LEC03",
            day: ["Tue", "Thu"],
            starttime: "10:00 AM",
            endtime: "11:15 AM",
            location: "LGRC A310",
            instructor: "Trim"
        },
        {
            id: "LEC04",
            day: ["Tue", "Thu"],
            starttime: "10:00 AM",
            endtime: "11:15 AM",
            location: "LGRC A310",
            instructor: "Trim"
        },
        {
            id: "LEC05",
            day: ["Mon", "Wed"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "LGRC A310",
            instructor: "Obara"
        },
        {
            id: "LEC06",
            day: ["Mon", "Wed"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "LGRC A310",
            instructor: "Obara"
        },
        {
            id: "LEC07",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "LGRC A310",
            instructor: "Obara"
        },
        {
            id: "LEC08",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "LGRC A310",
            instructor: "Obara"
        },
        {
            id: "LEC09",
            day: ["Tue", "Thu"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "LGRC A310",
            instructor: "Butler"
        },
        {
            id: "LEC10",
            day: ["Tue", "Thu"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "LGRC A310",
            instructor: "Butler"
        },
        {
            id: "LEC11",
            day: ["Tue", "Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "LGRC A310",
            instructor: "Mei"
        },
        {
            id: "LEC12",
            day: ["Tue", "Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "LGRC A310",
            instructor: "Mei"
        },
        {
            id: "LEC13",
            day: ["Tue", "Thu"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "LGRC A310",
            instructor: "Butler"
        },
        {
            id: "LEC14",
            day: ["Tue", "Thu"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "LGRC A310",
            instructor: "Butler"
        },
        {
            id: "LEC15",
            day: ["Mon", "Wed", "Fri"],
            starttime: "10:10 AM",
            endtime: "11:00 AM",
            location: "LGRC A310",
            instructor: "Sutcliffe"
        },
        {
            id: "LEC16",
            day: ["Mon", "Wed", "Fri"],
            starttime: "10:10 AM",
            endtime: "11:00 AM",
            location: "LGRC A310",
            instructor: "Sutcliffe"
        },
        {
            id: "LEC17",
            day: ["Mon", "Wed", "Fri"],
            starttime: "11:15 AM",
            endtime: "12:05 PM",
            location: "LGRC A310",
            instructor: "Gunther"
        },
        {
            id: "LEC18",
            day: ["Mon", "Wed", "Fri"],
            starttime: "11:15 AM",
            endtime: "12:05 PM",
            location: "LGRC A310",
            instructor: "Gunther"
        },
        {
            id: "LEC19",
            day: ["Mon", "Wed", "Fri"],
            starttime: "12:20 PM",
            endtime: "01:10 PM",
            location: "LGRC A310",
            instructor: "Gunther"
        },
        {
            id: "LEC20",
            day: ["Mon", "Wed", "Fri"],
            starttime: "12:20 PM",
            endtime: "01:10 PM",
            location: "LGRC A310",
            instructor: "Gunther"
        },
        {
            id: "LEC21",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "LGRC A310",
            instructor: "STAFF"
        },
        {
            id: "LEC22",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "LGRC A310",
            instructor: "STAFF"
        },
        {
            id: "LEC23",
            day: ["Mon", "Wed", "Fri"],
            starttime: "09:05 AM",
            endtime: "09:55 AM",
            location: "LGRC A310",
            instructor: "Sutcliffe"
        },
        {
            id: "LEC24",
            day: ["Mon", "Wed", "Fri"],
            starttime: "09:05 AM",
            endtime: "09:55 AM",
            location: "LGRC A310",
            instructor: "Sutcliffe"
        },
    ]  
    },
    {
        id: "10",
        subject: "COMPSCI",
        classNumber: "119",
        title: "Introduction to Programming",
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed", "Fri"],
            starttime: "01:25 PM",
            endtime: "02:15 PM",
            location: "Herter 227",
            instructor: "Poh"
        }
        ]
    },
    {
        id: "11",
        subject: "COMPSCI",
        classNumber: "198C",
        title: '	Practicum - Introduction to the C Programming Language',
        section: [
        {
            id: "PRA01",
            day: ["BY ARRANGEMENT"],
            starttime: "",
            endtime: "",
            location: "",
            instructor: "Chiu, Richards"
        }
        ]
    },
    {
        id: "12",
        subject: "COMPSCI",
        classNumber: "220",
        title: 'Programming Methodology',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "Thmpsn 104",
            instructor: "Minea",
            lab: [
            {
                id: "LAB01LL",
                day: ["Wed"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "Marstn 220"
            },
            {
                id: "LAB01LM",
                day: ["Wed"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "Marstn 220"
            },
            {
                id: "LAB01LN",
                day: ["Wed"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "Marstn 220"
            },
            {
                id: "LAB01LQ",
                day: ["Wed"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "LGRT0147"
            },
            {
                id: "LAB01LR",
                day: ["Wed"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "Marstn 220"
            },
            {
                id: "LAB01LS",
                day: ["Wed"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "EnginLb325"
            },
            {
                id: "LAB01LU",
                day: ["Wed"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "EnginLb325"
            },
            {
                id: "LAB01LV",
                day: ["Wed"],
                starttime: "02:30 PM",
                endtime: "03:20 PM",
                location: "LGRT0145"
            }
            ]
        }
        ]
    },
    {
        id: "13",
        subject: "COMPSCI",
        classNumber: "230",
        title: 'Computer Systems Principles',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "Morr2 131",
            instructor: "Chiu",
            lab: [
                {
                    id: "LAB01LL",
                    day: ["Fri"],
                    starttime: "09:05 AM",
                    endtime: "09:55 AM",
                    location: "SKIN0106"
                },
                {
                    id: "LAB01LM",
                    day: ["Fri"],
                    starttime: "09:05 AM",
                    endtime: "09:55 AM",
                    location: "Hasbrck136"
                },
                {
                    id: "LAB01LN",
                    day: ["Fri"],
                    starttime: "10:10 AM",
                    endtime: "11:00 AM",
                    location: "SKIN0106"
                },
                {
                    id: "LAB01LQ",
                    day: ["Fri"],
                    starttime: "11:15 AM",
                    endtime: "12:05 PM",
                    location: "SKIN0106"
                },
            ]
        },
        {
            id: "LEC02",
            day: ["Mon", "Wed"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "HasbAd 124",
            instructor: "Bovornkeeratiroj",
            lab: [
                {
                    id: "LAB02LL",
                    day: ["Fri"],
                    starttime: "12:20 PM",
                    endtime: "01:10 PM",
                    location: "SKIN0106"
                },
                {
                    id: "LAB02LM",
                    day: ["Fri"],
                    starttime: "01:25 PM",
                    endtime: "02:15 PM",
                    location: "SKIN0106"
                },
                {
                    id: "LAB02LN",
                    day: ["Fri"],
                    starttime: "02:30 PM",
                    endtime: "03:20 PM",
                    location: "SKIN0106"
                },
                {
                    id: "LAB02LQ",
                    day: ["Fri"],
                    starttime: "08:00 AM",
                    endtime: "08:50 AM",
                    location: "SKIN0106"
                }
            ]
        },
        ]
    },
    {
        id: "14",
        subject: "COMPSCI",
        classNumber: "240",
        title: 'Reasoning Under Uncertainty',
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "Goes 20",
            instructor: "Lan",
            lab: [
            {
                id: "DIS01AA",
                day: ["Fri"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "Marstn 220"
            },
            {
                id: "DIS01AB",
                day: ["Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "EnginLb305"
            },
            {
                id: "DIS01AC",
                day: ["Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "Marstn 220"
            },
            {
                id: "DIS01AD",
                day: ["Fri"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "Marstn 220"
            },
            {
                id: "DIS01AE",
                day: ["Fri"],
                starttime: "02:30 PM",
                endtime: "03:20 PM",
                location: "Marstn 220"
            }
            ]
        },
        {
            id: "LEC02",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "GsmnAdd 64",
            instructor: "Parvini",
            lab: [
            {
                id: "DIS02AA",
                day: ["Fri"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "LGRT0177"
            },
            {
                id: "DIS02AB",
                day: ["Fri"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "LGRT0177"
            },
            {
                id: "DIS02AC",
                day: ["Fri"],
                starttime: "08:00 AM",
                endtime: "08:50 AM",
                location: "LGRT0177"
            },
            {
                id: "DIS02AD",
                day: ["Fri"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "LGRT0177"
            },
            {
                id: "DIS02AE",
                day: ["Fri"],
                starttime: "02:30 PM",
                endtime: "03:20 PM",
                location: "LGRT0177"
            }
            ]
        }
        ]
    },
    {
        id: "15",
        subject: "COMPSCI",
        classNumber: "250",
        title: 'Introduction to Computation',
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed", "Fri"],
            starttime: "01:25 PM",
            endtime: "02:15 PM",
            location: "ELABII0119",
            instructor: "Barrington",
            lab: [
            {
                id: "DIS01AA",
                day: ["Wed"],
                starttime: "08:00 AM",
                endtime: "08:50 AM",
                location: "FlintL105"
            },
            {
                id: "DIS01AB",
                day: ["Wed"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "FlintL105"
            },
            {
                id: "DIS01AC",
                day: ["Wed"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "FlintL201"
            },
            {
                id: "DIS01AD",
                day: ["Wed"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "FlintL105"
            },
            {
                id: "DIS01AE",
                day: ["Wed"],
                starttime: "04:00 PM",
                endtime: "04:50 PM",
                location: "FlintL105"
            }
            ]
        },
        {
            id: "LEC02",
            day: ["Mon", "Wed", "Fri"],
            starttime: "10:10 AM",
            endtime: "11:00 AM",
            location: "Goes 20",
            instructor: "Golin",
            lab: [
            {
                id: "DIS02AA",
                day: ["Wed"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "FlintL105"
            },
            {
                id: "DIS02AB",
                day: ["Wed"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "FlintL105"
            },
            {
                id: "DIS02AC",
                day: ["Wed"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "FlintL105"
            },
            {
                id: "DIS02AD",
                day: ["Wed"],
                starttime: "02:30 PM",
                endtime: "03:20 PM",
                location: "FlintL105"
            }
            ]
        }
        ]
    },
    {
        id: "16",
        subject: "COMPSCI",
        classNumber: "311",
        title: 'Introduction to Algorithms',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "GsmnAdd 64",
            instructor: "Siegelmann",
            lab: [
            {
                id: "DIS01AA",
                day: ["Fri"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "AgEngin119"
            },
            {
                id: "DIS01AB",
                day: ["Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "FlintL201"
            },
            {
                id: "DIS01AC",
                day: ["Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "AgEngin119"
            }
            ]
        },
        {
            id: "LEC02",
            day: ["Mon", "Wed"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "GsmnAdd 64",
            instructor: "Parvini",
            lab: [
            {
                id: "DIS02AA",
                day: ["Fri"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "Hasbrck138"
            },
            {
                id: "DIS02AB",
                day: ["Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "EnginLb323"
            },
            {
                id: "DIS02AC",
                day: ["Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "AgEngin119"
            }
            ]
        }
        ]
    },
    {
        id: "17",
        subject: "COMPSCI",
        classNumber: "320",
        title: 'Introduction to Software Engineering',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "FlintL105",
            instructor: "Brun",
            lab: [
            {
                id: "DIS01AA",
                day: ["Wed"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "AgEngin119"
            }
            ]
        },
        {
            id: "LEC02",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "CS 142",
            instructor: "Davila",
            lab: [
            {
                id: "DIS02AA",
                day: ["Mon"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "Morr3 203"
            }
            ]
        },
        {
            id: "LEC03",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "FlintL201",
            instructor: "Anderson",
            lab: [
            {
                id: "DIS03AA",
                day: ["Wed"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "EnginLb323"
            }
            ]
        },
        {
            id: "LEC04",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "Hasbrck138",
            instructor: "Conboy",
            lab: [
            {
                id: "DIS04AA",
                day: ["Wed"],
                starttime: "02:30 PM",
                endtime: "03:20 PM",
                location: "Hasbrck138"
            }
            ]
        }
        ]
    },
    {
        id: "18",
        subject: "COMPSCI",
        classNumber: "325",
        title: 'Introduction to Human Computer Interaction',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "AgEngin119",
            instructor: "Karkar"
        }
        ]
    },
    {
        id: "19",
        subject: "COMPSCI",
        classNumber: "326",
        title: 'Web Programming',
        section: [
        {
            id: "LEC01",
            day: ["Tue"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "SC0W245",
            instructor: "Richards",
            lab: [
                {
                    id: "LAB99LL",
                    day: ["Fri"],
                    starttime: "12:20 PM",
                    endtime: "01:10 PM",
                    location: "On-Line"
                }
            ]
        },
        {
            id: "LEC02",
            day: ["Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "SC0W245",
            instructor: "Richards",
            lab: [
                {
                    id: "LAB99LL",
                    day: ["Fri"],
                    starttime: "12:20 PM",
                    endtime: "01:10 PM",
                    location: "On-Line"
                }
            ]
        },
        ]
    },
    {
        id: "20",
        subject: "COMPSCI",
        classNumber: "328",
        title: 'Mobile Health Sensing and Analytics',
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed", "Fri"],
            starttime: "01:25 PM",
            endtime: "02:15 PM",
            location: "LederCA301",
            instructor: "Ganesan"
        }
        ]
    },
    {
        id: "21",
        subject: "COMPSCI",
        classNumber: "335",
        title: 'Inside the Box: How Computers Work',
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "CS 142",
            instructor: "Weems"
        }
        ]
    },
    {
        id: "22",
        subject: "COMPSCI",
        classNumber: "345",
        title: 'Practice and Applications of Data Management',
        section: [
        {
            id: "LEC01",
            day: ["Mon"],
            starttime: "10:10 AM",
            endtime: "12:05 PM",
            location: "ILCS120",
            instructor: "Meliou"
        },
        {
            id: "LEC02",
            day: ["Wed"],
            starttime: "10:10 AM",
            endtime: "12:05 PM",
            location: "ILCS120",
            instructor: "Meliou"
        }
        ]
    },
    {
        id: "23",
        subject: "COMPSCI",
        classNumber: "360",
        title: 'Introduction to Computer and Network Security',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "10:00 AM",
            endtime: "11:15 AM",
            location: "LGRC A104A",
            instructor: "Ma"
        }
        ]
    },
    {
        id: "24",
        subject: "COMPSCI",
        classNumber: "363",
        title: 'Computer Crime Law',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "CS 140",
            instructor: "Cable"
        }
        ]
    },
    {
        id: "25",
        subject: "COMPSCI",
        classNumber: "377",
        title: 'Operating Systems',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "10:00 AM",
            endtime: "11:15 AM",
            location: "Thmpsn 102",
            instructor: "Bovornkeeratiroj",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Fri"],
                    starttime: "01:25 PM",
                    endtime: "02:15 PM",
                    location: "Thmpsn 102"
                }
            ]
        },
        ]
    },
    {
        id: "26",
        subject: "COMPSCI",
        classNumber: "383",
        title: 'Artificial Intelligence',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "SOM 137",
            instructor: "McNichols"
        }
        ]
    },
    {
        id: "27",
        subject: "COMPSCI",
        classNumber: "410",
        title: 'Compiler Techniques',
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "LederCA301",
            instructor: "Guan",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Fri"],
                    starttime: "04:00 PM",
                    endtime: "05:15 PM",
                    location: "LederCA301"
                }
            ]
        },
        ]
    },
    {
        id: "28",
        subject: "COMPSCI",
        classNumber: "420",
        title: 'Software Entrepreneurship',
        section: [
            {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "LGRC A104A",
            instructor: "Rattigan",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Fri"],
                    starttime: "09:05 AM",
                    endtime: "09:55 AM",
                    location: "FlintL105"
                    }
            ]
            },
            
        ]
    },
    {
        id: "29",
        subject: "COMPSCI",
        classNumber: "429",
        title: 'Software Engineering Project Management',
        section: [
            {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "FlintL105",
            instructor: "Brun",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Wed"],
                    starttime: "10:10 AM",
                    endtime: "11:00 AM",
                    location: "AgEngin119"
                },
            ]
            },
            {
            id: "LEC02",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "CS 142",
            instructor: "Davila",
            lab: [
                {
                    id: "DIS02AA",
                    day: ["Mon"],
                    starttime: "10:10 AM",
                    endtime: "11:00 AM",
                    location: "Morr3 203"
                    },
                    {
                    id: "SEM02SA",
                    day: ["Wed"],
                    starttime: "01:25 PM",
                    endtime: "02:15 PM",
                    location: "CS 140",
                    instructor: "Davila"
                    },
            ]
            },
            {
            id: "LEC03",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "FlintL201",
            instructor: "Anderson",
            lab: [
                {
                    id: "DIS03AA",
                    day: ["Wed"],
                    starttime: "01:25 PM",
                    endtime: "02:15 PM",
                    location: "EnginLb323"
                    },
                    {
                    id: "SEM03SA",
                    day: ["Mon"],
                    starttime: "01:25 PM",
                    endtime: "02:15 PM",
                    location: "CS 140",
                    instructor: "Anderson"
                    },
            ]
            },
            {
            id: "LEC04",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "Hasbrck138",
            instructor: "Conboy",
            lab: [
                {
                    id: "DIS04AA",
                    day: ["Wed"],
                    starttime: "02:30 PM",
                    endtime: "03:20 PM",
                    location: "Hasbrck138"
                    },
                    {
                    id: "SEM04SA",
                    day: ["Wed"],
                    starttime: "02:30 PM",
                    endtime: "03:20 PM",
                    location: "CS 140",
                    instructor: "Conboy"
                    }
            ]
            },
        ]
    },
    {
        id: "30",
        subject: "COMPSCI",
        classNumber: "445",
        title: 'Information Systems',
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "AgEngin119",
            instructor: "Serafini"
        }
        ]
    },
    {
        id: "31",
        subject: "COMPSCI",
        classNumber: "446",
        title: 'Search Engines',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "Hasbrck134",
            instructor: "Allan"
        }
        ]
    },
    {
        id: "32",
        subject: "COMPSCI",
        classNumber: "453",
        title: 'Computer Networks',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "HasbAd 124",
            instructor: "Kermani"
        }
        ]
    },
    {
        id: "33",
        subject: "COMPSCI",
        classNumber: "461",
        title: 'Secure Distributed Systems',
        section: [
        {
            id: "LEC01",
            day: ["BY ARRANGEMENT"],
            starttime: "BY ARRANGEMENT",
            endtime: "BY ARRANGEMENT",
            instructor: "Stone",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Tue"],
                    starttime: "02:30 PM",
                    endtime: "03:45 PM",
                    location: "CompSci140"
                }
            ]
        },
        ]
    },
    {
        id: "34",
        subject: "COMPSCI",
        classNumber: "485",
        title: 'Applications of Natural Language Processing',
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "LederT 121",
            instructor: "O'Connor"
        }
        ]
    },
    {
        id: "35",
        subject: "COMPSCI",
        classNumber: "490Q",
        title: 'Quantum Information Science',
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed"],
            starttime: "10:10 AM",
            endtime: "11:25 AM",
            location: "CS 140",
            instructor: "Rozpedek"
        }
        ]
    },
    {
        id: "36",
        subject: "MATH",
        classNumber: "131",
        title: "Calculus I",
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed", "Fri"],
            starttime: "12:20 PM",
            endtime: "01:10 PM",
            location: "GsmnAdd 151",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Tue"],
                    starttime: "02:30 PM",
                    endtime: "03:20 PM",
                    location: "LederT 147"
                },
                {
                    id: "DIS01AB",
                    day: ["Tue"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 147"
                }
            ]
        },
        {
            id: "LEC02",
            day: ["Mon", "Wed", "Fri"],
            starttime: "11:15 AM",
            endtime: "12:05 PM",
            location: "GsmnAdd 151",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS02AA",
                    day: ["Thu"],
                    starttime: "04:00 PM",
                    endtime: "04:50 PM",
                    location: "LederT 147"
                },
                {
                    id: "DIS02AB",
                    day: ["Tue"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 147"
                }
            ]
        },
        {
            id: "LEC03",
            day: ["Mon", "Wed", "Fri"],
            starttime: "01:25 PM",
            endtime: "02:15 PM",
            location: "GsmnAdd 151",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS03AA",
                    day: ["Thu"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 171"
                },
                {
                    id: "DIS03AB",
                    day: ["Thu"],
                    starttime: "01:00 PM",
                    endtime: "01:50 PM",
                    location: "LederT 171"
                }
            ]
        },
        {
            id: "LEC04",
            day: ["Mon", "Wed", "Fri"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "GsmnAdd 151",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS04AA",
                    day: ["Fri"],
                    starttime: "12:20 PM",
                    endtime: "01:10 PM",
                    location: "LederT 147"
                },
                {
                    id: "DIS04AB",
                    day: ["Fri"],
                    starttime: "01:25 PM",
                    endtime: "02:15 PM",
                    location: "LederT 147"
                }
            ]
        }
        ]
    },
    {
        id: "37",
        subject: "MATH",
        classNumber: "132",
        title: "Calculus II",
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed", "Fri"],
            starttime: "09:05 AM",
            endtime: "09:55 AM",
            location: "LederT 123",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Tue"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 145"
                },
                {
                    id: "DIS01AB",
                    day: ["Tue"],
                    starttime: "02:30 PM",
                    endtime: "03:20 PM",
                    location: "LederT 143"
                }
            ]
        },
        {
            id: "LEC02",
            day: ["Mon", "Wed", "Fri"],
            starttime: "10:10 AM",
            endtime: "11:00 AM",
            location: "GsmnAdd 51",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS02AA",
                    day: ["Tue"],
                    starttime: "04:00 PM",
                    endtime: "04:50 PM",
                    location: "LederT 147"
                },
                {
                    id: "DIS02AB",
                    day: ["Tue"],
                    starttime: "08:30 AM",
                    endtime: "09:20 PM",
                    location: "LederT 147"
                }
            ]
        },
        {
            id: "LEC03",
            day: ["Mon", "Wed", "Fri"],
            starttime: "11:15 AM",
            endtime: "12:05 PM",
            location: "GsmnAdd 152",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS03AA",
                    day: ["Tue"],
                    starttime: "02:30 PM",
                    endtime: "03:20 PM",
                    location: "LederT 141"
                },
                {
                    id: "DIS03AB",
                    day: ["Tue"],
                    starttime: "04:00 PM",
                    endtime: "04:50 PM",
                    location: "LederT 143"
                }
            ]
        },
        {
            id: "LEC04",
            day: ["Mon", "Wed", "Fri"],
            starttime: "12:20 PM",
            endtime: "01:10 PM",
            location: "GsmnAdd 152",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS04AA",
                    day: ["Thu"],
                    starttime: "04:00 PM",
                    endtime: "04:50 PM",
                    location: "LederT 143"
                },
                {
                    id: "DIS04AB",
                    day: ["Thu"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 143"
                }
            ]
        }
        ]
    },
    {
        id: "38",
        subject: "MATH",
        classNumber: "233",
        title: "Multivariate Calculus",
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed", "Fri"],
            starttime: "09:05 AM",
            endtime: "09:55 AM",
            location: "LederT 121",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS01AA",
                    day: ["Tue"],
                    starttime: "08:30 AM",
                    endtime: "09:20 AM",
                    location: "LederT 171"
                },
                {
                    id: "DIS01AB",
                    day: ["Tue"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 141"
                }
            ]
        },
        {
            id: "LEC02",
            day: ["Tue", "Thu"],
            starttime: "10:00 AM",
            endtime: "11:15 AM",
            location: "LederT 219",
            instructor: "Maria Nikolaou",
            lab: [
                {
                    id: "DIS02AA",
                    day: ["Wed"],
                    starttime: "04:00 PM",
                    endtime: "04:50 PM",
                    location: "LederT 145"
                },
                {
                    id: "DIS02AB",
                    day: ["Wed"],
                    starttime: "05:30 AM",
                    endtime: "06:20 PM",
                    location: "LederT 204"
                }
            ]
        },
        {
            id: "LEC03",
            day: ["Mon", "Wed", "Fri"],
            starttime: "01:25 PM",
            endtime: "02:15 PM",
            location: "GsmnAdd 152",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS03AA",
                    day: ["Tue"],
                    starttime: "04:00 PM",
                    endtime: "04:50 PM",
                    location: "LederT 173"
                },
                {
                    id: "DIS03AB",
                    day: ["Tue"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 173"
                }
            ]
        },
        {
            id: "LEC04",
            day: ["Mon", "Wed", "Fri"],
            starttime: "12:20 PM",
            endtime: "01:10 PM",
            location: "LederCA301",
            instructor: "Staff",
            lab: [
                {
                    id: "DIS04AA",
                    day: ["Thu"],
                    starttime: "04:00 PM",
                    endtime: "04:50 PM",
                    location: "LederT 202"
                },
                {
                    id: "DIS04AB",
                    day: ["Thu"],
                    starttime: "05:30 PM",
                    endtime: "06:20 PM",
                    location: "LederT 202"
                }
            ]
        }
        ]
    },
    {
        id: "39",
        subject: "MATH",
        classNumber: "235",
        title: "Introduction to Linear Algebra",
        section: [
        {
            id: "LEC01",
            day: ["Tue", "Thu"],
            starttime: "08:30 AM",
            endtime: "09:45 AM",
            location: "AgEngin119",
            instructor: "Staff"
        },
        {
            id: "LEC02",
            day: ["Tue", "Thu"],
            starttime: "01:00 PM",
            endtime: "02:15 PM",
            location: "GsmnAdd 151",
            instructor: "Staff"
        },
        {
            id: "LEC03",
            day: ["Tue", "Thu"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "GsmnAdd 152",
            instructor: "Staff"
        },
        {
            id: "LEC04",
            day: ["Tue", "Thu"],
            starttime: "10:00 AM",
            endtime: "11:15 AM",
            location: "LederT 121",
            instructor: "Staff"
        },
        {
            id: "LEC05",
            day: ["Tue", "Thu"],
            starttime: "04:00 PM",
            endtime: "05:15 PM",
            location: "GsmnAdd 152",
            instructor: "Staff"
        },
        {
            id: "LEC06",
            day: ["Tue", "Thu"],
            starttime: "11:30 AM",
            endtime: "12:45 PM",
            location: "GsmnAdd 51",
            instructor: "Staff"
        }
        ]
    },
    {
        id: "1",
        classNumber: "131",
        subject: "PHY",
        title: "Intro Physics I",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed"],
                starttime: "08:00 AM",
                endtime: "08:50 AM",
                location: "ICL S110",
                instructor: "Paul Bourgeois",
                lab: [
                    {
                        id: "LAB01",
                        day: ["Tue"],
                        starttime: "8:50 AM",
                        endtime: "09:45 AM",
                        location: "HAS 20"
                    }
                ]
            },
            {
                id: "LEC02",
                day: ["Mon", "Wed"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "ICL S110",
                instructor: "Paul Bourgeois",
                lab: [
                {
                    id: "LAB02",
                    day: ["Tue"],
                    starttime: "08:50 AM",
                    endtime: "09:45 AM",
                    location: "HAS 20"
                }
                ]
            },
            {
                id: "LEC03",
                day: ["Mon", "Wed"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "ICL S110",
                instructor: "Brokk Toggerson",
                lab: [
                {
                    id: "LAB03",
                    day: ["Thu"],
                    starttime: "08:50 PM",
                    endtime: "09:45 PM",
                    location: "HAS 20"
                }
                ]
            },
            {
                id: "LEC04",
                day: ["Mon", "Wed"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "ICL S110",
                instructor: "Brokk Toggerson",
                lab: [
                {
                    id: "LAB04",
                    day: ["Thu"],
                    starttime: "08:50 PM",
                    endtime: "09:45 PM",
                    location: "HAS 20"
                }
                ]
            },
            {
                id: "LEC05",
                day: ["Mon", "Wed"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "ICL S110",
                instructor: "Brokk Toggerson",
                lab: [
                {
                    id: "LAB05",
                    day: ["Thu"],
                    starttime: "08:50 PM",
                    endtime: "09:45 PM",
                    location: "HAS 20"
                }
                ]
            }
        ]
    },
    {
        id: "2",
        classNumber: "114",
        subject: 'PHY',
        title: "Theory od Sound with Appl. to Speech and Hearing Science",
        section: [
        {
            id: "LEC01",
            day: ["Mon", "Wed", "Fri"],
            starttime: "02:30 PM",
            endtime: "03:45 PM",
            location: "HAS 126",
            instructor: "Tigran Sedrakyan"
        }
        ]
    },
    {
        id: "3",
        classNumber: "100",
        subject: "PHY",
        title: "Conceptual Physics",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed"],
                starttime: "02:30 PM",
                endtime: "03:45 PM",
                location: "HAS 134",
                instructor: "Guy Blaylock"
            }
        ]
    },
    {
        id: "4",
        classNumber: "118",
        subject: "PHY",
        title: "Energy and Society",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "LGRC A301",
                instructor: "Guy Blaylock"
            }
        ]
    },
    {
        id: "5",
        classNumber: "121",
        subject: "PHY",
        title: "Einstein's Dice",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "10:00 AM",
                endtime: "11:15 AM",
                location: "HAS 124",
                instructor: "Carlo Dallapiccola"
            }
        ]
    },
    {
        id: "6",
        classNumber: "132",
        subject: "PHY",
        title: "Introductory Physics II",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "HAS 20",
                instructor: "Benjamin Brau"
            }
        ]
    },
    {
        id: "7",
        classNumber: "151",
        subject: "PHY",
        title: "General Physics I",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "HAS 20",
                instructor: "David Hamilton"
            },
            {
                id: "LEC02",
                day: ["Mon", "Wed", "Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "HAS 20",
                instructor: "David Hamilton"
            }
        ]
    },
    {
        id: "8",
        classNumber: "152",
        subject: "PHY",
        title: "General Physics II",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "HAS 20",
                instructor: "Jun Yan"
            }
        ]
    },
    {
        id: "9",
        classNumber: "181",
        subject: "PHY",
        title: "Physics I - Mechanics",
        section: [
            {
                id: "LEC01",
                day: ["Mon"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "HAS 126",
                instructor: "Narayanan Menon"
            },
            {
                id: "LEC02",
                day: ["Tue", "Thu"],
                starttime: "01:00 PM",
                endtime: "02:15 PM",
                location: "ICL S110",
                instructor: "Narayanan Menon"
            }
        ]
    },
    {
        id: "10",
        classNumber: "181H",
        subject: "PHY",
        title: "Physics I - Mechanics Honors",
        section: [
            {
                id: "LEC01",
                day: ["Wed"],
                starttime: "05:30 PM",
                endtime: "06:45 PM",
                location: "HAS 106",
                instructor: "Donald Candela"
            }
        ]
    },
    {
        id: "11",
        classNumber: "185",
        subject: "PHY",
        title: "Freshman Colloquium",
        section: [
            {
                id: "LEC01",
                day: ["Mon"],
                starttime: "04:00 PM",
                endtime: "05:15 PM",
                location: "HAS 124",
                instructor: "David Hamilton, David Kawall"
            }
        ]
    },
    {
        id: "12",
        classNumber: "281",
        subject: "PHY",
        title: "Introduction to Computational Physics",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "09:00 AM",
                endtime: "11:00 AM",
                location: "LGRC A210",
                instructor: "Shubha Tewari"
            },
            {
                id: "LEC02",
                day: ["Wed", "Fri"],
                starttime: "12:20 PM",
                endtime: "02:15 PM",
                location: "LGRC A210",
                instructor: "Neal Katz"
            },
            {
                id: "LEC03",
                day: ["Tue", "Thu"],
                starttime: "02:30 PM",
                endtime: "04:30 PM",
                location: "LGRC A210",
                instructor: "Shubha Tewari"
            }
        ]
    },
    {
        id: "13",
        classNumber: "287",
        subject: "PHY",
        title: "Physics III - Thermodynamics",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "HAS 124",
                instructor: "Manasa Kandula"
            }
        ]
    },
    {
        id: "15",
        classNumber: "289",
        subject: "PHY",
        title: "Physics III Lab - Thermodynamics",
        section: [
            {
                id: "LEC01",
                day: ["Wed"],
                starttime: "02:30 PM",
                endtime: "04:25 PM",
                location: "HAS 202",
                instructor: "Verena Martinez Outschoorn"
            },
            {
                id: "LEC02",
                day: ["Thu"],
                starttime: "02:30 PM",
                endtime: "04:25 PM",
                location: "HAS 202",
                instructor: "Verena Martinez Outschoorn"
            },
            {
                id: "LEC03",
                day: ["Tue"],
                starttime: "02:30 PM",
                endtime: "04:25 PM",
                location: "HAS 202",
                instructor: "Krishna Kumar"
            },
            {
                id: "LEC05",
                day: ["Tue"],
                starttime: "08:30 AM",
                endtime: "10:25 AM",
                location: "HAS 202",
                instructor: "Krishna Kumar"
            }
        ]
    },
    {
        id: "16",
        classNumber: "381",
        subject: "PHY",
        title: "Writing in Physics",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "11:30 AM",
                endtime: "12:45 PM",
                location: "HAS 104B",
                instructor: "Andrea Pocar"
            }
        ]
    },
    {
        id: "17",
        classNumber: "421",
        subject: "PHY",
        title: "Mechanics",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "10:00 AM",
                endtime: "11:15 AM",
                location: "HAS 126",
                instructor: "Shuang Zhou"
            }
        ]
    },
    {
        id: "18",
        classNumber: "421H",
        subject: "PHY",
        title: "Mechanics I Honors",
        section: [
            {
                id: "LEC01",
                day: ["Fri"],
                starttime: "05:30 PM",
                endtime: "06:30 PM",
                location: "HAS 104A",
                instructor: "Shuang Zhou"
            }
        ]
    },
    {
        id: "19",
        classNumber: "424",
        subject: "PHY",
        title: "Quantum Mechanics",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "01:00 PM",
                endtime: "02:15 PM",
                location: "LGRC A301",
                instructor: "Rafael Coelho Lopes de Sa"
            },
            {
                id: "LEC02",
                day: ["Wed"],
                starttime: "01:25 PM",
                endtime: "02:00 PM",
                location: "LGRC A301",
                instructor: "Rafael Coelho Lopes de Sa"
            }
        ]
    },
    {
        id: "20",
        classNumber: "424H",
        subject: "PHY",
        title: "Quantum Mechanics Honors",
        section: [
            {
                id: "LEC01",
                day: ["Tue"],
                starttime: "04:15 PM",
                endtime: "05:15 PM",
                location: "HAS 106",
                instructor: "Rafael Coelho Lopes de Sa"
            }
        ]
    },
    {
        id: "21",
        classNumber: "440",
        subject: "PHY",
        title: "Intermediate Laboratory A",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "01:00 PM",
                endtime: "03:50 PM",
                location: "HAS 106",
                instructor: "Rory Miskimen"
            },
            {
                id: "LEC02",
                day: ["Mon", "Wed"],
                starttime: "01:25 PM",
                endtime: "04:25 PM",
                location: "HAS 106",
                instructor: "Lori Goldner"
            }
        ]
    },
    {
        id: "22",
        classNumber: "531",
        subject: "PHY",
        title: "Electronics for Scientists I",
        section: [
            {
                id: "LEC01",
                day: ["Mon"],
                starttime: "01:25 PM",
                endtime: "03:25 PM",
                location: "TBA",
                instructor: "David Kawall"
            }
        ]
    },
    {
        id: "23",
        classNumber: "537",
        subject: "PHY",
        title: "Quantum Computation",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "04:00 PM",
                endtime: "05:15 PM",
                location: "HAS 111",
                instructor: "Chen Wang"
            }
        ]
    },
    {
        id: "24",
        classNumber: "562",
        subject: "PHY",
        title: "Advanced Electricity and Magnetism",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "HAS 106",
                instructor: "Nikolay Prokof'ev"
            }
        ]
    },
    {
        id: "25",
        classNumber: "568",
        subject: "PHY",
        title: "General Relativity",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "TBA",
                instructor: "David Kastor"
            }
        ]
    },
    {
        id: "26",
        classNumber: "601",
        subject: "PHY",
        title: "Classical Mechanics",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "10:10 AM",
                endtime: "11:00 AM",
                location: "HAS 130",
                instructor: "Romain Vasseur"
            }
        ]
    },
    {
        id: "27",
        classNumber: "602",
        subject: "PHY",
        title: "Statistical Physics",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "12:20 PM",
                endtime: "01:10 PM",
                location: "HAS 130",
                instructor: "Donald Candela"
            }
        ]
    },
    {
        id: "28",
        classNumber: "605",
        subject: "PHY",
        title: "Methods of Mathematical Physics",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "11:15 AM",
                endtime: "12:05 PM",
                location: "HAS 104B",
                instructor: "Benny Davidovitch"
            }
        ]
    },
    {
        id: "29",
        classNumber: "615",
        subject: "PHY",
        title: "Intermediate Quantum Mechanics II",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "01:00 PM",
                endtime: "02:15 PM",
                location: "HAS 104A",
                instructor: "Tigran Sedrakyan"
            }
        ]
    },
    {
        id: "30",
        classNumber: "651",
        subject: "PHY",
        title: "Topics in Laboratory Techniques",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "08:30 AM",
                endtime: "11:30 AM",
                location: "HAS 240",
                instructor: "Irene Dujovne"
            }
        ]
    },
    {
        id: "31",
        classNumber: "691A",
        subject: "PHY",
        title: "Seminar: Physics Colloquium",
        section: [
            {
                id: "LEC01",
                day: ["Wed"],
                starttime: "04:00 PM",
                endtime: "05:15 PM",
                location: "HAS 134",
                instructor: "Narayanan Menon, Andrea Pocar"
            }
        ]
    },
    {
        id: "32",
        classNumber: "691G",
        subject: "PHY",
        title: "Graduate Student Development Seminar",
        section: [
            {
                id: "LEC01",
                day: ["Wed"],
                starttime: "02:30 PM",
                endtime: "03:30 PM",
                location: "TBA",
                instructor: "Brokk Toggerson"
            }
        ]
    },
    {
        id: "33",
        classNumber: "718",
        subject: "PHY",
        title: "Topics in Continuum Physics",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "02:30 PM",
                endtime: "03:45 PM",
                location: "HAS 130",
                instructor: "Varghese Mathai"
            }
        ]
    },
    {
        id: "34",
        classNumber: "812",
        subject: "PHY",
        title: "Quantum Field Theory II",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "11:30 AM",
                endtime: "12:45 PM",
                location: "LGRT 419B",
                instructor: "Lorenzo Sorbo"
            }
        ]
    },
    {
        id: "35",
        classNumber: "821",
        subject: "PHY",
        title: "General Relativity",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "09:05 AM",
                endtime: "09:55 AM",
                location: "TBA",
                instructor: "David Kastor"
            }
        ]
    },
    {
        id: "36",
        classNumber: "859",
        subject: "PHY",
        title: "Introduction to Gauge Theory",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "10:10 AM",
                endtime: "11:25 AM",
                location: "LGRT 419B",
                instructor: "Ben Heidenreich"
            }
        ]
    },
    {
        id: "37",
        classNumber: "891S",
        subject: "PHY",
        title: "Graduate STEM Education Seminar",
        section: [
            {
                id: "LEC01",
                day: ["Tue"],
                starttime: "04:00 PM",
                endtime: "05:15 PM",
                location: "HAS 109",
                instructor: "Shubha Tewari"
            }
        ]
    },
    {
        id: "38",
        classNumber: "224",
        subject: "Classics",
        title: "Greek Mythology",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed", "Fri"],
                starttime: "01:25 PM",
                endtime: "02:15 PM",
                location: "THOM 104",
                instructor: "Joseph Wilson"
            }
        ]
    },
    {
        id: "39",
        classNumber: "390STB",
        subject: "Classics",
        title: "Archaeology of Early Christianity",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "11:30 AM",
                endtime: "12:45 PM",
                location: "THOM 104",
                instructor: "Joseph Wilson"
            }
        ]
    },
    {
        id: "40",
        classNumber: "101",
        subject: "Judaic",
        title: "The Jewish Experience I",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "11:30 AM",
                endtime: "12:45 PM",
                location: "THOM 104",
                instructor: "Jordan Katz"
            }
        ]
    },
    {
        id: "41",
        classNumber: "102",
        subject: "Judaic",
        title: "The Jewish Experience II",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "10:00 AM",
                endtime: "11:15 AM",
                location: "THOM 104",
                instructor: "Aviva Ben-Ur"
            }
        ]
    },
    {
        id: "42",
        classNumber: "221",
        subject: "Judaic",
        title: "Jews and Christians in the Early Modern World",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "10:00 AM",
                endtime: "11:15 AM",
                location: "THOM 104",
                instructor: "Jordan Katz"
            }
        ]
    },
    {
        id: "43",
        classNumber: "327",
        subject: "Judaic/MidEast",
        title: "Jewish Food in Historical Perspective",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "11:30 AM",
                endtime: "12:45 PM",
                location: "THOM 104",
                instructor: "Aviva Ben-Ur"
            }
        ]
    },
    {
        id: "44",
        classNumber: "363",
        subject: "Judaic",
        title: "Religion and State",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed"],
                starttime: "11:15 AM",
                endtime: "12:30 PM",
                location: "THOM 104",
                instructor: "Susan Shapiro"
            }
        ]
    },
    {
        id: "45",
        classNumber: "376",
        subject: "Judaic",
        title: "Post-Holocaust Thought",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed"],
                starttime: "02:30 PM",
                endtime: "03:45 PM",
                location: "THOM 104",
                instructor: "Susan Shapiro"
            }
        ]
    },
    {
        id: "46",
        classNumber: "361",
        subject: "MidEast",
        title: "Sufism: Islamic Mystical Trad. & Legacies",
        section: [
            {
                id: "LEC01",
                day: ["Mon", "Wed"],
                starttime: "04:00 PM",
                endtime: "05:15 PM",
                location: "THOM 104",
                instructor: "Malissa Taylor"
            }
        ]
    },
    {
        id: "47",
        classNumber: "391A",
        subject: "MidEast",
        title: "Islamic Society and Culture in the Middle Ages",
        section: [
            {
                id: "LEC01",
                day: ["Wed"],
                starttime: "01:25 PM",
                endtime: "03:45 PM",
                location: "THOM 104",
                instructor: "Tayeb El-Hibri"
            }
        ]
    },
    {
        id: "48",
        classNumber: "383",
        subject: "PHIL",
        title: "Intro to Philosophy of Religion",
        section: [
            {
                id: "LEC01",
                day: ["Tue", "Thu"],
                starttime: "02:30 PM",
                endtime: "03:45 PM",
                location: "THOM 104",
                instructor: "Mathura Samaram"
            }
        ]
    }                   
] 
