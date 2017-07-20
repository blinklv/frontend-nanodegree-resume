// resumeBuilder.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-07-14
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-07-20


function inName(name) {
  var names = name.split(" ");
  return names[0].charAt(0).toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
}

(function() {
  var bio = {
    name: "blink lv",
    role: "Programmer",
    contacts: {
      mobile: "086-18665853855",
      email: "blinklv@icloud.com",
      github: "blinklv",
      twitter: "@blinklv",
      location: "Shenzhen, Guangdong"
    },
    welcomeMessage: "Who are you? Am I alone?",
    skills: ["programming", "mathematics", "painting"],
    bioPic: "images/fry.jpg"
  };

  var education = {
    schools: [
    { 
      name: "Xi'an University of technology",
      city: "Xi'an",
      degree: "Masters",
      majors: ["mathematics", "CS"],
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
      employer: "KFC",
      title: "Delivery Boy",
      dates: "2014 - 2015",
      description: "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      employer: "Tencent",
      title: "Backend Enginner",
      dates: "2016 - today",
      description: `
          My first job. The environment of the office is good, and the salary is ok. But the workload
          is heavy, I need to work late every day. Fortunately, there are no strict work hours, I can
          go to the company late. Online servers often meet problems, sometimes I have to spend
          my weekend time fixing it, that's too bad.
          `
    }
    ]
  };

  var projects = {
    "projects": [
    {
      title: "Portfilo",
      dates: 2017,
      description: `A portfolio demo used to show pictures, it's a responsive web page.  If you want to change
          it for yourself, you need to replace the contents of the img directory (include the description
          directory). The logo.jpg picture will become your logo on the header, you also need to change the
          index.pug file a little bit to make the information under the logo meet your requirements. The site
          looks like below (only in desktop).`,
      images: [
        "https://github.com/blinklv/portfolio/blob/master/readme/desktop.jpg"
      ]
    }
    ]
  };

  $(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
  });

  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  for ( let contact in bio.contacts ) {
      $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));
  }

  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

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

  $("#main").append(internationalizeButton);
})();

