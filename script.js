// Function to validate basic information
function validateBasicInfo() {
    var _a;
    var requiredFields = [
        "name",
        "email",
        "phone",
        "birthday",
        "address",
        "profilePicInput",
        "aboutme",
    ];
    for (var _i = 0, requiredFields_1 = requiredFields; _i < requiredFields_1.length; _i++) {
        var fieldId = requiredFields_1[_i];
        var fieldElement = document.getElementById(fieldId);
        if (!fieldElement) {
            console.error("Element with ID \"".concat(fieldId, "\" not found."));
            return false;
        }
        var fieldValue = (_a = fieldElement.value) === null || _a === void 0 ? void 0 : _a.trim();
        if (!fieldValue) {
            alert("".concat(fieldId.charAt(0).toUpperCase() +
                fieldId.slice(1).replace(/([A-Z])/g, " $1"), " is required."));
            return false;
        }
    }
    var languagesList = document.getElementById("languagesList");
    if (!languagesList || languagesList.children.length == 0) {
        alert("At least one language is required.");
        return false;
    }
    var skillsList = document.getElementById("skillsList");
    if (!skillsList || skillsList.children.length === 0) {
        alert("At least one skill is required.");
        return false;
    }
    return true;
}
function generateResume() {
    if (!validateBasicInfo())
        return; // Stop if validation fails
    var profilePicPreview = document.getElementById("profilePicPreview");
    var profilePic = document.getElementById("resumeProfilePic");
    profilePic.src = profilePicPreview.src;
    var names = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var birthday = document.getElementById("birthday")
        .value;
    var address = document.getElementById("address")
        .value;
    var university = document.getElementById("university")
        .value;
    var degree = document.getElementById("degree").value;
    var aboutMe = document.getElementById("aboutme")
        .value;
    var gradYear = document.getElementById("gradYear")
        .value;
    var company = document.getElementById("company")
        .value;
    var position = document.getElementById("position")
        .value;
    var duration = document.getElementById("duration")
        .value;
    var description = document.getElementById("description").value;
    var project1 = document.getElementById("project1")
        .value;
    var project1Desc = document.getElementById("project1Desc").value;
    // url validation
    // function isValidUrl(url : any ) {
    //     try {
    //       new URL(url);
    //       return true;
    //     } catch (e) {
    //       return false;
    //     }
    //   }
    // const linkedinInput = (document.getElementById("linkedin") as HTMLInputElement).value;
    // const linkedin = isValidUrl(linkedinInput) ? linkedinInput : "https://www.linkedin.com";
    // Update resume preview
    document.getElementById("resumeName").textContent =
        names;
    document.getElementById("resumeEmail").textContent = email;
    document.getElementById("resumePhone").textContent = phone;
    document.getElementById("resumeBirthday").textContent =
        birthday;
    document.getElementById("resumeAddress").textContent =
        address;
    document.getElementById("resumeaboutMe").textContent =
        aboutMe; //
    // (document.getElementById("resumeLinkedIn") as HTMLAnchorElement).href = linkedin;
    document.getElementById("resumeUniversity").textContent =
        university;
    document.getElementById("resumeDegree").textContent = degree;
    document.getElementById("resumeGradYear").textContent =
        gradYear;
    document.getElementById("resumeCompany").textContent =
        company;
    document.getElementById("resumePosition").textContent =
        position;
    document.getElementById("resumeDuration").textContent =
        duration;
    document.getElementById("resumeDescription").textContent =
        description;
    document.getElementById("resumeProject1").textContent =
        project1;
    document.getElementById("resumeProject1Desc").textContent =
        project1Desc;
    if (!project1 ||
        !project1Desc ||
        !company ||
        !position ||
        !duration ||
        !gradYear) {
        document.getElementById("resumeProject1").textContent =
            "-";
        document.getElementById("resumeProject1Desc").textContent =
            "-";
        document.getElementById("resumeGradYear").textContent =
            "-";
        document.getElementById("resumeCompany").textContent = "-";
        document.getElementById("resumePosition").textContent = "";
        document.getElementById("resumeDuration").textContent =
            "-";
    }
    // remove btn and li class
    var listitem = document.querySelectorAll(".list-item .remove-btn");
    listitem.forEach(function (item) {
        item.remove();
    });
    // Languages
    var languagesList = document.getElementById("languagesList");
    var resumeLanguages = document.getElementById("resumeLanguages");
    resumeLanguages.innerHTML = languagesList.innerHTML;
    // Soft Skills
    var softSkillsList = document.getElementById("softSkillsList");
    var resumeSoftSkills = document.getElementById("resumeSoftSkills");
    resumeSoftSkills.innerHTML = softSkillsList.innerHTML;
    if (!softSkillsList.innerHTML) {
        resumeSoftSkills.innerHTML = "-";
    }
    // Skills
    var skillsList = document.getElementById("skillsList");
    var resumeSkills = document.getElementById("resumeSkills");
    resumeSkills.innerHTML = skillsList.innerHTML;
    /// Create a unique identifier for the resume
    var resumeId = Date.now().toString(); // Using timestamp as a simple unique ID
    var resumeUrl = "?id=".concat(resumeId, "&names=").concat(encodeURIComponent(names));
    // Display the resume URL
    var resumeUrlElement = document.getElementById("resumeUrl");
    resumeUrlElement.innerHTML = "Your Resume Url: <a href=\"".concat(resumeUrl, "\" target=\"_blank\">").concat(resumeUrl, "</a>");
    // Save list items
    var languagesLis = document.getElementById("languagesList");
    var skillsLis = document.getElementById("skillsList");
    var softSkillsLis = document.getElementById("softSkillsList");
    var languages = Array.from(languagesLis.children).map(function (li) { var _a; return ((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ""; });
    var skills = Array.from(skillsLis.children).map(function (li) { var _a; return ((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ""; });
    var softSkills = Array.from(softSkillsLis.children).map(function (li) { var _a; return ((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ""; });
    // Save resume data to localStorage
    var resumeData = {
        profilePic: profilePicPreview.src,
        names: names,
        email: email,
        phone: phone,
        birthday: birthday,
        address: address,
        university: university,
        degree: degree,
        aboutMe: aboutMe,
        gradYear: gradYear,
        company: company,
        position: position,
        duration: duration,
        description: description,
        project1: project1,
        project1Desc: project1Desc,
        languages: languages,
        skills: skills,
        softSkills: softSkills,
    };
    localStorage.setItem("resume_".concat(resumeId), JSON.stringify(resumeData));
    // Switch to the resume section
    document.getElementById("form-section").style.display =
        "none";
    document.getElementById("resume-section").style.display =
        "block";
}
function addLanguages() {
    var languagesInput = document.getElementById("languages");
    var languagesList = document.getElementById("languagesList");
    var languages = languagesInput.value.trim();
    if (languages) {
        var li_1 = document.createElement("li");
        li_1.classList.add("list-item");
        var span = document.createElement("span");
        span.textContent = languages;
        li_1.appendChild(span);
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove language";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            languagesList.removeChild(li_1); // Remove the li element
        };
        // Append the button to the li
        li_1.appendChild(removeBtn);
        languagesList.appendChild(li_1);
        languagesInput.value = ""; // Clear input field
    }
}
function addSoftSkills() {
    var _a;
    var softSkillsInput = document.getElementById("softSkills");
    var softSkillsList = document.getElementById("softSkillsList");
    var skill = softSkillsInput.value.trim();
    if (skill) {
        var li_2 = document.createElement("li");
        li_2.classList.add("list-item");
        var span = document.createElement("span");
        span.textContent = skill;
        li_2.appendChild(span);
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove language";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            softSkillsList.removeChild(li_2); // Remove the li element
        };
        // Append the button to the li
        li_2.appendChild(removeBtn);
        softSkillsList.appendChild(li_2);
        softSkillsInput.value = ""; // Clear input field
    }
    else {
        if (softSkillsList.children.length === 0 ||
            ((_a = softSkillsList.lastElementChild) === null || _a === void 0 ? void 0 : _a.textContent) !== "-") {
            var li = document.createElement("li");
            li.textContent = "-";
            softSkillsList.appendChild(li);
        }
    }
}
function addSkills() {
    var skillsInput = document.getElementById("skills");
    var skillsList = document.getElementById("skillsList");
    var skill = skillsInput.value.trim();
    if (skill) {
        var li_3 = document.createElement("li");
        li_3.classList.add("list-item");
        var span = document.createElement("span");
        span.textContent = skill;
        li_3.appendChild(span);
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove language";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            skillsList.removeChild(li_3); // Remove the li element
        };
        // Append the button to the li
        li_3.appendChild(removeBtn);
        skillsList.appendChild(li_3);
        skillsInput.value = ""; // Clear input field
    }
}
function editResume() {
    document.getElementById("form-section").style.display =
        "block";
    document.getElementById("resume-section").style.display =
        "none";
}
function downloadPDF() {
    window.print();
}
// Profile picture preview logic
var profilePicInput = document.getElementById("profilePicInput");
profilePicInput.addEventListener("change", function () {
    var _a;
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var preview = document.getElementById("profilePicPreview");
            preview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
    else {
        // Clear the preview if no file is selected
        var preview = document.getElementById("profilePicPreview");
        if (preview) {
            preview.src = "";
            preview.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var resumeId = urlParams.get("id");
    var names = urlParams.get("names");
    if (resumeId && names) {
        // taking resume data from localStorage using a key based on resumeId
        var resumeData = localStorage.getItem("resume_".concat(resumeId));
        if (resumeData) {
            var data = JSON.parse(resumeData);
            // Populate resume section with data
            document.getElementById("resumeName").textContent = data.names;
            document.getElementById("resumeEmail").textContent =
                data.email;
            document.getElementById("resumePhone").textContent =
                data.phone;
            document.getElementById("resumeBirthday").textContent =
                data.birthday;
            document.getElementById("resumeAddress").textContent =
                data.address;
            document.getElementById("resumeaboutMe").textContent =
                data.aboutMe;
            // (document.getElementById("resumeLinkedIn") as HTMLAnchorElement).href = data.linkedin;
            document.getElementById("resumeUniversity").textContent =
                data.university;
            document.getElementById("resumeDegree").textContent =
                data.degree;
            document.getElementById("resumeGradYear").textContent =
                data.gradYear;
            document.getElementById("resumeCompany").textContent =
                data.company;
            document.getElementById("resumePosition").textContent =
                data.position;
            document.getElementById("resumeDuration").textContent =
                data.duration;
            document.getElementById("resumeDescription").textContent = data.description;
            document.getElementById("resumeProject1").textContent =
                data.project1;
            document.getElementById("resumeProject1Desc").textContent = data.project1Desc;
            // Handle empty fields or defaults
            if (!data.project1 ||
                !data.project1Desc ||
                !data.company ||
                !data.position ||
                !data.duration ||
                !data.gradYear) {
                document.getElementById("resumeProject1").textContent =
                    "-";
                document.getElementById("resumeProject1Desc").textContent = "-";
                document.getElementById("resumeGradYear").textContent =
                    "-";
                document.getElementById("resumeCompany").textContent =
                    "-";
                document.getElementById("resumePosition").textContent =
                    "";
                document.getElementById("resumeDuration").textContent =
                    "-";
            }
            // Display list items
            var resumeLanguages = document.getElementById("resumeLanguages");
            resumeLanguages.innerHTML = data.languages.length
                ? data.languages.join("<br>")
                : "-";
            var resumeSoftSkills = document.getElementById("resumeSoftSkills");
            resumeSoftSkills.innerHTML = data.softSkills.length
                ? data.softSkills.join("<br>")
                : "-";
            var resumeSkills = document.getElementById("resumeSkills");
            resumeSkills.innerHTML = data.skills.length
                ? data.skills.join("<br>")
                : "-";
            // Display profile picture
            var resumeProfilePic = document.getElementById("resumeProfilePic");
            resumeProfilePic.src = data.profilePic;
            // Show the resume section and hide the form section
            document.getElementById("form-section").style.display =
                "none";
            document.getElementById("resume-section").style.display =
                "block";
            document.querySelector(".hi").style.display = "none";
        }
        else {
            // Handle case where resume data is not found
            alert("Resume data not found.");
        }
    }
});
