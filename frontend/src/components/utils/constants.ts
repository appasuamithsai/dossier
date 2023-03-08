import DAILY_SRUCM_IMAGE from "../../assets/images/dailyscrum.png";
import SPRINT_PLANNING_IMAGE from "../../assets/images/sprintplan.png";
import SPRINT_REVIEW_IMAGE from "../../assets/images/review.png";
import TEAM_IMAGE from "../../assets/images/team.png";
import RESOURCE_IMAGE from "../../assets/images/resource.png";
import ESCALATIONS_IMAGE from "../../assets/images/feedback.png";
import DELIVERABLES_IMAGE from "../../assets/images/deliverables.png";
import AUTOMATION_IMAGE from "../../assets/images/automation.png";
import TEST_CASE_IMAGE from "../../assets/images/testcase.png";
import TESTING_IMAGE from "../../assets/images/reports.png";
import CIRCLE_IMAGE from "../../assets/images/circle.png";
import SKY_FLOW_IMAGE1 from "../../assets/images/skyflow1.png";
import SKY_FLOW_IMAGE2 from "../../assets/images/skyflow2.png";
import SKY_FLOW_IMAGE3 from "../../assets/images/skyflow3.png";
import { EducationUniversityDetails } from "../organisms/EducationDetails";
import { StepProps } from "../molecules/CreatePortfolioStep";
import CERTIFICATE_IMAGE1 from "../../assets/images/programcertificate.png";
import CERTIFICATE_IMAGE2 from "../../assets/images/projectcertificate.png";

import edit2 from "../../assets/icons/edit2.svg";
import addSection from "../../assets/icons/addSection.svg";
import trash2 from "../../assets/icons/trash2.svg";
import more1 from "../../assets/icons/more1.svg";
import group1 from "../../assets/icons/groups/group1.svg";
import group2 from "../../assets/icons/groups/group2.svg";
import group3 from "../../assets/icons/groups/group3.svg";
import group4 from "../../assets/icons/groups/group4.svg";

import userIcon from "../../assets/icons/userIcon.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import { CertificateDetails } from "../organisms/Certifications";

export const GRAPH_TEMPLATE = {
  heading: "SKYFLOW VALUATION - REVENUE",
};

export const ACCOMPLISHMENTS = "ACCOMPLISHMENTS";

export const SPRINT_MANAGEMENT = "SPRINT MANAGEMENT";

export const EXPERIENCE_DETAILS = "EXPERIENCE DETAILS";

export const RISK_MANAGEMENT = "RISK MANAGEMENT";

export const PERSONAL_DETAILS = "PERSONAL DETAILS";

export const EDUCATION_DETAILS = "EDUCATION DETAILS";

export const ENABLING_QA = "ENABLING QA";

export const ADD_CERTIFICATE = "Add Certificate";

export const ENTER_MOBILE_NUMBER = "Enter your mobile number";

export const MOBILE_NUMBER = "Mobile number";

export const OTP = "OTP";

export const ENTER_OTP = "Enter the OTP to verify the details";

export const VERIFY = "Verify";

export const SIGN_UP_ERROR = "Enter your details correctly";

export const SIGN_IN_ERROR = "Wrong email or password.";

export const GET_OTP = "Get OTP";

export const SIGN_IN = "Sign in";

export const SIGN_IN_WITH = "Sign in with";

export const CONTINUE = "Continue";

export const OR = "or";

export const EMAIL = "Email id";

export const FIRST_NAME = "First Name";

export const LAST_NAME = "Last Name";

export const SIGN_UP_WITH = "Sign up with";

export const SIGN_UP = "Sign up";

export const FULL_NAME = "Peter Parker";

export const PASSWORD = "Password";

export const DESIGNATION = "Designation - Project Manager";

export const PERSONAL_NUMBER = "Mobile number - +1 330-617-3324";

export const GENDER = "Gender - Male";

export const CREATE_PORTFOLIO1 = "Create Portfolio";

export const CREATE_PORTFOLIO2 = "How would you like to create?";

export const CREATE_PORTFOLIO3 = "Create a portfolio to your board";

export const SPRINT_ARRAY: Array<{
  name: string;
  outerImage: any;
  innerImage: any;
}> = [
  {
    name: "Sprint Planning",
    outerImage: CIRCLE_IMAGE,
    innerImage: SPRINT_PLANNING_IMAGE,
  },
  {
    name: "Daily Scrum",
    outerImage: CIRCLE_IMAGE,
    innerImage: DAILY_SRUCM_IMAGE,
  },
  {
    name: "Sprint Review",
    outerImage: CIRCLE_IMAGE,
    innerImage: SPRINT_REVIEW_IMAGE,
  },
];
export const EXPERIENCE_ARRAY: Array<string> = [
  "Highly experienced in Agile- Scrum practices\nwith a proven track record of delivering\nsignificant business value within budget\nquickly and throughout the project.",
  "Proficient in Project Management Life Cycle\ninvolving analysis, design, development,\ndeployment, debugging, support, testing,\ndocumentation, implementation and\nmaintenance of software applications.",
  "12+ years of experience in Agile and Waterfall\nsoftware development life cycle, transforming\nteams from waterfall to Agile. Proven experience\nin project management methodologies and\nProject Life cycle.",
];
export const RISK_MGMT_ARRAY: Array<{
  name: string;
  outerImage: any;
  innerImage: any;
}> = [
  {
    name: "0 Escalations",
    outerImage: CIRCLE_IMAGE,
    innerImage: ESCALATIONS_IMAGE,
  },
  {
    name: "<2 late deliveries",
    outerImage: CIRCLE_IMAGE,
    innerImage: DELIVERABLES_IMAGE,
  },
  {
    name: "Resource Rotation\n(Reduced attrition)",
    outerImage: CIRCLE_IMAGE,
    innerImage: RESOURCE_IMAGE,
  },
  {
    name: "Shielded Team",
    outerImage: CIRCLE_IMAGE,
    innerImage: TEAM_IMAGE,
  },
];
export const ENABLING_QA_ARRAY: Array<{
  name: string;
  outerImage: any;
  innerImage: any;
}> = [
  {
    name: "Automation Testing",
    outerImage: CIRCLE_IMAGE,
    innerImage: AUTOMATION_IMAGE,
  },
  {
    name: "Manual Testing",
    outerImage: CIRCLE_IMAGE,
    innerImage: TESTING_IMAGE,
  },
  {
    name: "Lighthouse Reports",
    outerImage: CIRCLE_IMAGE,
    innerImage: DELIVERABLES_IMAGE,
  },
  {
    name: "Test case Identification",
    outerImage: CIRCLE_IMAGE,
    innerImage: TEST_CASE_IMAGE,
  },
];
export const SKY_FLOW_ARRAY: Array<{
  image: any;
  date: string;
  heading: string;
  body: string;
}> = [
  {
    image: SKY_FLOW_IMAGE1,
    date: "2021 - Jul",
    heading: "Revenue Growth",
    body: "Inroduction to billing\nprepared the SOW\n6 month SOW\n2021 second half = 564k\nAdded resouces, off boarded",
  },
  {
    image: SKY_FLOW_IMAGE2,
    date: "2021 - Sep",
    heading: "Revenue Growth",
    body: "Prepared the SOW\n3 months additional SOW\n2021 additional = $32K\nAdded 2 new resources\nSr. Dev and Jr. Dev ratio = 5:8",
  },
  {
    image: SKY_FLOW_IMAGE3,
    date: "2022 - Jan",
    heading: "Revenue Growth",
    body: "Prepared the SOW\nNegotiated the SOW\n1 Year SOW\n2022 = $1.36M\n2021 = $1.12M\nAdded 2 new resources\nSr. Dev & Jr. Dev ratio = 6:7\nBilling Change\nJr. Dev = $29 (25 to 29)\nSr. Tech Lead = $60 (50 to 60)",
  },
];

export const UNIVERSITY_ARRAY: Array<string> = [
  "University of San Francisco",
  "University of Memphis",
  "University of Iowa",
];

export const DEGREE_ARRAY: Array<string> = [
  "Bachelor of Business Administration",
  "Bachelor of commerce",
  "Bachelor of engineering",
];

export const FIELD_OF_STUDY: Array<string> = [
  "Management of Information System",
  "Marketing Management",
  "Business Administration & Management",
];

export const EDUCATION_ARRAY: Array<EducationUniversityDetails> = [
  {
    id:0,
    image: "",
    collegeName: "",
    degree: "",
    startDate: "",
    endDate: "",
  }
];
export const steps: StepProps[] = [
  {
    stepDescription:
      "How many years of  professional experience do you have in total",
    chips: [
      { name: "0 -1 years", isSelected: false },
      { name: "2 -3 years", isSelected: true },
      { name: "4 -5 years", isSelected: false },
      { name: "6 - 8 years", isSelected: false },
      { name: "7- 10 years", isSelected: false },
    ],
    activeStep: 1,
    lastChipLabel: "More",
  },
  {
    stepDescription: "What kind of Portfolio do you prefer?",
    chips: [
      { name: "Fintech", isSelected: true },
      { name: "Healthcare", isSelected: false },
      { name: "Sales ", isSelected: false },
      { name: "Aeronautical", isSelected: false },
      { name: "Hospitality", isSelected: false },
    ],
    activeStep: 2,
    lastChipLabel: "More",
  },
  {
    stepDescription: "How would you describe your industry? ",
    chips: [
      { name: "Fintech", isSelected: true },
      { name: "Health", isSelected: false },
      { name: "Sales & CRM ", isSelected: false },
      { name: "IT", isSelected: false },
      { name: "Marketing", isSelected: false },
    ],
    activeStep: 3,
    lastChipLabel: "Others",
  },
  {
    stepDescription: "How would you describe your designation? ",
    chips: [
      { name: "Product Manager", isSelected: false },
      { name: "Project Manager", isSelected: true },
      { name: "UI UX Designer", isSelected: false },
      { name: "Full Stack Developer", isSelected: false },
    ],
    activeStep: 4,
    lastChipLabel: "Others",
  },
  {
    stepDescription: "Choose the colors you would like your Portfolio to have",
    chips: [
      { name: "Blue", isSelected: false },
      { name: "Red", isSelected: false },
      { name: "Orange ", isSelected: true },
      { name: "Pink", isSelected: false },
      { name: "Black & White", isSelected: false },
    ],
    activeStep: 5,
    lastChipLabel: "More",
  },
];

export const userName = "Peter";

export const appDescription =
  "Thanks for signing up with Dossier.In order for us to provide you with the most effective guidance during your portfolio creation, we would appreciate it if you answered the following questions:";

export const CERTIFICATIONS_ARRAY: Array<CertificateDetails> = [
  {
    id:0,
    name: "Loading",
    Image: "Image",
  },
  {
    id:1,
    name: "Loading",
    Image: "Image",
  },
];

export let stakeHolderIcons = [
  {
    name: "Brainstorming",
    description: "Brainstorming Sessions with Stakeholders",
    isColored: true,
  },
  {
    name: "Nps",
    description: "NPS > 9+",
    isColored: true,
  },
  {
    name: "Feedback",
    description: "Feedback on Client team members request",
    isColored: true,
  },
];

export const stakeHolderToolbarIconsSrc = [edit2, addSection, trash2, more1];

export const dropDownIconGroups = [group1, group2, group3, group4];

export const CATEGORY_ARRAY: Array<string> = [
  "Awards",
  "Accomplishments",
  "Education",
];


export const userMenu = [
  {
    name: "My Profile",
    src: userIcon,
  },
  {
    name: "Settings",
    src: settingsIcon,
  },
  {
    name: "Logout",
    src: logoutIcon,
  },
];

export const startCustomizing = {
  title: "DOSSIER",
  name: "Hey Peter!",
  label: "You are all set to go.",
  button: "Start Customizing",
};

export const slideScreensNames=
  [
    "FirstPageInResume",
    "PersonalDetails",
    "EducationDetails",
    "ExperienceDetalis",
    "Certifications",
    "ImageAndNameSlideContent1",
    "ImageAndNameSlideContent2",
    "ImageAndNameSlideContent3",
    "Accomplishmnets",
    "Graph",
    "SkyFlowValuation",
    "Awards"
  ]

  export const EDUCATION_DETAILS_SLIDE = "EducationDetails";
  export const EXPERIENCE_DETAILS_SLIDE = "ExperienceDetalis";
  export const tempId = "62bc3cac53cb0e073428dec5";
  export const PERSONAL_DESCRIPTION=
  "Creative professional with extensive project/program management experience and facilitating customer/partner relationships. Provenability to manage cross functional relationships, manage strategicpartnerships. Good project / program managementskills. Friendlypersonality, good work ethics, high level of customer service with a  can do positive attitude"
  export const USER_ACCOMPLISHMENTS=[
    "R&d excellence award from NCR(I) Pvt Ltd.",
    "10 years of service award for dedicated service at NCR",
    "Created & deployed new processes/template/guidelines/checklists for improving Product Quality",
  ]
  