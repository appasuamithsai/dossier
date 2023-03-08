import { useEffect, useState } from "react";
import { converttoBlob } from "./services";

 const postcertifications= [
    {
      id: 0,
      name: "Management Certificate",
      Image: "https://i.ibb.co/tCZ4Vhm/Rectangle-2686-1.png",
    },
    {
      id: 1,
      name: "IT Certification",
      Image: "https://i.ibb.co/wKnSn05/Rectangle-2687-1.png",
    },
  ]

 
export  const certificationsBlob = postcertifications

const posteducationDetails=[
    {
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgB7ZVPTsJAFMa/Ny373kC8ATdQboAnELb8iUTi2rAXRSkJSziBeAOOgCegN9C97Xu+1oTU2pi204ULf0kz7Uzn68yb70tpNJgcQGiiDgSBqU0sRrUMauZf0B4387wV4BHl6BJwmS8oaKUHC3KmdjmS2bKgPN/nZLZMOyFsUAICedo08wUpqUcXFmRqKC+L5X0HJRgOJ+t03Wk0nGQLt0M5Wnp5yF0hkhK/EsseBRBjTghynu77YWwDfkdBHGIv25ezQnNbND+c47I/kGWRQBfWXvgzcsLoVO83VoIfEbe18dQdz9Jwr3x/1o0DUUlQ/bZfreYBCR70scMi48HgegzmTSVBBr4cQHI8XQf0ln6n0qEIqCdx7oHp03JmV8NkkiHx/bt2GEbrfv+mZS0oLNs4sg3XORgTdqwFf8PVOlxodr1CbxvKjaXDvItgeqLjrvpoC0vmaiVt1sk3UZHkZ6apyfZXtA1PdWdjR1NDTEF67BNaMH8nq9JFZgAAAABJRU5ErkJggg==",
      "collegeName": "California Institute of Technology",
      "degree": "Master of Sciences in Software Systems",
      "startDate": "2010",
      "endDate": "2012"
    },
    {
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIpSURBVHgBtZVPctowFMafLDGTJUdwb9AjmBvkBoEdQ0wqQjtdYpadaYrbUoYd5AbpCUJuwA3CEbxtkaW8F0fECQZkh3wb/5H9frL1vU8AFSSlrLfbX32oIA9K6iK8HKSK39e4ur04759BSTHXB8Owf8oMjPAN/8WAgRUWiX79ubp2qXMQGIYyYMAHeBrsfRDBhkFrPL5aQBVgp/PlI/f06CBoGzxfp2I4nX5bOQHJEErxGAdKr48LmOVBWnmfDDCJl3U4khiY6L+qXVvwI5Ccd2zQC+WMxTL3GXQf8+G9ZczfzS9FcITgs+ODTZIdWd0ALDaNj3aOeKobeNOpn5xQAEMu9AfMl6W9V9gWsi19JXj0BqferFXam07jFV10w8+3iA/oC/c2fgYWM3RaAA6igngYvm7+PLAwSyld6BjjDMfj7w3QpoULvtoFwlkvsVgDQQ0LQ08ERc+K4gJi0D3vz6yVf09+zPH2vNu5bOLg4NlYJmGGyXyO0mQ9ECOdmWXhBHyi+oYgYb+5VqJFjWvB5OjHl4WOUYkF2cw19HMLYPuBzwpqQt3jF2+iihxtByXui6lQlLmnDrWcgJkYNBHctOCTk38JRWEKKoISKgTiL7lju3YJAnMV4CZMMbgnCvWdPUu16nker2udJjvbomovkvWxcG8yiZdQON8DIntj5M0ORd6uHiwNtNpuCUsyuNOzHoJuXOo4A7fBgGHMfuYd+26i9aUNGyroAeyzC9ZZ5mqPAAAAAElFTkSuQmCC",
      "collegeName": "University of Pennsylvania",
      "degree": "University of Pennsylvania",
      "startDate": "2006",
      "endDate": "2010"
    }
]

export  const educationDetailsBlob = posteducationDetails

const FirstPageInResume="https://s.gravatar.com/avatar/bb9cd1a366618e9bb47ae161ad270cd4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpe.png"

export  const FirstPageInResumeBlob = FirstPageInResume
const PersonalDetails=["Hobbies","Cricket"]

export  const PersonalDetailsBlob =PersonalDetails
const stakeholderData=[
    {
      "id": 1,
      "name": "Brainstorming",
      "description": "Brainstorming Sessions with Stakeholders",
      "isColored": true,
      "position": 1
    },
    {
      "id": 2,
      "name": "Nps",
      "description": "NPS > 9+",
      "isColored": true,
      "position": 2
    },
    {
      "id": 3,
      "name": "Feedback",
      "description": "Feedback on Client team members request",
      "isColored": true,
      "position": 3
    }
  ]

export  const stakeholderDataBlob = stakeholderData


const WorkExperience=[
  "Highly experienced in Agile- Scrum practices\nwith a proven track record of delivering\nsignificant business value within budget\nquickly and throughout the project.",
  "Proficient in Project Management Life Cycle\ninvolving analysis, design, development,\ndeployment, debugging, support, testing,\ndocumentation, implementation and\nmaintenance of software applications.",
  "12+ years of experience in Agile and Waterfall\nsoftware development life cycle, transforming\nteams from waterfall to Agile. Proven experience\nin project management methodologies and\nProject Life cycle.",
]

export  const workExperienceBlob = WorkExperience
const sliderContents= [
  {
    id: 0,
    img: "https://i.ibb.co/G5ZFdVC/screen1.png",
    title: "1.Cover",
  },
  {
    id: 1,
    img: "https://i.ibb.co/ZHfJ6bd/Screen-2.png",
    title: "2.Personal Details",
  },
  {
    id: 2,
    img: "https://i.ibb.co/nMdmNPR/Screen-3.png",
    title: "3.Education Details",
  },
  {
    id: 3,
    img: "https://i.ibb.co/8Xr3QLQ/Screen-4.png",
    title: "4.Experience Details",
  },
  {
    id: 4,
    img: "https://i.ibb.co/mRzPBPv/Screen-5.png",
    title: "5.Certifications",
  },
  {
    id: 5,
    img: "https://i.ibb.co/RHHwhpC/Screen-6.png",
    title: "6.1 Accomplishments",
  },
  {
    id: 6,
    img: "https://i.ibb.co/nwxhhFN/Screen-7.png",
    title: "6.2 Accomplishments",
  },
  {
    id: 7,
    img: "https://i.ibb.co/8Xt64bc/Screen-8.png",
    title: "6.3 Accomplishments",
  },
  {
    id: 8,
    img: "https://i.ibb.co/41K0bn3/Screen-9.png",
    title: "6.4 Accomplishments",
  },
  {
    id: 9,
    img: "https://i.ibb.co/BcxdGjH/Screen-10.png",
    title: "6.5 Accomplishments",
  },
  {
    id: 10,
    img: "https://i.ibb.co/1Tymxcj/Screen-11.png",
    title: " 6.6 Accomplishments",
  },
]

export  const ImagesBlob = sliderContents