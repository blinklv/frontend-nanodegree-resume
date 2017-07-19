// resumeBuilder.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-07-14
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-07-19

(function() {
  var bio = {
    name: "Blink Lv",
    role: "Web Developer",
    contacts: {
      mobile: "650-555-5555",
      email: "blinklv@icloud.com",
      github: "blinklv",
      twitter: "@blinklv",
      location: "ShenZhen"
    },
    welcomeMessage: "Who Are You?",
    skills: ["programming", "mathsmatics", "painting"],
    bioPic: "images/fry.jpg"
  };

  var education = {
    schools: [
    { 
      name: "Xi'an University of technology",
      city: "Xi'an",
      degree: "Masters",
      majors: ["mathsmatics"],
      dates: 2012,
      url: "http://www.xaut.edu.cn/"
    }
    ],
    onlineCourses: [
    {
      title: "JavaScript Crash Course",
      school: "Udacity",
      dates: 2016,
      url: "http://www.udacity.com/course/ud804"
    }
    ]
  };

  var work = {
    jobs: [
    {
      employer: "Tencent",
      title: "Backend Enginner",
      dates: 2016,
      description: "Nothing"
    }
    ]
  };

  var projects = {
    "projects": [
    {
      title: "Portfilo",
      dates: 2017,
      description: "My portfilo",
      images: [
        "https://github.com/blinklv/portfolio/blob/master/readme/desktop.jpg"
      ]
    }
    ]
  };

  if ( bio.skills.length ) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach( skill => { $("#skills").append(HTMLskills.replace("%data%", skill)) } );

  }

  for ( let job in work.jobs ) {
    $("#workExperience").append(HTMLworkStart);
    
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }

})();

