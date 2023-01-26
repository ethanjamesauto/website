import { useEffect, useState } from "react";
import axios from "axios";
import YAML from 'yaml'

import Navigation from "../../modules/Nav/Nav.jsx"
import ProjectBox from "../../modules/ProjectBox/ProjectBox.jsx"

import "./projects.css"

export default function Projects() {
  const url =
    "https://raw.githubusercontent.com/Amp-Lab-at-VT/AmpWebV2/master/repos.yaml";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      var items = YAML.parseDocument(response.data).contents.items;
      var projectsDict = {}
      for (var i = 0; i < items.length; i++) {
        projectsDict[items[i]["key"].value] = items[i]["value"].value
      }
      console.log(projectsDict)
      setProjects(projectsDict)
    });
  }, []);

  return (
    <div class="App">
      <Navigation></Navigation>
      <header class="App-header">
        <text>Projects</text>
        <div className="App">
          {/* <text>{JSON.stringify(projects)}</text> */}
          
            {Object.entries(projects).map( ([key, value]) => 
            <ProjectBox href = {value} name = {key}></ProjectBox>)}

        </div>
      </header>
    </div>
  );
}
