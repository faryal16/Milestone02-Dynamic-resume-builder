// Function to validate basic information
function validateBasicInfo(): boolean {
  const requiredFields = [
    "name",
    "email",
    "phone",
    "birthday",
    "address",
    "profilePicInput",
    "aboutme",
  ];

  for (const fieldId of requiredFields) {
    const fieldElement = document.getElementById(
      fieldId
    ) as HTMLInputElement | null;
    if (!fieldElement) {
      console.error(`Element with ID "${fieldId}" not found.`);
      return false;
    }

    const fieldValue = fieldElement.value?.trim();
    if (!fieldValue) {
      alert(
        `${
          fieldId.charAt(0).toUpperCase() +
          fieldId.slice(1).replace(/([A-Z])/g, " $1")
        } is required.`
      );
      return false;
    }
  }

  const languagesList = document.getElementById(
    "languagesList"
  ) as HTMLUListElement;
  if (!languagesList || languagesList.children.length == 0) {
    alert("At least one language is required.");
    return false;
  }

  const skillsList = document.getElementById("skillsList") as HTMLUListElement;
  if (!skillsList || skillsList.children.length === 0) {
    alert("At least one skill is required.");
    return false;
  }

  return true;
}

function generateResume(): void {
  if (!validateBasicInfo()) return; // Stop if validation fails

  const profilePicPreview = document.getElementById(
    "profilePicPreview"
  ) as HTMLImageElement;
  const profilePic = document.getElementById(
    "resumeProfilePic"
  ) as HTMLImageElement;
  profilePic.src = profilePicPreview.src;

  const names = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const birthday = (document.getElementById("birthday") as HTMLInputElement)
    .value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const university = (document.getElementById("university") as HTMLInputElement)
    .value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const aboutMe = (document.getElementById("aboutme") as HTMLInputElement)
    .value;
  const gradYear = (document.getElementById("gradYear") as HTMLInputElement)
    .value;

  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const position = (document.getElementById("position") as HTMLInputElement)
    .value;
  const duration = (document.getElementById("duration") as HTMLInputElement)
    .value;
  const description = (
    document.getElementById("description") as HTMLInputElement
  ).value;
  const project1 = (document.getElementById("project1") as HTMLInputElement)
    .value;
  const project1Desc = (
    document.getElementById("project1Desc") as HTMLInputElement
  ).value;

  
  // Update resume preview
  (document.getElementById("resumeName") as HTMLHeadingElement).textContent =
    names;
  (document.getElementById("resumeEmail") as HTMLElement).textContent = email;
  (document.getElementById("resumePhone") as HTMLElement).textContent = phone;
  (document.getElementById("resumeBirthday") as HTMLElement).textContent =
    birthday;
  (document.getElementById("resumeAddress") as HTMLElement).textContent =
    address;
  (document.getElementById("resumeaboutMe") as HTMLElement).textContent =
    aboutMe; 

  (document.getElementById("resumeUniversity") as HTMLElement).textContent =
    university;
  (document.getElementById("resumeDegree") as HTMLElement).textContent = degree;
  (document.getElementById("resumeGradYear") as HTMLElement).textContent =
    gradYear;
  (document.getElementById("resumeCompany") as HTMLElement).textContent =
    company;
  (document.getElementById("resumePosition") as HTMLElement).textContent =
    position;
  (document.getElementById("resumeDuration") as HTMLElement).textContent =
    duration;
  (document.getElementById("resumeDescription") as HTMLElement).textContent =
    description;
  (document.getElementById("resumeProject1") as HTMLElement).textContent =
    project1;
  (document.getElementById("resumeProject1Desc") as HTMLElement).textContent =
    project1Desc;

  if (
    !project1 ||
    !project1Desc ||
    !company ||
    !position ||
    !duration ||
    !gradYear
  ) {
    (document.getElementById("resumeProject1") as HTMLElement).textContent =
      "-";
    (document.getElementById("resumeProject1Desc") as HTMLElement).textContent =
      "-";
    (document.getElementById("resumeGradYear") as HTMLElement).textContent =
      "-";
    (document.getElementById("resumeCompany") as HTMLElement).textContent = "-";
    (document.getElementById("resumePosition") as HTMLElement).textContent = "";
    (document.getElementById("resumeDuration") as HTMLElement).textContent =
      "-";
  }

  // remove btn and li class
  const listitem = document.querySelectorAll(
    ".list-item .remove-btn"
  ) as NodeListOf<HTMLLIElement>;
  listitem.forEach((item) => {
    item.remove();
  });

  // Languages
  const languagesList = document.getElementById(
    "languagesList"
  ) as HTMLUListElement;
  const resumeLanguages = document.getElementById(
    "resumeLanguages"
  ) as HTMLElement;
  resumeLanguages.innerHTML = languagesList.innerHTML;

  // Soft Skills
  const softSkillsList = document.getElementById(
    "softSkillsList"
  ) as HTMLUListElement;
  const resumeSoftSkills = document.getElementById(
    "resumeSoftSkills"
  ) as HTMLElement;
  resumeSoftSkills.innerHTML = softSkillsList.innerHTML;
  if (!softSkillsList.innerHTML) {
    resumeSoftSkills.innerHTML = "-";
  }

  // Skills
  const skillsList = document.getElementById("skillsList") as HTMLUListElement;
  const resumeSkills = document.getElementById("resumeSkills") as HTMLElement;
  resumeSkills.innerHTML = skillsList.innerHTML;

  /// Create a unique identifier for the resume
  const resumeId = Date.now().toString(); // Using timestamp as a simple unique ID
  const resumeUrl = `?id=${resumeId}&names=${encodeURIComponent(names)}`;

  // Display the resume URL
  const resumeUrlElement = document.getElementById("resumeUrl") as HTMLElement;
  resumeUrlElement.innerHTML = `Your Resume Url: <a href="${resumeUrl}" target="_blank">${resumeUrl}</a>`;

  // Save list items
  const languagesLis = document.getElementById(
    "languagesList"
  ) as HTMLUListElement;
  const skillsLis = document.getElementById("skillsList") as HTMLUListElement;
  const softSkillsLis = document.getElementById(
    "softSkillsList"
  ) as HTMLUListElement;

  const languages = Array.from(languagesLis.children).map(
    (li) => li.textContent?.trim() || ""
  );
  const skills = Array.from(skillsLis.children).map(
    (li) => li.textContent?.trim() || ""
  );
  const softSkills = Array.from(softSkillsLis.children).map(
    (li) => li.textContent?.trim() || ""
  );

  // Save resume data to localStorage
  const resumeData = {
    profilePic: profilePicPreview.src,
    names,
    email,
    phone,
    birthday,
    address,
    university,
    degree,
    aboutMe,
    gradYear,
    company,
    position,
    duration,
    description,
    project1,
    project1Desc,
    languages,
    skills,
    softSkills,
  };
  localStorage.setItem(`resume_${resumeId}`, JSON.stringify(resumeData));

  // Switch to the resume section
  (document.getElementById("form-section") as HTMLElement).style.display =
    "none";
  (document.getElementById("resume-section") as HTMLElement).style.display =
    "block";
}

function addLanguages(): void {
  const languagesInput = document.getElementById(
    "languages"
  ) as HTMLInputElement;
  const languagesList = document.getElementById(
    "languagesList"
  ) as HTMLUListElement;
  const languages = languagesInput.value.trim();

  if (languages) {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const span = document.createElement("span");
    span.textContent = languages;
    li.appendChild(span);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove language";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
      languagesList.removeChild(li); // Remove the li element
    };

    // Append the button to the li
    li.appendChild(removeBtn);

    languagesList.appendChild(li);
    languagesInput.value = ""; // Clear input field
  }
}

function addSoftSkills(): void {
  const softSkillsInput = document.getElementById(
    "softSkills"
  ) as HTMLInputElement;
  const softSkillsList = document.getElementById(
    "softSkillsList"
  ) as HTMLUListElement;
  const skill = softSkillsInput.value.trim();

  if (skill) {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const span = document.createElement("span");
    span.textContent = skill;
    li.appendChild(span);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove language";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
      softSkillsList.removeChild(li); // Remove the li element
    };

    // Append the button to the li
    li.appendChild(removeBtn);

    softSkillsList.appendChild(li);
    softSkillsInput.value = ""; // Clear input field
  } else {
    if (
      softSkillsList.children.length === 0 ||
      softSkillsList.lastElementChild?.textContent !== "-"
    ) {
      const li = document.createElement("li");
      li.textContent = "-";
      softSkillsList.appendChild(li);
    }
  }
}

function addSkills(): void {
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const skillsList = document.getElementById("skillsList") as HTMLUListElement;
  const skill = skillsInput.value.trim();

  if (skill) {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const span = document.createElement("span");
    span.textContent = skill;
    li.appendChild(span);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove language";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
      skillsList.removeChild(li); // Remove the li element
    };

    // Append the button to the li
    li.appendChild(removeBtn);
    skillsList.appendChild(li);
    skillsInput.value = ""; // Clear input field
  }
}

function editResume(): void {
  (document.getElementById("form-section") as HTMLElement).style.display =
    "block";
  (document.getElementById("resume-section") as HTMLElement).style.display =
    "none";
}

function downloadPDF(): void {
  window.print();
}

// Profile picture preview logic
const profilePicInput = document.getElementById(
  "profilePicInput"
) as HTMLInputElement;
profilePicInput.addEventListener("change", function () {
  const file = profilePicInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const preview = document.getElementById(
        "profilePicPreview"
      ) as HTMLImageElement;
      preview.src = e.target?.result as string;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    // Clear the preview if no file is selected
    const preview = document.getElementById(
      "profilePicPreview"
    ) as HTMLImageElement;
    if (preview) {
      preview.src = "";
      preview.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const resumeId = urlParams.get("id");
  const names = urlParams.get("names");

  if (resumeId && names) {
    // taking resume data from localStorage using a key based on resumeId
    const resumeData = localStorage.getItem(`resume_${resumeId}`);

    if (resumeData) {
      const data = JSON.parse(resumeData);

      // Populate resume section with data
      (
        document.getElementById("resumeName") as HTMLHeadingElement
      ).textContent = data.names;
      (document.getElementById("resumeEmail") as HTMLElement).textContent =
        data.email;
      (document.getElementById("resumePhone") as HTMLElement).textContent =
        data.phone;
      (document.getElementById("resumeBirthday") as HTMLElement).textContent =
        data.birthday;
      (document.getElementById("resumeAddress") as HTMLElement).textContent =
        data.address;
      (document.getElementById("resumeaboutMe") as HTMLElement).textContent =
        data.aboutMe;
      // (document.getElementById("resumeLinkedIn") as HTMLAnchorElement).href = data.linkedin;

      (document.getElementById("resumeUniversity") as HTMLElement).textContent =
        data.university;
      (document.getElementById("resumeDegree") as HTMLElement).textContent =
        data.degree;
      (document.getElementById("resumeGradYear") as HTMLElement).textContent =
        data.gradYear;
      (document.getElementById("resumeCompany") as HTMLElement).textContent =
        data.company;
      (document.getElementById("resumePosition") as HTMLElement).textContent =
        data.position;
      (document.getElementById("resumeDuration") as HTMLElement).textContent =
        data.duration;
      (
        document.getElementById("resumeDescription") as HTMLElement
      ).textContent = data.description;
      (document.getElementById("resumeProject1") as HTMLElement).textContent =
        data.project1;
      (
        document.getElementById("resumeProject1Desc") as HTMLElement
      ).textContent = data.project1Desc;
      // Handle empty fields or defaults
      if (
        !data.project1 ||
        !data.project1Desc ||
        !data.company ||
        !data.position ||
        !data.duration ||
        !data.gradYear
      ) {
        (document.getElementById("resumeProject1") as HTMLElement).textContent =
          "-";
        (
          document.getElementById("resumeProject1Desc") as HTMLElement
        ).textContent = "-";
        (document.getElementById("resumeGradYear") as HTMLElement).textContent =
          "-";
        (document.getElementById("resumeCompany") as HTMLElement).textContent =
          "-";
        (document.getElementById("resumePosition") as HTMLElement).textContent =
          "";
        (document.getElementById("resumeDuration") as HTMLElement).textContent =
          "-";
      }

      // Display list items
      const resumeLanguages = document.getElementById(
        "resumeLanguages"
      ) as HTMLElement;
      resumeLanguages.innerHTML = data.languages.length
        ? data.languages.join("<br>")
        : "-";

      const resumeSoftSkills = document.getElementById(
        "resumeSoftSkills"
      ) as HTMLElement;
      resumeSoftSkills.innerHTML = data.softSkills.length
        ? data.softSkills.join("<br>")
        : "-";

      const resumeSkills = document.getElementById(
        "resumeSkills"
      ) as HTMLElement;
      resumeSkills.innerHTML = data.skills.length
        ? data.skills.join("<br>")
        : "-";

      // Display profile picture
      const resumeProfilePic = document.getElementById(
        "resumeProfilePic"
      ) as HTMLImageElement;
      resumeProfilePic.src = data.profilePic;

      // Show the resume section and hide the form section
      (document.getElementById("form-section") as HTMLElement).style.display =
        "none";
      (document.getElementById("resume-section") as HTMLElement).style.display =
        "block";
      (document.querySelector(".hi") as HTMLElement).style.display = "none";
    } else {
      // Handle case where resume data is not found
      alert("Resume data not found.");
    }
  }
});
