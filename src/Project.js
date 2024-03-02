import "./Project.css";
import projects from "./Project.json";
import Github from "./assets/Github";
import CustomLink from "./assets/CustomLink"

export default function Project() {
    let appends = [];

    appends = projects.map((project) => {
        return (
            <>
                <div className="project" key={project.projectID}>
                    <div className="project--gallery">
                        {project.img1 && (
                            <img src={require(`${project.img1}`)} alt={project.title} />
                        )}
                        {project.img2 && (
                            <img src={require(`${project.img2}`)} alt={project.title} />
                        )}
                        {project.img3 && (
                            <img src={require(`${project.img3}`)} alt={project.title} />
                        )}
                    </div>
                    <div className="project--text">
                        <a
                            className="about--heading project--heading"
                            href={project.link}
                            target="_blank"
                        >
                            {project.title}
                        </a>

                        <div className="about--subheading project--subheading">
                            {project.sub}
                        </div>
                        <div className="about--paragraph">{project.about}</div>
                        <br />
                        <div className="project--stack">
                            <span>Stack Used | </span>
                            <img src={"https://skillicons.dev/icons?i=" + project.stack} />
                        </div>
                        <div className="hero--contact project--link">
                            <a href={project["github-link"]} target="_blank">
                                <Github /> <span>Get Code</span>
                            </a>
                            <br />
                            <a href={project["demo-link"]} target="_blank">
                                <CustomLink /> <span>Live Demo</span>
                            </a>

                        </div>
                    </div>
                </div>
            </>
        );
    });

    return (
        <>
            <div className="top-heading" id="project">
                Check out my projects... <span className="hand-down">👇</span>
            </div>
            <div className="Project--container">{appends}</div>
        </>
    );
}
