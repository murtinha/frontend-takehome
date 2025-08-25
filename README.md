## CreativeMode Frontend Takehome Exercise

Your goal is to implement the item generation page for CreativeMode. The designs for this page can be found here: https://www.figma.com/design/FAII8jUkKDm4Vp5EU7BTHR/CreativeMode-Takehome?node-id=8001-6389&t=ZO5aDGBBF2i6WPsf-1 and to design and implement the requisite backend via either a tRPC backend or Server Side Actions.

The requirements for this page are as follows:

- The page should be responsive and work on both desktop and mobile devices (50% of our users are on mobile)
- This page should be built using Next.js and Tailwind CSS (the Tailwind config provided should match the Figma, but it is quite cluttered so you may need to clean it up)
- You should implement the relevant Server Side Actions or a tRPC backend to handle mocked the item generation
  - For the backend, you can assume there is a separate generation service that will, after some time, return a generated item. You can mock this service call as well as mock the data.
  - The UX should smoothly handle the generation process.
- The frontend should have appropriate state management (using our mocked backend, don't worry about a database or otherwise persisting state past one session)
