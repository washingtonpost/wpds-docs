--- 
title: Button
sidebar_position: 4
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";
import Checklist from "../../../documentation-kit/checklist";

import { ArrowLeft16 } from "@washingtonpost/site-components/core/icon/arrow-left/16";
import { ArrowRight16 } from "@washingtonpost/site-components/core/icon/arrow-right/16";

# Buttons

<!-- Description of component -->
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue condimentum auctor. Proin viverra, velit mollis commodo semper, nisi nibh placerat nisl, ut blandit erat arcu ac metus. Pellentesque ac dapibus massa, in consequat elit. Praesent mattis risus ipsum, ac suscipit enim bibendum sed. Donec mattis odio sed ultrices tempus. 


<!-- Live Example of component import live component above-->
import { Button } from "@washingtonpost/site-components/core/button";
import { Input } from "@washingtonpost/site-components/core/input";

<Container className="flex-wrap pa-xxs">
  <Button className="mr-sm"  color="white" >
    Button White
  </Button>
  <Button  color="offblack" >
    Button Offblack
  </Button>
  <Button className="ml-sm"  color="subs-blue" >
    Button Subs blue
  </Button>
</Container>


<!-- Tabs between design & implementation change path if -->
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/button"/>

<!-- Anatomy section export image from Figma and import into here -->
## Anatomy
<Container>
  <img width="80%" style={{maxWidth:'250px'}} height="auto" src='/img/design/button/skeleton.png'/>
</Container>


#### Legend

1. Button text 
2. Button theme 
3. Icon


***
## Options

<!-- Icon placement option -->
<Grid>
  <Container className="flex-column">
    <Button renderIcon={ArrowLeft16} color="white" iconPlacement="left">
    Icon can be left
    </Button>
    <Button renderIcon={ArrowRight16} color="white" iconPlacement="right">
    Icon can be right
    </Button>
  </Container>
<div>

##### Icon
Icon can be used on either left or right to the button text.
  
</div>
</Grid>

<!-- Button color options -->
<Grid>
  <Container className="flex-column">
    <Button className="mr-sm" color="white">
    White button
    </Button>
    <Button className="mr-sm" color="offblack">
    Offblack button
    </Button>
    <Button className="mr-sm" color="subs-blue">
    Subs blue
    </Button>
  </Container>
<div>

##### Color Themes
Button have various themes that can be used. Each theme have hover, active, and focus states predefined. The most common themes used are Offblack, White, and Subs-Blue
<br/>

Note: to see all color themes please see our [color tokens](../../tokens/our-tokens/color)

</div>
</Grid>


<!-- Button Size options -->
<Grid>
  <Container className="flex-column">
    <Button secondLine="w/ Second line" size="large" className="mr-sm" color="subs-blue">
    Large Button
    </Button>
    <Button  className="mr-sm" color="subs-blue">
    Medium button
    </Button>
    <Button size="small" className="mr-sm" color="subs-blue">
    Small Button
    </Button>
  </Container>
<div>

##### Button Sizes
Button has three sizes `large`, `medium `and `small`.
<br/>

Note: Large button should only be used on subscription pages or when there two lines of text 

</div>
</Grid>

<!-- Button Fullwidth -->
<Grid>
  <Container className="flex-column">
  <div style={{width:'250px'}} className="annotation-border">
      <Button className="" color="subs-blue">
    Size defined by text
    </Button>
  </div>
    <div style={{width:'250px'}} className="annotation-border">
      <Button fullWidth={true} className="" color="subs-blue">
    Size defined by container
    </Button>
  </div>
  </Container>
<div>

##### Full Width
By default the button size is always defined by the text length and the internal padding, but when `fullWidth` toggled to true the size of the button is defined by the size of its container.
<br/>

Note: Full width is typically used on mobile or where alignment of stacking buttons width is needed. 

</div>
</Grid>

<!-- Button Logos -->
import { OlympicsDarkLogo } from "@washingtonpost/site-components/core/logo/olympics-dark"
import { OlympicsLogo } from "@washingtonpost/site-components/core/logo/olympics"
import { ElectionsLogo } from "@washingtonpost/site-components/core/logo/elections"

<Grid>
  <Container className="flex-column">
    <Button renderLogo={OlympicsDarkLogo} className="" color="offblack">
      Olympics
    </Button>  
    <Button renderLogo={OlympicsLogo}  className="" color="white">
      Olympics
    </Button>
    <Button renderLogo={ElectionsLogo}  className="" color="white">
      Election
    </Button>
  </Container>
<div>

##### Logos
Logos are available to be used instead of icons and only be used in the context of the branding of that logo
 

</div>
</Grid>

***
## Behaviors
<!-- Button color options -->
<Grid>
  <Container Caption="Hover to see hover state" className="flex-column">
    <Button className="mr-sm" color="white">
    White button
    </Button>
    <Button className="mr-sm" color="offblack">
    Offblack button
    </Button>
    <Button className="mr-sm" color="subs-blue">
    Subs blue
    </Button>
  </Container>
<div>

##### Hover
Button is consistent with our color themes.
<br/>

Note: to see all color themes please see our [color tokens](../../tokens/our-tokens/color)

</div>
</Grid>

<!-- Button color options -->
<Grid>
  <Container Caption="Click/Tap to see active state"  className="flex-column">
    <Button className="mr-sm" color="white">
    White button
    </Button>
    <Button className="mr-sm" color="offblack">
    Offblack button
    </Button>
    <Button className="mr-sm" color="subs-blue">
    Subs blue
    </Button>
  </Container>
<div>

##### Active
Button is consistent with our color themes
<br/>

Note: to see all color themes please see our [color tokens](../../tokens/our-tokens/color)

</div>
</Grid>

<!-- Button color options -->
<Grid>
  <Container className="flex-column">
    <Button className="mr-sm" color="disabled">
    White button
    </Button>
    <Button className="mr-sm" color="disabled">
    Offblack button
    </Button>
    <Button className="mr-sm" color="disabled">
    Subs blue
    </Button>
  </Container>
<div>

##### Disabled
All buttons share the same disabled state.

</div>
</Grid>

<!-- GUIDANCE -->
***
## Usage guidelines

<!-- Start of a guide -->
<Guide guidance="don't">
    <Button secondLine="newsletter" size="large" className="mb-sm mr-sm" color="subs-blue">
    Sign up for our
    </Button>
</Guide>

#### Avoid multiple lines for same sentence
Multiline button support is reserved for subscription focus CTA, but never should the multiline be the continuation of the same sentence. 
<br/>

<!-- Start of a guide -->
<Guide guidance="don't" className="flex-column">
    <Button className="mb-sm mr-sm" color="offblack">
    A really long button
    </Button>
    <Button className="mb-sm mr-sm" color="offblack">
    A short button
    </Button>
</Guide>

#### Do not stack buttons of different widths. 
Buttons should take on the fullwidth of the longest button to avoid weird stacking widths.
<br/>

<!-- Start of a guide -->
<Guide guidance="do">
<img src="/img/design/button/input-pair.svg" width="auto" height="60%"/>
</Guide>

#### Pair the appropriate sized button 
Always pair the small button when pairing with a smaller ui element that is inline.
<br/>

<!-- Start of a guide -->
<Guide guidance="do">
 <Button className="mr-sm ml-sm" color="white" fullWidth={true}>Sign Up</Button>
</Guide>

#### Pair the appropriate sized button 
Always pair the small button when pairing with a smaller ui element that is inline.
<br/>

<!-- Start of a guide -->
<Guide guidance="do">
  <div className="flex flex-column mr-sm">
    <Button className="mb-xs" color="offblack">Button Text</Button>
    <Button className="" color="white">Button Text</Button>
  </div> 
  <div className="flex flex-column ">
    <Button className="mb-xs" size="small" color="offblack">Button Text</Button>
    <Button size="small" color="white">Button Text</Button>
  </div> 
</Guide>

#### Stacking Buttons 
When stacking buttons use `4px (-xs)` spacing for both medium and small. 
<br/>

***
## Specs

<Grid>
<Container Caption="Measured in pixels" className="pl-sm pr-sm flex-column">
<img className="mb-sm" width="100%" height="auto" src="/img/design/button/spec-default.svg"/>

</Container>

<div>

##### Size Default
Button width is dependent on either the fixed padding with the button text or if the button is set to the `fullWidth` of the contianer 
</div>
</Grid>

<Grid>
<Container Caption="Measured in pixels" className="pl-sm pr-sm flex-column">
<img className="mb-sm" width="100%" height="auto" src="/img/design/button/spec-small.svg"/>

</Container>

<div>

##### Size Small
Button width is dependent on either the fixed padding with the button text or if the button is set to the `fullWidth` of the contianer 
</div>
</Grid>


***
## Component Checklist

<Checklist
accessiblity={true} 
states={true}
specs={true} 
themes={true}
options={true}
behavior={true}
uiComponent={true}
screenSize={true}
homePage={true}
apps={true}
keyboard={true}
tokens={true}
webVitals={true}
/>



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NTkxMjIwMjhdfQ==
-->