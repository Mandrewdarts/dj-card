# Card Web Component

## Usage

**HTML**

```html
<dj-card>
  <h1 slot="title">Card Title</h1>
  <p slot="content">This is some card content.</p>
  <div slot="actions">
    <button>View</button>
    <a href="...">Link</a>
  </div>
</dj-card>
```

**CSS parts**

```css
dj-card::part(title) {
  /* styles */
}

dj-card::part(content) {
  /* styles */
}

dj-card::part(actions) {
  /* styles */
}
```

## Sections

1. Custom Elements
2. Shadow DOM
3. Slots
4. CSS Parts
5. Constructable Stylesheets
6. Import assertions
