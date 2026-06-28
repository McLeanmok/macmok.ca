# McLean Mylymok Website Production Standards

This file contains all the coding standards for my website.
---

## General 
- All repeatable content that might be used across multiple pages, you need to create a JSON loop
    - If creating content that requires its own URL path, best to build a content type
- Every page gets its own 'media' folder 
- If using a repeatable element (collection of markup), make a component 
- If using external code, properly reference it with the title, author, site, and URL
- Leave insightful comments throughout code for readability 
- Clean Code

## Source Control
- Make commits to the Github repo regularly 
- Breaking changes/major updates need to be done on the beta branch, than merge onto main
* When working on main, website should be deployed regularly
## HTML
- semantic HTML 
- Minimize extra wrapper div tags 
- Keep acessabillity in mind -- ARIA
- Image standards 
    - Wrap all informational images in Figure elements 
    - Include accurate alt text
    - Include title attributes 
    - If using a image from an external source by an author that's not family, refrence it with the title, author, publish date, and url. Place the full citation in a title attribute.
    - If I need to do something with the images stylistically, do it with CSS
    - optimize all images prior to use
    - If possible, use Astro's image component 
- Use BEM (Block Element Modifier) whenever possible 
- Very few utility classes 
- Comment where sections of content start/end
- use lists for groups of content (features, benefits, testimonials, etc.)

## CSS/SCSS
- Organization 
    - Page, component, template, frame, and other styling are to be in separate files
    - Leave a descriptive comment at the top of each file that describes what's in the file
- Variables
    - Use CSS variables whenever possible stock from the ChampCSS system
    - If creating something a little bit more complicated, scope variables locally 
    - don'don't use pre-determined breakpoints  
- Colour
    - If creating a transparency, create it with color-mix()
    - If creating colour varants, create it with color-mix()
    - Current colour mode -- HSL (soon to be converted to OKLCH)
- Use container queries/:has(>&) for anything that can be stuffed into a different area of a webpage
- Use a mobile-first styling approach for most things 
- Make use of utility mixins whenever possible 
- Don't try to be "modern", but keep code up to date with CSS standards (baseline: 90% on caniuse)
- CSS Grid for structural layouts, Flexbox for alignment 
- Use a gap-first workflow
- Make use of logical properties (width = inline-size, height = block size)
- REM is the default unit
- Nesting 
    - 1 level deep
    - nest pseudo elements 
    - nest focus/hover styles 
    - comments are especially important in nesting (end braces)
    - :has(>&) is a useful tool!

## Components 
- Build new components if a set of HTML elements are repeated
- Start simple, and build complexity as I need it 
- If creating a shareable component, create a folder with all the files related to logic, content, and styles 
- If I need subcomponents, create a new folder. Than, the main component becomes the index
- Name component files/folders lowercase and kabob case
