var company_for = "work";

var anton = {
    name: "Anton Paquin",
    title: "Software Engineer",
    mission: "Machine learning is wonderfully powerful, but it has a long way to go before delivering its promise of dramatic concrete benefit to most people. AI is a nascent field and methods for effectively designing, training, and deploying models are a long way from maturity. \n My goal is to accelerate this development.",
    education: {
        institution: "Boston University College of Engineering",
        time: "2014 - 2018",
        degree: "Bachelor of Science in Electrical Engineering and in Computer Engineering",
    },
    contacts: [
        {phone: "+1-650-704-8881"},
        {email: company_for + "@antonpaqu.in"},
        {github: "https://www.github.com/antonpaquin"},
    ],
    skills: [
        ["Python", "C", "Java", "SQL"],
        ["Tensorflow", "Keras", "PyTorch", "PySpark"],
        ["ElasticSearch", "MongoDB", "PostgreSQL"],
        ["AWS", "GCP", "Linux", "Bash", "Git", "Jira"],
    ],
    experience: [
        {
            company: "Omniscience",
            title: "Software Engineer",
            time: "August 2018 - August 2019",
            technologies: ["Python", "Jupyter", "Spark", "SKLearn", "Tensorflow", "AWS (EC2, VPC, EMR, S3, RDS, Dynamo)"],
            description: ["Automated the infrastructure supporting a team of data scientists leading to a 10x increase in experiments run",
                          "Led the design and implementation of software to serve machine learning models to clients",
                          "Designed analyses of client data, and delivered statistics and visualization reports on said analyses"]
        },
        {
            company: "Boston University VLSI Lab",
            title: "Lab Assistant",
            time: "September - December 2017",
            technologies: ["Cadence Virtuoso"],
            description: ["I worked under professor Allyn Hubbard, assisting the students in his EC571 Digital VLSI class with computer-aided design of digital circuits."]
        },
        {
            company: "SaySayK",
            title: "Backend Intern",
            time: "May - August 2017",
            technologies: ["Python", "Flask", "MongoDB", "AWS", "ElasticSearch"],
            description: ["Worked primarily in Python to develop new several components of the SaySayK backend.",
                          "I specifically built components that drove search, user history, and config management."]
        }
    ],
    projects: [
        {
            name: "Hivemind",
            description: "Hivemind is a tool designed to deliver machine learning inference to nontechnical users. The project also encompasses an index of \"batteries-included\" bundled models, serving code, and user interfaces.",
            url: "http://github.com/antonpaquin/hivemind",
            technologies: ["Python", "Onnx", "Pytorch", "Qt"],
        },
        {
            name: "Code in Place",
            description: "I participated as a section leader in Code in Place. Code in Place was a Stanford initiative to teach python programming during the coronavirus lockdown while people were encouraged to stay home.",
            url: "https://www.stanforddaily.com/2020/05/07/students-instructors-share-thoughts-on-free-course-code-in-place/",
            technologies: ["Python", "Zoom", "Karel", "PIL"],
        },
        {
            name: "Mikan-Cluster",
            description: "Mikan is a Beowulf cluster of OrangePi SBCs. The hardware is supported by a custom circuit board for routing power and ethernet. In software, the cluster is and provisioned and controlled via Saltstack, and includes a shared filesystem and multi-node performance logging.",
            url: "http://github.com/antonpaquin/mikan",
            technologies: ["Saltstack", "KiCad", "Ganglia", "GlusterFS", "Dask"]
        },
    ],
};

function resume(desc) {
    let elem = document.createElement('div');
    
    elem.appendChild(identitySection(desc));
    elem.appendChild(missionSection(desc));
    elem.appendChild(skillsSection(desc.skills));
    elem.appendChild(educationSection(desc.education));
    elem.appendChild(experienceSection(desc.experience));
    elem.appendChild(projectsSection(desc.projects));

    return elem;
}

function identitySection(desc) {
    let elem = document.createElement('div');
    elem.classList.add("identity");
    elem.classList.add("section");

    elem.appendChild(nameSection(desc));
    elem.appendChild(contactsSection(desc.contacts));

    return elem;
}

function nameSection(desc) {
    let elem = document.createElement('div');
    elem.classList.add("namebox");

    elem.appendChild(document.createElement('span'));

    let p_name = document.createElement('p');
    p_name.classList.add("name");
    p_name.innerText = desc.name;
    elem.appendChild(p_name);

    let p_title = document.createElement('p');
    p_title.classList.add("title");
    p_title.innerText = desc.title;
    elem.appendChild(p_title);

    elem.appendChild(document.createElement('span'));

    return elem;
}

function contactsSection(contacts) {
    let wrap = document.createElement('div');
    wrap.classList.add('contact-wrap');
    wrap.appendChild(document.createElement('span'));

    let elem = document.createElement('div');
    elem.classList.add("contact");

    let col0 = document.createElement('div');
    col0.classList.add('contact-type');
    let col1 = document.createElement('div');
    col1.classList.add('contact-val');

    for (let ii=0; ii<contacts.length; ii++) {
        let contact = contacts[ii];
        let contact_type = Object.keys(contact)[0];
        let contact_value = contact[contact_type];

        let elem0 = document.createElement('p');
        elem0.innerText = contact_type;
        col0.appendChild(elem0);

        let elem1;
        if (contact_value.startsWith('http')) {
            elem1 = document.createElement('a');
            elem1.innerText = contact_value;
            elem1.href = contact_value;
        } else {
            elem1 = document.createElement('p');
            elem1.innerText = contact_value;
        }
        col1.appendChild(elem1);
    }
    elem.appendChild(col0);
    elem.appendChild(col1);

    wrap.appendChild(elem);

    wrap.appendChild(document.createElement('span'));

    return wrap;
}

function missionSection(desc) {
    let wrap = document.createElement('div');
    wrap.classList.add("mission");
    wrap.classList.add("section");

    let missionHeader = document.createElement('p');
    missionHeader.classList.add("header");
    missionHeader.innerText = "Mission Statement";
    wrap.appendChild(missionHeader);

    let elem = document.createElement('p');
    elem.classList.add("statement");
    elem.innerText = desc.mission;
    wrap.appendChild(elem);

    return wrap;
}

function skillsSection(skills) {
    let wrap = document.createElement('div');
    wrap.classList.add("skills");
    wrap.classList.add("section");

    let skillsHeader = document.createElement('p');
    skillsHeader.classList.add("header");
    skillsHeader.innerText = "Technologies";
    wrap.appendChild(skillsHeader);

    let elem = document.createElement('div');
    elem.classList.add("skills-cols");
    let col0 = document.createElement('ul');
    let col1 = document.createElement('ul');
    
    for (let ii=0; ii<skills.length; ii++) {
        let line = document.createElement('li');
        line.innerText = skills[ii].join(", ");
        if (ii % 2 == 0) {
            col0.appendChild(line);
        } else {
            col1.appendChild(line);
        }
    }

    elem.appendChild(col0);
    elem.appendChild(col1);

    wrap.appendChild(elem);

    return wrap;
}

function experienceSection(experience) {
    let wrap = document.createElement('div');
    wrap.classList.add("experience");
    wrap.classList.add("section");
    
    let experienceHeader = document.createElement('p');
    experienceHeader.classList.add("header");
    experienceHeader.innerText = "Experience";
    wrap.appendChild(experienceHeader);

    for (let ii=0; ii<experience.length; ii++) {
        let exp = experience[ii];

        let elem = document.createElement('div');
        elem.classList.add("sub-section");

        let subWrap = document.createElement('div');
        subWrap.classList.add("sub-header-wrap");

        let expSubHeader = document.createElement('p');
        expSubHeader.classList.add("sub-header");
        expSubHeader.innerText = exp.company + " - " + exp.title;
        subWrap.appendChild(expSubHeader);

        subWrap.appendChild(document.createElement('span'));

        let expTime = document.createElement('p');
        expTime.classList.add("time");
        expTime.innerText = "(" + exp.time + ")";
        subWrap.appendChild(expTime);

        elem.appendChild(subWrap);

        let expDescription = document.createElement('ul');
        for (let jj=0; jj<exp.description.length; jj++) {
            let line = document.createElement('li');
            line.innerText = exp.description[jj];
            expDescription.appendChild(line);
        }
        elem.appendChild(expDescription);
            
        wrap.appendChild(elem);
    }


    return wrap;
}

function educationSection(education) {
    let wrap = document.createElement("div");
    wrap.classList.add("education");
    wrap.classList.add("section");

    let educationHeader = document.createElement('p');
    educationHeader.classList.add("header");
    educationHeader.innerText = "Education";
    wrap.appendChild(educationHeader);

    let elem = document.createElement('div');
    elem.classList.add("education-container");

    let instWrap = document.createElement('div');
    instWrap.classList.add("institution-wrap");

    let eduInstitution = document.createElement('p');
    eduInstitution.classList.add("institution");
    eduInstitution.innerText = education.institution;
    instWrap.appendChild(eduInstitution);

    instWrap.appendChild(document.createElement('span'));

    let eduTime = document.createElement('p');
    eduTime.classList.add("time");
    eduTime.innerText = "(" + education.time + ")";
    instWrap.appendChild(eduTime);

    elem.appendChild(instWrap);

    let eduDegree = document.createElement('p');
    eduDegree.innerText = education.degree;
    elem.appendChild(eduDegree);

    wrap.appendChild(elem);

    return wrap;
}

function projectsSection(projects) {
    let wrap = document.createElement("div");
    wrap.classList.add("projects");
    wrap.classList.add("section");

    let projectsHeader = document.createElement('p');
    projectsHeader.classList.add("header");
    projectsHeader.innerText = "Recent Projects";
    wrap.appendChild(projectsHeader);

    for (let ii=0; ii<projects.length; ii++) {
        let project = projects[ii];

        let elem = document.createElement('div');
        elem.classList.add("sub-section");

        let projName = document.createElement('a');
        projName.classList.add("sub-header");
        projName.href = project.url;
        projName.innerText = project.name;
        elem.appendChild(projName);

        let projDesc = document.createElement('p');
        projDesc.classList.add("description");
        projDesc.innerText = project.description;
        elem.appendChild(projDesc);

        let projTechWrap = document.createElement('ul');
        let projTech = document.createElement('li');
        projTech.classList.add("technologies");
        projTech.innerText = project.technologies.join(", ");
        projTechWrap.appendChild(projTech)
        elem.appendChild(projTechWrap);

        wrap.appendChild(elem);
    }

    return wrap;
}

let resumeElem = resume(anton);
document.body.appendChild(resumeElem);
