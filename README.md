# Accessibility 0.1
### More examples and documents [<a href="http://vol4ikman.github.io/accessibility/" title="Examples" target="_blank">HERE</a>]

Accessibility examples
<ul>
<li>Tab navigation</li>
<li>Roles attributes</li>
<li>Tab index attributes</li>
<li>WAI-ARIA - aria-label tag</li>
</ul>

##Documents

A role or type attribute be added to the IMG element's collection of attributes, which would provide the sort of generic information that the current draft of HTML5 specifies should be contained in curly brackets as the value for alt -- for example:
<ul>
<li>type="logo"</li>
<li>role="layout" or type="layout"</li>
<li>role="link" or type="link"</li>
<li>role="button" or type="button"</li>
</ul>
---
<strong>XHTML role attribute module</strong>
<ul>
<li><strong>banner</strong> - banner contains the prime heading or internal title of a page.</li>
<li><strong>complementary</strong> - secondary indicates that the section supports but is separable from the main content of resource</li>
<li><strong>contentinfo</strong> - contentinfo has meta information about the content on the page or the page as a whole</li>
<li><strong>definition</strong> - definition indicates the definition of a term or concept</li>
<li><strong>main</strong> - main acts as the main content of the document</li>
<li><strong>navigation</strong> - navigation indicates a collection of items suitable for navigating the document or related documents</li>
<li><strong>note</strong> - note indicates the content is parenthetic or ancillary to the main content of the resource</li>
<li><strong>search</strong> - search indicates that the section provides a search facility</li>
<li><strong>presentation</strong> - An element whose implicit native role semantics will not be mapped to the accessibility API.</li>
<li><strong>menubar</strong> - A presentation of menu that usually remains visible and is usually presented horizontally.</li>
</ul>

###Basic ARIA page markup:
```html
<header class="header" role="banner">
  <div class="logo">
    <a href="/" title="site title"><img src="#" type="logo" alt="site logo" /></a>
  </div>
  <nav class="header_navigation" role="navigation">
     <ul>
        <li>Put navigation here</li>
     </ul>
  </nav>  
</header>
<main class="main_container" role="main">
  <section class="section" role="region">
    <article class="article" role="article"></article>
    <article class="article" role="article"></article>
    <article class="article" role="article"></article>
  </section>
</main>
<aside role="complementary">
  <form role="form" class="form"></form>
</aside>
<footer class="footer" role="contentinfo">© Copyright Query Solutions 2016</footer>
```

###Basic ARIA tab interface
<ul role="tablist">
  <li role="presentation">
    <a href="#section1" tabindex="0" role="tab" aria-controls="section1" aria-selected="true">Section 1</a>
  </li>
  <li role="presentation"><a href="#section2" tabindex="-1" role="tab" aria-controls="section2">Section 2</a></li>
  <li role="presentation"><a href="#section3" tabindex="-1" role="tab" aria-controls="section3">Section 3</a></li>
</ul>
<section id="section1" role="tabpanel">...</section>
<section id="section2" role="tabpanel" aria-hidden="true">...</section>
<section id="section3" role="tabpanel" aria-hidden="true">...</section>

---

### Very useful links:

<a href="http://www.w3.org/TR/wai-aria/roles#document_structure_roles" target="_blank">More information about 'role' tags</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank">More information about 'aria-live'</a>

<a href="http://webaim.org/resources/contrastchecker/" target="_blank">Color Contrast Checker</a>


---
