export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e17adab45b7b501998647af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rask9ciq',
                  apiId: '8272724f-1108-48d7-a606-7bd91c43a824'
                },
                {
                  buildHookId: '5e17adab2f3db17e37085574',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-w5vskhep',
                  apiId: '4a94a26b-627c-4c07-b019-fabcc765cf66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UltimateMercer/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-w5vskhep.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
