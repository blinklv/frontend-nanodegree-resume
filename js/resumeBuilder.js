// resumeBuilder.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-07-14
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-07-31

var bio = {
    name: "Blink Lv",
    role: "Programmer",
    contacts: {
        mobile: "086-18665853855",
        email: "blinklv@icloud.com",
        github: "blinklv",
        twitter: "@blinklv",
        location: "Shenzhen shi"
    },
    welcomeMessage: "Who are you? Am I alone?",
    skills: ["programming", "mathematics", "painting"],
    biopic: "images/fry.jpg"
};

var education = {
    schools: [
    { 
        name: "Xi'an University of technology",
        location: "Xian, Shaanxi, China",
        degree: "Masters",
        majors: ["mathematics", "CS"],
        dates: "2012 - 2016",
        url: "http://www.xaut.edu.cn/"
    }
    ],
    onlineCourses: [
    {
        title: "JavaScript Crash Course",
        school: "Udacity",
        dates: "2016",
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
        location: "Xi'an",
        description: "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
        employer: "Tencent",
        title: "Backend Enginner",
        dates: "2016 - today",
        location: "Shenzhen",
        description: "My first job. The environment of the office is good, and the salary is ok. But the workload is heavy, I need to work late every day. Fortunately, there are no strict work hours, I can go to the company late. Online servers often meet problems, sometimes I have to spend my weekend time fixing it, that's too bad."
    }
    ]
};

var projects = {
    "projects": [
    {
        title: "Portfilo",
        dates: "2017",
        description: "A portfolio demo used to show pictures, it's a responsive web page.  If you want to change it for yourself, you need to replace the contents of the img directory (include the description directory). The logo.jpg picture will become your logo on the header, you also need to change the index.pug file a little bit to make the information under the logo meet your requirements. The site looks like below (only in desktop).",
        images: [
            "images/desktop_upper.jpg",
            "images/desktop_lower.jpg"
        ]
    }
    ]
};

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", this.name));

    var contacts = this.contacts;
    for ( var contact in contacts ) {
        if (contacts.hasOwnProperty(contact)) {
            $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", contacts[contact]));
            $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", contacts[contact]));
        }
    }

    $("#header").append(HTMLbiopic.replace("%data%", this.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

    var skills = this.skills;
    if ( skills.length ) {
        $("#header").append(HTMLskillsStart);
        skills.forEach( skill => { $("#skills").append(HTMLskills.replace("%data%", skill)); } );
    }
};

work.display = function() {
    this.jobs.forEach( (job) => {
        $("#workExperience").append(HTMLworkStart);

        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
};

projects.display = function() {
    this.projects.forEach( (project) => {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

        project.images.forEach(image => { $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image)); } );
    });
};

education.display = function() {
    this.schools.forEach( (school) => {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
        school.majors.forEach( (major) => {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
        });
    });

    if ( this.onlineCourses.length ) {
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach( (onlineCourse) => {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", onlineCourse.url));
        });
    }
};

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
