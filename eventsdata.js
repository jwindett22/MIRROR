// Campus events with a crowd: athletics home games to start. Dates are local (America/New_York).
// Football: 2026 schedule and reported attendance (Wikipedia, pulled 2026-11-05); TBD kickoffs assumed, TBD attendance 11,000.
// Men's basketball: ESPN 2026-27 schedule, times converted from the page's GMT display; verify against charlotte49ers.com.
// Not yet here: women's basketball, volleyball, soccer, concerts, commencement, admissions days, Halton concerts, SAC events.
window.EVENTS={
  "pulled":"2026-11-05",
  "venues":{
    "jrs":{"name":"Jerry Richardson Stadium","p":[353,339],"cap":15314,"kind":"stadium"},
    "halton":{"name":"Halton Arena (Barnhardt SAC)","p":[522.2,417.3],"cap":9105,"kind":"arena"}
  },
  "events":[
    {"date":"2026-09-05","start":"15:30","dur":210,"venue":"jrs","name":"Football vs The Citadel","att":13274,"sport":"football","src":"wiki"},
    {"date":"2026-09-26","start":"18:30","dur":210,"venue":"jrs","name":"Football vs Louisiana","att":14311,"sport":"football","src":"wiki"},
    {"date":"2026-10-03","start":"11:00","dur":210,"venue":"jrs","name":"Football vs Memphis","att":8856,"sport":"football","src":"wiki"},
    {"date":"2026-10-30","start":"19:00","dur":210,"venue":"jrs","name":"Football vs Tulane (Friday night)","att":11000,"sport":"football","src":"wiki","attAssumed":true},
    {"date":"2026-11-14","start":"15:30","dur":210,"venue":"jrs","name":"Football vs East Carolina","att":12000,"sport":"football","src":"wiki","timeAssumed":true,"attAssumed":true},
    {"date":"2026-11-28","start":"15:30","dur":210,"venue":"jrs","name":"Football vs Navy","att":11000,"sport":"football","src":"wiki","timeAssumed":true,"attAssumed":true},
    {"date":"2026-11-05","start":"19:00","dur":135,"venue":"halton","name":"MBB vs Georgia State","att":4000,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2026-11-13","start":"19:00","dur":135,"venue":"halton","name":"MBB vs Appalachian State","att":5500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2026-11-29","start":"15:00","dur":135,"venue":"halton","name":"MBB vs Western Carolina","att":3500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2026-12-02","start":"20:00","dur":135,"venue":"halton","name":"MBB vs Charleston","att":4000,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2026-12-06","start":"14:00","dur":135,"venue":"halton","name":"MBB vs North Alabama","att":3500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2026-12-13","start":"15:00","dur":135,"venue":"halton","name":"MBB vs Johnson C. Smith","att":4500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2026-12-15","start":"19:00","dur":135,"venue":"halton","name":"MBB vs Iona","att":3500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2026-12-22","start":"18:00","dur":135,"venue":"halton","name":"MBB vs North Carolina A&T","att":4000,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-01-03","start":"15:00","dur":135,"venue":"halton","name":"MBB vs Wichita State","att":5000,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-01-10","start":"16:00","dur":135,"venue":"halton","name":"MBB vs Temple","att":4500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-01-13","start":"19:00","dur":135,"venue":"halton","name":"MBB vs UTSA","att":4000,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-01-20","start":"21:00","dur":135,"venue":"halton","name":"MBB vs Memphis","att":7000,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-01-26","start":"19:00","dur":135,"venue":"halton","name":"MBB vs UAB","att":4500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-02-07","start":"14:00","dur":135,"venue":"halton","name":"MBB vs South Florida","att":4500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-02-17","start":"17:00","dur":135,"venue":"halton","name":"MBB vs Florida Atlantic","att":4500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-02-20","start":"17:00","dur":135,"venue":"halton","name":"MBB vs Rice","att":4500,"sport":"mbb","src":"espn","attAssumed":true},
    {"date":"2027-03-07","start":"14:00","dur":135,"venue":"halton","name":"MBB vs East Carolina","att":5500,"sport":"mbb","src":"espn","attAssumed":true}
  ]
};
