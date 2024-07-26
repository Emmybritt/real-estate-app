This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash

npm  run  dev

# or

yarn  dev



```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Optimizations

- **Partial rendering**: This application renders both statically and dynamically generated contents simultaneously. The header is an example of statically generated content while the property listing is an example of dynamically generated content. By default, the page load time is as fast as the slowest API request. To solve this blocking behavior, partial rendering is employed. Partial rendering ensures that the whole page is not blocked by API requests Another advantage is the "_uninterruptible navigation_". This technique is further explained in the bullet points below.

- **Streaming:** Streaming is simply breaking a route into chunks and loading them on the browser as they get ready to be loaded. In this application, the property listing page and details page are streamed from the server and rendered when they are loaded on the browser; unblocking the header. This means the **entire page load time is reduced**, as the header is initially rendered while waiting for other parts of the application to be ready. There are 2 ways to achieve this in NextJs: creating a loading.tsx file at the root/leaf segments or using React's Suspense by wrapping the UI in Suspense and providing a fallback UI.

- **Skeleton loader:** As a fallback UI, I created skeleton loaders for the property listing page. I chose to use the Skeleton loader as it minimizes Cumulative Layout Effects and also increases speed perception.

- **Image Optimization:** As part of optimization, I used the antd image with loader set to lazy to render images. This component by default provides a fallback UI while waiting for the images to load: thus also eliminating the Cumulative Layout Effect.

- **Font Optimization:** This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

- **SEOs:** To enhance the SEOs, I have provided basic meta titles and descriptions to the pages.

## Cache/Cache Revalidation

By default, NextJS caches page contents in the browser for a while and sometimes we need to revalidate the cache. For example, when we add a new product, we need to ensure that the product list page has the latest list of products. To ensure that, I revalidated the cache after a new product is added using NextJS' _revalidateCache_ utility before redirecting the user to the products' list page.

One thing to also note is that Next.js' does Static Site Generation (SSG) by default. This means that the content of the products' listing, for instance, is generated in build time and then cached and distributed by CDN.

This becomes a problem when you add a new product because instead of returning the updated list of products, the cached content is simply returned from the server. In order to fix this, I ensured that the product list content is not cached by using the _unstable_noStore_ utility function before the API request.

## Error Handling

To handle server errors, I created error boundary UIs in _notFound.tsx_ file to handle 404/not-found errors. For instance, when you view a single product and change the product id to a wrong one from the browser address bar, the notFound UI component is rendered with a descriptive error message.

I also created a global error boundary component (_error.tsx_) at the app root to handle more generic errors across the application. You can test this by introducing an error in the endpoint URL or by turning off the internet and try accessing the page. You will see a UI with an error message and a button to reset the error.

## Technologies

1. React Testing Library and Jest for testing

2. Next.js for Server Side Rendering support

3. Axios for API requests

4. Context for global state management

## Folder Architecture

For this application, I followed the Domain Driven Design Architecture and Atomic Design principles.

## Assumptions

1. The Backend is prone to errors; hence the handling of backend errors

2. POST request data are persisted on the backend; hence the revalidation of cache on successful POST requests

3. Application is an MVP: hence less focus on cross-browser compatibilities, UI aesthetics and more focus on functionality

## Bonus

Implemented the carts functionality - users can add a product to the cart and view the added products. _LocalStorage_ is used to persist the carts' data.

## Deploy on Vercel

The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Official documentation can be found here [Next.js deployment documentation](https://nextjs.org/docs/deployment)

Next.js applications can also be deployed on various platforms beyond Vercel, including Netlify, AWS Amplify, or Heroku. After configuring a build script in the repository, the repository can be connected to the chosen deployment service. Netlify offers seamless integration with continuous deployment from Git, while AWS Amplify provides scalable hosting and CI/CD workflows. Heroku simplifies deployment with its straightforward interface. These platforms automate the deployment process, allowing one to focus on development, and ensuring the Next.js application is efficiently deployed and accessible to users.

## NOTES

- In Next.js version 13+, app routing was introduced as an alternative

to page routing. This project makes use of app routing.

- Also in the latest versions of Next.js, components are \*Server

Components\* by default.

- Data fetching for the latest version does not use getServerSideProps, getStaticProps, getInitialProps. One can directly fetch data in server-side components by making the component async.
