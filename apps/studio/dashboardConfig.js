export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'jespmar/sanity-angular-tailwindcss-website2'
      }
    },
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
                  buildHookId: '6135b4279d12cd19a24cab4c',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-2-studio',
                  apiId: 'cef0dab9-399b-4258-9d6e-59612cb97fd4'
                },
                {
                  buildHookId: '6135b4279d12cd1a924c9955',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-2',
                  apiId: 'f9206661-b471-4129-bf55-a764284f84cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jespmar/sanity-angular-tailwindcss-website2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
