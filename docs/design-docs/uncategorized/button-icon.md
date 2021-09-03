--- 
title: Button Icon
sidebar_position: 5
---
import Header from "../../../documentation-kit/docHead";
import Tabs from "../../../documentation-kit/tabs";
import Grid from "../../../documentation-kit/splitGrid";
import Container from "../../../documentation-kit/sampleContainer";
import Guide from "../../../documentation-kit/guide";
import Checklist from "../../../documentation-kit/checklist";


import { ButtonIcon } from "@washingtonpost/site-components/core/button-icon";
import { Button } from "@washingtonpost/site-components/core/button";
import { BookmarkOutline16 } from "@washingtonpost/site-components/core/icon/bookmark-outline/16";
import { BookmarkOutline24 } from "@washingtonpost/site-components/core/icon/bookmark-outline/24";
import { BookmarkOutline32 } from "@washingtonpost/site-components/core/icon/bookmark-outline/32";
import { Play16 } from "@washingtonpost/site-components/core/icon/play/16";
import { Add24 } from "@washingtonpost/site-components/core/icon/add/24";
import { ExternalLink16 } from "@washingtonpost/site-components/core/icon/external-link/16";


# Button Icon

<!-- Description of component -->
<p className="font-xs font-light font--subhead">
A button icon is a circular button that contains only an icon. The interaction with a button icon is defined by its icon and its surrounding context, not within button text. The color system for a button icon is the same as the button component with a few exceptions. 
</p>


<!-- Live Example of component import live component above-->

<Container Caption="example of button icons">
<ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  renderIcon={BookmarkOutline16}
/>
<ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-xxs"
  color="offblack"
  renderIcon={Play16}
/>
</Container>


<!-- Tabs between design & implementation change path if -->
<Tabs isDesignDoc={true} relatedUrl="dev-docs/uncategorized/banner"/>

<!-- Anatomy section export image from Figma and import into here -->
## Anatomy
<Container>
  <img width="60%" style={{maxWidth:'200px'}} height="auto" src='/img/design/button-icon/anatomy.svg'/>
</Container>


#### Legend

1. Border
2. Background fill
3. [Icon](../../tokens/our-tokens/icons)

***
## Options

<Grid>
  <Container>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  renderIcon={BookmarkOutline16}
    />
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="small"
  renderIcon={BookmarkOutline16}
/>
  </Container>
<div>

##### Sizing
Button icons come in two sizes: `small` and `default`.

</div>
</Grid>

<Grid>
  <Container>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline32}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline16}
/>
  </Container>
<div>

##### Icon size
All [icon sizes](../../tokens/our-tokens/icons) supported in the button icon.  
</div>
</Grid>

<Grid>
  <Container>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={false}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
  </Container>
<div>

##### Border
Button borders can be toggled on or off.

</div>
</Grid>

<!-- Colors -->
<Grid>
<Container className="pa-sm flex-wrap">
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="offblack"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="subs-blue"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="ghost-light"
  size="medium"
  renderIcon={Add24}
/>
  <div className="bg-black pa-xxs brad-4">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  color="ghost-dark"
  size="medium"
  renderIcon={Add24}
/></div>

</Container>
<div className="mt-sm mb-xl">

##### Color
Button icons follow the same color schemes as our [buttons](./button). To see all color themes see our [color tokens](../../tokens/our-tokens/color).

</div>
</Grid>
<Grid>
<Container className="pa-sm">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  color="white"
  className="mr-xs"
  size="medium"
  renderIcon={Add24}
/>
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-xs"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
    <ButtonIcon
  ariaLabel="Add to your reading list"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={Play16}
/>
</Container>
<div className="mt-sm mb-xl">

##### Icon
Any icon supported in our [Icon tokens](../../tokens/our-tokens/icons) can be used.

</div>
</Grid>

***
## Behaviors
<!-- Hover & active -->
<Grid>
<Container className="pa-sm flex-wrap">
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="offblack"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="subs-blue"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="ghost-light"
  size="medium"
  renderIcon={Add24}
/>
  <div className="bg-black pa-xxs brad-4">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  color="ghost-dark"
  size="medium"
  renderIcon={Add24}
/></div>

</Container>
<div className="mt-sm mb-xl">

##### Hover Active & Default
Button icons follow the same color theme logic as our as our [buttons](./button).
<br/>

Note: to see all color themes please see our [color tokens](../../tokens/our-tokens/color)

</div>
</Grid>

<!-- Keyboard -->
<Grid>
<Container Caption="Tab your keyboard to see behavior" className="pa-sm flex-wrap">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="offblack"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="subs-blue"
  size="medium"
  renderIcon={Add24}
/>
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="ghost-light"
  size="medium"
  renderIcon={Add24}
/>
  <div className="bg-black pa-xxs brad-4">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  color="ghost-dark"
  size="medium"
  renderIcon={Add24}
/></div>

</Container>
<div className="mt-sm mb-xl">

##### Tab behavior
Button icons can be tab through using the keyboard. 

</div>
</Grid>

***
## Usage guidelines

<!-- Start of a guide -->
<Grid className="mb-0">
<Guide guidance="don't">
    <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline32}
/>
</Guide>
<Guide guidance="do">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={BookmarkOutline24}
/>
</Guide>
</Grid>

#### Avoid pairing large icon in small button icon
While the button icon accepts supported icon sizes large icons do not work with button icons
<br/>

<!-- Start of a guide -->
<Grid className="mb-0">
<Guide guidance="don't">
  <ButtonIcon
  ariaLabel="Plus sign"
  border={true}
  className="mr-sm"
  color="white"
  size="medium"
  renderIcon={ExternalLink16}
/>
</Guide>
<Guide guidance="do">
  <Button 
  renderIcon={ExternalLink16} iconPlacement="right" 
  className="mr-sm"  color="white" >
    External link
  </Button>
</Guide>
</Grid>

#### Ambiguous icons
Do not use icons in buttno icons that leave the user unsure of its action. The button icon should be clear and actionable otherwise a standard [button](./button) should be used.+
<br/>

<!-- Start of a guide -->
<Guide Caption="Image not to scale" guidance="do">
  <img width="30%" src="/img/design/button-icon/example.svg"/>
</Guide>

#### Spacing for a group of button icons
When a group button icons are needed spacing between should use 8px spacing.
<br/>

***
## Specs


  <Container className="flex-column">
     <img width="60%" src="/img/design/button-icon/specs.svg"/>
  </Container>
<div className="mt-sm mb-xl">

##### Size
Size of `small` button icon is 32px to meet the minimal tap target. The `medium` is 40px. Icon is aligned vertically and horizontally center.
</div>


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
