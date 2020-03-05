export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e60ce92bd8239a80cf8d8ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-f94kuhbi',
                  apiId: '8c501220-2476-48c8-84b1-42a5242b9def'
                },
                {
                  buildHookId: '5e60ce92368c81dd7072ea08',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tic7bte3',
                  apiId: '29ca83cf-2928-4525-b603-d89d51793626'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tom-c/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tic7bte3.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
