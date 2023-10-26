import { fetchProjects } from "~/lib/projects";
import { Layout } from "~/layouts";
import { Animate, List } from "~/components";
import { ListActionType } from "~/types";
import { Pill } from "~/components";
import type { GetStaticProps } from "next";

import type { ListAction, Project } from "~/types";

import profile from "~/data/profile.json";
import type { Profile } from "~/types/profile";
const { alias } = profile as unknown as Profile;

interface ProjectProps {
  stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const projects = await fetchProjects();

  return {
    props: {
      stringifiedProjects: JSON.stringify(projects),
    },
    revalidate: 3600,
  };
};

export default function ProjectsPage({
  stringifiedProjects,
}: ProjectProps): JSX.Element {
  const projects = JSON.parse(stringifiedProjects) as Array<Project>;

  return (
    <Layout.Default seo={{ title: `${alias} ─ projects` }}>
      <div className="mx-2 my-24 sm:mx-6 lg:mx-8 lg:mb-28">
        <Animate
          as="h1"
          animation={{
            opacity: [0, 1],
            scale: [0.25, 1],
          }}
          className="z-5 project-title col-start-1 row-start-1 content-center items-center justify-center self-center  text-center align-middle text-4xl font-extrabold tracking-tight text-primary-500 opacity-100 drop-shadow-xl dark:text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          <Pill.Standard>Projects</Pill.Standard>
        </Animate>

        <div className="relative mx-auto min-h-full w-full max-w-5xl">
          <List.Container>
            {projects.map((project, index) => (
              <Animate
                animation={{ y: [50, 0], opacity: [0, 1] }}
                key={index}
                transition={{
                  delay: 0.2 * index,
                }}
              >
                <List.Item
                  actions={[
                    ...(project.post
                      ? [
                          {
                            type: ListActionType.LINK,
                            external: false,
                            href: project.post,
                            icon: "feather:edit-3",
                            label: `Blog post about ${project.name}`,
                          } as ListAction,
                        ]
                      : []),
                    ...(project.homepage
                      ? [
                          {
                            type: ListActionType.LINK,
                            href: project.homepage,
                            icon: "feather:home",
                            label: `${project.name} homepage`,
                          } as ListAction,
                        ]
                      : []),
                    {
                      type: ListActionType.LINK,
                      href: project.url,
                      icon: "feather:github",
                      label: "GitHub Repository",
                    },
                  ]}
                  description={project.description}
                  title={project.name}
                />
              </Animate>
            ))}
          </List.Container>
        </div>
      </div>
    </Layout.Default>
  );
}
