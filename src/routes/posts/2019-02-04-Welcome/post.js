export default {
  title: `Welcome to ProgOps!`,
  tags: ['Programming', 'Operations', 'DevOps'],
  spoiler: "This blog will deal exclusively with technology and especially with Programming, Operations, Devops and everything between them.",
  getContent: () => import('./document.mdx'),
}
