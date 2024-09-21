import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

const ProjectsPage = async () => {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default ProjectsPage
