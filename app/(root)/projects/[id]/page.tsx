interface searchParamsTypes {
    id: string;
    title: string;
    image_path: string;
    paragraph: string;
    featured: boolean;
    topPost: boolean;
    tags: string;
    authorImage: string;
    authorName: string;
    publishDate: string;
}

const ProjectFolio = ({ searchParams }: { searchParams: searchParamsTypes }) => {

  const project = searchParams

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">{project.title}</div>
  )
}

export default ProjectFolio