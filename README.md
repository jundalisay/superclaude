# Superphysics — Hugo Website

A multilingual science website built with Hugo and Tailwind CSS 4.2.1.

8pm to 2am is peak time
3am to 7pm is lean time ok

{{- $hasImage := and .Params.image (not .Params.icon) -}}


npx @tailwindcss/cli -i ./assets/css/main.css -o ./static/css/styles.css --watch

BUN_VERSION 1.3.3
HUGO_VERSION 0.145.0

"dev:hugo": "hugo server --buildDrafts --disableFastRender",    

Get 2x more usage on weekends and outside the hours of 5–11am PT / 12–6pm GMT on weekdays. Now through March 28.



aether media = amed
aether particles (monad) = apars
time media = timed
aetherspace media = asmed
space media = spamed
space particles = spapars
light media = limed
light particles = lipar
magnetic media = magmed
crude light particle = clipar
material media = matmed
matter particles = matpars

A New Science Based on Waves, Socratic Dialectics, and Cartesian Physics for Solving Problems.


<div class="card-reveal" style="animation-delay: {{ mul (mod $i 8) 10 }}ms">
        {{ partial "card.html" $page }}
      </div>

git remote add origin https://github.com/username/your-repo.git

      
## Tech Stack

- **Hugo** (static site generator)
- **Tailwind CSS 4.2.1** (via CDN for development, CLI for production)
- **Fonts**: Space Grotesk (display), Crimson Pro (body), Fira Code (monospace)
- **i18n**: 6 languages — English, 中文, Français, Español, العربية, हिन्दी

## Setup

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) v0.120+
- Node.js 18+ (for Tailwind production builds)

### Install & Run

```bash
# Clone / download this project
cd superphysics

# Development (uses Tailwind CDN automatically)
hugo server --buildDrafts

# Production build
npm install
npm run build:css   # Builds optimized Tailwind CSS
hugo --minify
```

## Project Structure

```
superphysics/
├── hugo.toml              # Main config (baseURL, languages, params)
├── i18n/                  # Translation files (en, zh, fr, es, ar, hi)
├── layouts/
│   ├── _default/
│   │   ├── baseof.html    # Base template
│   │   ├── list.html      # Section/list pages
│   │   └── single.html    # Article pages
│   ├── index.html         # Homepage
│   └── partials/
│       ├── head.html      # <head> with meta, fonts, Tailwind
│       ├── navbar.html    # Navigation with dark mode, search, lang
│       ├── footer.html    # Site footer
│       ├── card.html      # Article card (3 types)
│       └── comments.html  # Basin.com comment form
├── assets/css/main.css    # Tailwind 4 input (for CLI builds)
├── static/
│   ├── css/custom.css     # Non-Tailwind overrides
│   ├── js/main.js         # Dark mode, search, animations, scroll
│   └── icons/             # Avatar images (e.g. "Heritage Foundation.jpg")
└── content/
    ├── en/                # English content (default)
    ├── zh/                # Chinese content
    ├── fr/                # French content
    ├── es/                # Spanish content
    ├── ar/                # Arabic content (RTL)
    └── hi/                # Hindi content
```

## Content Sections

Each folder is a nav submenu:
`research`, `superphysics`, `supermath`, `superlogic`, `material`, `bio`, `society`, `economics`, `cycles`, `spiritual`, `news`, `about`, `help`, `faqs`, `tags`

## Article Front Matter

```yaml
---
title: "Bureau Of Industry And Security"
date: 2024-11-01
description: "Article description shown in cards and meta"
image: /img/photo.jpg       # → image card type
v: /videos/clip.mp4         # → hero video on article page
c: "firebrick"              # → card background/accent color (CSS color or hex)
icon: "Heritage Foundation" # → avatar (loads /icons/Heritage Foundation.jpg)
heading: "Chapter 21e"      # → small label above title
weight: 12                  # → sort order in section
showdate: true              # → show date on avatar/plain cards
tags: ["policy", "science"]
---
```

### Card Types (auto-selected)

| Front Matter         | Card Type   | Appearance                                        |
|---------------------|-------------|---------------------------------------------------|
| `image:` is set     | Image card  | Full image background, title overlaid at bottom   |
| `icon:` is set      | Avatar card | Background color, avatar + title centered         |
| Neither             | Plain card  | Background color, heading + title centered        |

## Icons / Avatars

Place avatar images in `/static/icons/` as `{icon name}.jpg`\
Example: `icon: "Heritage Foundation"` → `/static/icons/Heritage Foundation.jpg`

If the image is missing, a colored circle with the first letter is shown.

## Dark / Light Mode

- Automatically detects system preference
- Persisted in `localStorage` as `sp-theme`
- Toggle button in navbar

## Search

- Searches article `title` and `description` fields
- Index generated as `/index.json` at build time
- Triggered by search button or `Ctrl/Cmd + K`

## Comments

Comments post to [usebasin.com](https://usebasin.com) via AJAX (no page reload).\
Configure the form endpoint in `hugo.toml`:
```toml
[params]
  commentAction = "https://usebasin.com/f/YOUR_FORM_ID"
```

## i18n

All UI strings are in `i18n/{lang}.yaml`. Hugo automatically loads the correct file based on the current language. To add content in a language, create matching files under `content/{lang}/`.

## RTL Support

Arabic (`ar`) has `languageDirection = "rtl"` set in hugo.toml. The `<html dir="rtl">` attribute is added automatically by the base template.

## Deployment

Built files go to `public/`. Deploy to any static host:
- Netlify: `hugo --minify` build command, `public` publish dir
- Vercel: Hugo framework preset
- GitHub Pages: use Hugo GitHub Action


<style type="text/tailwindcss">




{{< a n="Silicon" e="14" w="28.085" m="1414°C" b="3265°C" >}}
{{< a n="Phosphorus" e="15" w="30.974" m="44.15°C" b="280.5°C" >}}


{{< a n="Potassium" e="19" w="39.098" m="63.5°C" b="759°C" >}}
{{< a n="Calcium" e="20" w="40.078" m="842°C" b="1484°C" >}}
{{< a n="Scandium" e="21" w="44.956" m="1541°C" b="2836°C" >}}
{{< a n="Titanium" e="22" w="47.867" m="1668°C" b="3287°C" >}}
{{< a n="Vanadium" e="23" w="50.942" m="1910°C" b="3407°C" >}}
{{< a n="Chromium" e="24" w="51.996" m="1907°C" b="2671°C" >}}
{{< a n="Manganese" e="25" w="54.938" m="1246°C" b="2061°C" >}}
{{< a n="Iron" e="26" w="55.845" m="1538°C" b="2861°C" >}}
{{< a n="Cobalt" e="27" w="58.933" m="1495°C" b="2927°C" >}}
{{< a n="Nickel" e="28" w="58.693" m="1455°C" b="2913°C" >}}
{{< a n="Copper" e="29" w="63.546" m="1084.62°C" b="2562°C" >}}
{{< a n="Zinc" e="30" w="65.38" m="419.53°C" b="907°C" >}}
{{< a n="Gallium" e="31" w="69.723" m="29.76°C" b="2204°C" >}}
{{< a n="Germanium" e="32" w="72.630" m="938.25°C" b="2833°C" >}}
{{< a n="Arsenic" e="33" w="74.922" m="817°C" b="614°C" >}}
{{< a n="Selenium" e="34" w="78.971" m="221°C" b="685°C" >}}
{{< a n="Bromine" e="35" w="79.904" m="-7.2°C" b="58.8°C" >}}
{{< a n="Krypton" e="36" w="83.798" m="-157.36°C" b="-153.22°C" >}}
{{< a n="Rubidium" e="37" w="85.468" m="39.31°C" b="688°C" >}}
{{< a n="Strontium" e="38" w="87.62" m="777°C" b="1382°C" >}}
{{< a n="Yttrium" e="39" w="88.906" m="1526°C" b="3336°C" >}}
{{< a n="Zirconium" e="40" w="91.224" m="1855°C" b="4409°C" >}}
{{< a n="Niobium" e="41" w="92.906" m="2477°C" b="4744°C" >}}
{{< a n="Molybdenum" e="42" w="95.95" m="2623°C" b="4639°C" >}}
{{< a n="Technetium" e="43" w="98" m="2157°C" b="4265°C" >}}
{{< a n="Ruthenium" e="44" w="101.07" m="2334°C" b="4150°C" >}}
{{< a n="Rhodium" e="45" w="102.91" m="1964°C" b="3695°C" >}}
{{< a n="Palladium" e="46" w="106.42" m="1554.9°C" b="2963°C" >}}
{{< a n="Silver" e="47" w="107.87" m="961.78°C" b="2162°C" >}}
{{< a n="Cadmium" e="48" w="112.41" m="321.07°C" b="767°C" >}}
{{< a n="Indium" e="49" w="114.82" m="156.60°C" b="2072°C" >}}
{{< a n="Tin" e="50" w="118.71" m="231.93°C" b="2602°C" >}}
{{< a n="Antimony" e="51" w="121.76" m="630.63°C" b="1587°C" >}}



{{< a n="Cesium" e="55" w="132.91" m="28.44°C" b="671°C" >}}
{{< a n="Barium" e="56" w="137.33" m="727°C" b="1897°C" >}}
{{< a n="Lanthanum" e="57" w="138.91" m="920°C" b="3464°C" >}}
{{< a n="Cerium" e="58" w="140.12" m="795°C" b="3443°C" >}}
{{< a n="Praseodymium" e="59" w="140.91" m="935°C" b="3520°C" >}}
{{< a n="Neodymium" e="60" w="144.24" m="1024°C" b="3074°C" >}}
{{< a n="Promethium" e="61" w="145" m="1042°C" b="3000°C" >}}
{{< a n="Samarium" e="62" w="150.36" m="1072°C" b="1794°C" >}}
{{< a n="Europium" e="63" w="151.96" m="822°C" b="1529°C" >}}
{{< a n="Gadolinium" e="64" w="157.25" m="1312°C" b="3273°C" >}}
{{< a n="Terbium" e="65" w="158.93" m="1356°C" b="3230°C" >}}
{{< a n="Dysprosium" e="66" w="162.50" m="1407°C" b="2562°C" >}}
{{< a n="Holmium" e="67" w="164.93" m="1461°C" b="2720°C" >}}
{{< a n="Erbium" e="68" w="167.26" m="1529°C" b="2868°C" >}}
{{< a n="Thulium" e="69" w="168.93" m="1545°C" b="1950°C" >}}
{{< a n="Ytterbium" e="70" w="173.05" m="819°C" b="1196°C" >}}
{{< a n="Lutetium" e="71" w="174.97" m="1663°C" b="3402°C" >}}
{{< a n="Hafnium" e="72" w="178.49" m="2233°C" b="4603°C" >}}
{{< a n="Tantalum" e="73" w="180.95" m="3017°C" b="5458°C" >}}
{{< a n="Tungsten" e="74" w="183.84" m="3422°C" b="5555°C" >}}
{{< a n="Rhenium" e="75" w="186.21" m="3186°C" b="5596°C" >}}
{{< a n="Osmium" e="76" w="190.23" m="3033°C" b="5012°C" >}}
{{< a n="Iridium" e="77" w="192.22" m="2466°C" b="4428°C" >}}
{{< a n="Platinum" e="78" w="195.08" m="1768.3°C" b="3825°C" >}}
{{< a n="Gold" e="79" w="196.97" m="1064.18°C" b="2970°C" >}}
{{< a n="Mercury" e="80" w="200.59" m="-38.83°C" b="356.73°C" >}}
{{< a n="Thallium" e="81" w="204.38" m="304°C" b="1473°C" >}}
{{< a n="Lead" e="82" w="207.2" m="327.46°C" b="1749°C" >}}
{{< a n="Bismuth" e="83" w="208.98" m="271.40°C" b="1564°C" >}}
{{< a n="Polonium" e="84" w="209" m="254°C" b="962°C" >}}


{{< a n="Francium" e="87" w="223" m="27°C" b="677°C" >}}
{{< a n="Radium" e="88" w="226" m="700°C" b="1737°C" >}}
{{< a n="Actinium" e="89" w="227" m="1050°C" b="3200°C" >}}
{{< a n="Thorium" e="90" w="232.04" m="1750°C" b="4788°C" >}}
{{< a n="Protactinium" e="91" w="231.04" m="1572°C" b="4000°C" >}}
{{< a n="Uranium" e="92" w="238.03" m="1132°C" b="4131°C" >}}
{{< a n="Neptunium" e="93" w="237" m="644°C" b="3902°C" >}}
{{< a n="Plutonium" e="94" w="244" m="640°C" b="3228°C" >}}
{{< a n="Americium" e="95" w="243" m="1176°C" b="2011°C" >}}
{{< a n="Curium" e="96" w="247" m="1345°C" b="3110°C" >}}
{{< a n="Berkelium" e="97" w="247" m="986°C" b="2627°C" >}}
{{< a n="Californium" e="98" w="251" m="900°C" b="1470°C" >}}
{{< a n="Einsteinium" e="99" w="252" m="860°C" b="996°C" >}}
{{< a n="Fermium" e="100" w="257" m="1527°C" b="--" >}}
{{< a n="Mendelevium" e="101" w="258" m="827°C" b="--" >}}
{{< a n="Nobelium" e="102" w="259" m="827°C" b="--" >}}
{{< a n="Lawrencium" e="103" w="262" m="1627°C" b="--" >}}
{{< a n="Rutherfordium" e="104" w="267" m="2100°C" b="5500°C" >}}
{{< a n="Dubnium" e="105" w="268" m="--" b="--" >}}
{{< a n="Seaborgium" e="106" w="269" m="--" b="--" >}}
{{< a n="Bohrium" e="107" w="270" m="--" b="--" >}}
{{< a n="Hassium" e="108" w="269" m="--" b="--" >}}
{{< a n="Meitnerium" e="109" w="278" m="--" b="--" >}}
{{< a n="Darmstadtium" e="110" w="281" m="--" b="--" >}}
{{< a n="Roentgenium" e="111" w="282" m="--" b="--" >}}
{{< a n="Copernicium" e="112" w="285" m="--" b="357°C" >}}
{{< a n="Nihonium" e="113" w="286" m="--" b="--" >}}
{{< a n="Flerovium" e="114" w="289" m="--" b="--" >}}
{{< a n="Moscovium" e="115" w="289" m="--" b="--" >}}
{{< a n="Livermorium" e="116" w="293" m="--" b="--" >}}
{{< a n="Tennessine" e="117" w="294" m="--" b="--" >}}
{{< a n="Oganesson" e="118" w="294" m="--" b="--" >}}




## Law 2: Exchangeable Value goes from areas with high value to areas with low value in order to spread and remove the lack in society


<b>F = (V<sub>↑</sub> - V<sub>↓</sub>) / E</b>

<ul>
<li><b>F</b>: Flow or Force (such as the force of capital)</li>
<li><b>V<sub>↑</sub></b>: high value perception</li>
<li><b>V<sub>↓</sub></b>: low value perception</li>
<li><b>E</b>: effort (toil and trouble)</li>
</ul>

<p>Economic activity or flow is biggest when there is a difference between value-perceptions, and Effort is minimal. We call this difference as "primary arbitrage".</p>

<p>Economic flow is lowest when there is no difference between value-perceptions, and Effort is high. Effort is naturally lowest if it matches the dharma or purpose of the entity making the effort.</p> 



## Law 3: There must be a balance in the creation and spread of value in an economy.

<b>P = V<sub>l1</sub> + V<sub>l2</sub> + V<sub>l4</sub></b>

<ul>
<li><b>P</b>: Consolidated Price</li>
<li><b>V<sub>l1</sub></b>: Nominal Price (Exchangeable Value from Law 1)</li>
<li><b>V<sub>l2</sub></b>: Real Price (Exchangeable Value from Law 2)</li>
<li><b>V<sub>l4</sub></b>: Market Price (Exchangeable Value from Law 4)</li>
</ul>


<b>V<sub>l3,t</sub> = V<sub>l<em>i</em>,t</sub> / P</b>

<ul>
<li><b>V<sub>l3</sub></b>: Natural Price over time (Exchangeable Value from Law 3)</li>
<li><b>V<sub>l<em>i</em>,t</sub></b>: Nominal, Real, and Market Price over time</li>
</ul>


<p>This shows the natural price, which results from the balance of the demand, supply, and the logistics that connects supply with demand.</p> 

<p>For example, the table below shows the economy growing by 1 unit each year. But it exposes an imbalance favoring market price at year 3. Thus, even if the consolidated price shows growth, the third law exposes market price as being unnatural -- it overfeeds the merchant class and starves the working class.</p>

<table>
  <thead>
  <tr>
    <th>Year</th>
    <th>Total Value of Economy</th>
    <th>Nominal</th>
    <th>Real</th>
    <th>Market</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>1</td>
    <td>10</td>
    <td>3</td>
    <td>4</td>
    <td>3</td>
  </tr>
  <tr>
    <td>2</td>
    <td>11</td>
    <td>3</td>
    <td>4</td>
    <td>4</td>
  </tr>
  <tr>
    <td>3</td>
    <td>12</td>
    <td>2</td>
    <td>3</td>
    <td>7</td>
  </tr>
  </tbody>
</table>



## Law 4: Value is transferred through fair exchange whether it be through money, barter, points, promises, etc.


<b>V<sub>l4,<i>t</i></sub> = k • P<sub><i>t</i></sub></b>

<ul>
<li><b>V<sub>l4,<i>t</i></sub></b>: Market Price as the actual value exchanged (markup, fee, or payment) at time <i>t</i> (Exchangeable Value from Law 4)</li>
<li><b>k</b> (The Fair Exchange Coefficient): The agreed-upon "Markup" or "Service Fee" ratio. Unlike interest, k is a percentage of actual output, not a fixed percentage of a past debt. We call this "secondary arbitrage."</li>
<li><b>P<sub><i>t</i></sub></b>: Consolidated Price as the total value of the economy or the individual's productivity at time <i>t</i> which includes Value from Law 1 and 2</li>
</ul>
