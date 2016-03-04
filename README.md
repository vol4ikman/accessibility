# Accessibility 0.1
### More examples and documents [<a href="http://vol4ikman.github.io/accessibility/" title="Examples" target="_blank">HERE</a>]

Content anchors:
<ul>
	<li><a href="#user-content-documents">Documents</a></li>
	<li><a href="#user-content-basic-aria-page-markup">Basic ARIA Page Markup</a></li>
	<li><a href="#user-content-basic-aria-tab-interface">Basic ARIA TAB Markup</a></li>
	<li><a href="#user-content-basic-label--input-markup">Basic label & input markup</a></li>
	<li><a href="#user-content-accessible-input-tooltips-with-no-javascript">Input tooltips with no javascript</a></li>
	<li><a href="#user-content-accordion-based-on-foundation-6">Accordion based on Foundation 6</a></li>
	<li><a href="#user-content-search-form">Search Form</a></li>
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
<br/>
<table class="data">
<caption>New HTML 5 elements and  corresponding ARIA roles</caption>
  <tbody><tr>
    <th scope="col">HTML 5</th>
    <th scope="col">ARIA Role</th>
  </tr>
  <tr>
    <td><code>&lt;header&gt;</code></td>
    <td><code>role="banner"</code></td>
  </tr>
  <tr>
    <td><code>&lt;nav&gt;</code></td>
    <td><code>role="navigation"</code></td>
  </tr>
  <tr>
    <td><code>&lt;main&gt;</code></td>
    <td><code>role="main"</code></td>
  </tr>
  <tr>
    <td><code>&lt;footer&gt;</code></td>
    <td><code>role="contentinfo"</code></td>
  </tr>
  <tr>
    <td><code>&lt;aside&gt;</code></td>
    <td><code>role="complementary"</code></td>
  </tr>
  <tr>
    <td><code>&lt;section&gt;</code></td>
    <td><code>role="region"</code> *</td>
  </tr>
  <tr>
    <td><code>&lt;article&gt;</code></td>
    <td><code>role="article"</code> *</td>
  </tr>
  <tr>
    <td><code>none</code></td>
    <td><code>role="search"</code></td>
  </tr>
  <tr>
    <td><code>&lt;form&gt;</code></td>
    <td><code>role="form"</code></td>
  </tr>
</tbody></table>
---
###Basic ARIA page markup:
```html
<header class="header" role="banner">
	<div class="logo">
		<a href="/" title="site title"><img src="#" type="logo" alt="site logo" /></a>
	</div>
	<nav role="navigation" aria-label="Main menu">
	 <ul>
	    <li>Put navigation here</li>
	 </ul>
	</nav>  
</header>

<main class="main_container" role="main">

  <section class="section" role="region" id="section-1">
    <article class="article" role="article"></article>
    <article class="article" role="article"></article>
    <article class="article" role="article"></article>
  </section>
  
  <section class="section" role="region" id="section-2">
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
---
###Basic ARIA tab interface
```html
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
```
---

###Basic label & input markup
```html
<label for="name">Name:</label>
<input id="name" type="text" name="textfield">
```

###Accessible input tooltips with no javascript
```html
<form action="">
  <fieldset>
    <legend>Login form</legend>
    <div>
      <label for="username">Your username</label>
	    <input type="text" id="username" aria-describedby="username-tip" required />
	    <div role="tooltip" id="username-tip">Your username is your email address</div>
	  </div>
	<div>
	  <label for="password">Your password</label>
	  <input type="text" id="password" aria-describedby="password-tip" required />
	  <div role="tooltip" id="password-tip">Was emailed to you when you signed up</div>
	</div>
  </fieldset>
</form>
```
```css
input:focus + [role="tooltip"] {
	display: block;
	position: absolute;
	top: 100%;
}
```

### Accordion based on Foundation 6
```html
<ul class="accordion" data-accordion role="tablist">
  <li class="accordion-item is-active">
    <!-- The tab title needs role="tab", an href, a unique ID, and aria-controls. -->
    <a href="#panel1d" role="tab" class="accordion-title" id="panel1d-heading" aria-controls="panel1d">Accordion 1</a>
    <!-- The content pane needs an ID that matches the above href, role="tabpanel", data-tab-content, and aria-labelledby. -->
    <div id="panel1d" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel1d-heading">
      Panel 1. Lorem ipsum dolor
    </div>
  </li>
</ul>
```

###Search Form
```html
<form action="…">
  <div role="search">
    <input type="search" aria-label="Search"> <button type="submit">Search</button>
  </div>
</form>
```

---
### Very useful links:

<a href="http://www.w3.org/TR/wai-aria/roles#document_structure_roles" target="_blank">More information about 'role' tags</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank">More information about 'aria-live'</a>

<a href="https://www.paciellogroup.com/resources/contrastanalyser/" target="_blank">Color Contrast Analyser SOFTWARE</a>

<a href="http://webaim.org/resources/contrastchecker/" target="_blank">Color Contrast Checker ONLINE</a>

<a href="http://www.sitepoint.com/how-to-use-aria-effectively-with-html5/">Very useful article about ARIA tags<\a>
---
