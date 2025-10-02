# 🗺️ Roadmap

Create a compact roadmap diagram to highlight parallel workstreams.

> ℹ️ The rendered result adapts to the labels you provide.

## 🧩 Using this plugin

```yaml
- name: Roadmap sample
  uses: lowlighter/metrics@latest
  with:
    filename: metrics.plugin.roadmap.svg
    token: ${{ secrets.METRICS_TOKEN }}
    base: ''
    plugin_roadmap: yes
    plugin_roadmap_title: 2024 product journey
    plugin_roadmap_main: Discovery, Planning, Development
    plugin_roadmap_left_title: Validation track
    plugin_roadmap_left: Prototype, Pilot launch
    plugin_roadmap_right_title: Fast track
    plugin_roadmap_right: Quick win
    plugin_roadmap_final: Launch preparation, Launch
    plugin_roadmap_palette: modern
```

## ⚙️ Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `plugin_roadmap` | `boolean` | `no` | Enable the roadmap plugin. |
| `plugin_roadmap_title` | `string` | `Product roadmap` | Section title displayed in the card header. |
| `plugin_roadmap_main` | `array` | `Discovery, Planning, Development` | List of the first three milestones before the fork. Provide at least three labels. |
| `plugin_roadmap_left_title` | `string` | `Validation track` | Caption for the upper branch. |
| `plugin_roadmap_left` | `array` | `Prototype, Pilot launch` | Stops displayed along the upper branch. Provide at least one label. |
| `plugin_roadmap_right_title` | `string` | `Fast track` | Caption for the lower branch. |
| `plugin_roadmap_right` | `array` | `Quick win` | Stops displayed along the lower branch. Provide at least one label. |
| `plugin_roadmap_merge` | `string` | `Converge` | Label placed where the two branches meet again. |
| `plugin_roadmap_final` | `array` | `Launch preparation, Launch` | Final milestones after the branches converge. Provide at least two labels. |
| `plugin_roadmap_palette` | `string` | `modern` | Accent palette used for the connectors and nodes. Available values: `modern`, `sunrise`, `ocean`, `monochrome`. |

Each array option expects a comma-separated list when used with action inputs.

## 🎨 Palettes

| Palette | Colors |
|---------|--------|
| `modern` | blue mainline, orange upper branch, green lower branch, purple finale |
| `sunrise` | amber mainline, pink upper branch, violet lower branch, teal finale |
| `ocean` | teal mainline, cyan upper branch, indigo lower branch, seafoam finale |
| `monochrome` | Slate greys for all segments |

## ✅ Requirements

This plugin does not require any special token scopes. It works for users, organizations, and repositories alike.
