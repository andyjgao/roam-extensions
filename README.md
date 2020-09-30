# Roam Extensions by andyga0:

The following are a list of extensions to extend functionality inside of Roam. The code is open-sourced. Feel free to change, modify, update as you wish.

To run any of the RoamJS extensions, you must first do the following:

1. Type `{{[[roam/js]]}}` on a page in which you want to store your javascript code.
2. Once a Dialog appears, press "yes, I know what I'm doing"
3. Create a new code block nested under `{{[[roam/js]]}}` by typing ` ``` ` and switch to javascript.

## Current Extensions:
**[ResizePages](#ResizePages) for Zenith Theme**:  Resize pages inside Roam





### ResizePages
**Use Case:** To resize pages inside Roam (for Zenith theme)

**Installation:**

1. Add the `--page-side-width` and `--page-width` variables inside root selector under `[[roam/css]]` Zenith theme 
For example: 
```css
:root {	
    --page-width: 800px; /* insert this to set main page width*/
    --page-side-width: 648px; /* insert this to set  side page width*/
    --page-order: row-reverse; 
    --header-font: "Source Sans Pro", "Inter", sans-serif;	
    --body-font: "Source Sans Pro", "Inter", sans-serif;	
    
    --bg-color: #EEEEEE;	
    --page-color: rgba(255, 255, 255, 1);	
    	
    --text-color: #000000;	
    --icon-color: #5c7080;
    --highlight-color: #FFEB3B;
  	--bullet-color: rgba(0, 0, 0, 0.2);	
    	
    --page-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);	
    	
  	--color-primary: 104, 116, 232;
    --color-primary-contrast: #FFFFFF;	
  	--color-secondary: 57, 39, 89;

    --color-secondary-contrast: #FFFFFF;	
}

```
2. Add tge following code under a`[[roam/css]]`code block and make sure to select `css`.
```css
.sidebar-content > *:not(.rm-dnd-separator) > div:not(.rm-dnd-separator) > div:first-child:not(:last-child) {
    min-width: var(--page-side-width);
}
.sidebar-content > *:not(.rm-dnd-separator) > div:not(.rm-dnd-separator) > div:last-child:not(:first-child) {
    width: var(--page-side-width);
}

```
2. Nest the following code under a  `{{[[roam/js]]}}` codeblock:
```js
var s = document.createElement('script')
s.type = "text/javascript"
s.src =  "https://andyjgao.github.io/roam-extensions/resizePage.js"
s.async = true
document.getElementsByTagName('head')[0].appendChild(s)
```
