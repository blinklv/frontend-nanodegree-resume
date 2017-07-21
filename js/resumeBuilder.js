// resumeBuilder.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-07-14
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-07-21


function inName(name) {
    var names = name.split(" ");
    return names[0].charAt(0).toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
}

var bio = {
    name: "blink lv",
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
    bioPic: "images/fry.jpg"
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
            "images/desktop_upper.jpg",
            "images/desktop_lower.jpg"
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
    $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));
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

projects.display = function() {
    this.projects.forEach( (project) => {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

        project.images.forEach(image => { $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image)) } );
    });
};

projects.display();


education.schools.forEach( (school) => {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
    school.majors.forEach( (major) => {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
    });
});

if ( education.onlineCourses.length ) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach( (onlineCourse) => {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", onlineCourse.url));
    });
}

$("#mapDiv").append(googleMap);
