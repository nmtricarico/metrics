export default async function({data, q, imports, account}, {enabled = false, extras = false} = {}) {
  try {
    if ((!q.roadmap) || (!imports.metadata.plugins.roadmap.enabled(enabled, {extras})))
      return null

    let {
      title,
      main,
      left_title: leftTitle,
      left,
      right_title: rightTitle,
      right,
      merge,
      final,
      palette,
    } = imports.metadata.plugins.roadmap.inputs({data, account, q})

    const normalize = value => (Array.isArray(value) ? value.map(item => `${item}`.trim()).filter(Boolean) : [])

    title = `${title ?? ""}`.trim() || "Product roadmap"
    leftTitle = `${leftTitle ?? ""}`.trim()
    rightTitle = `${rightTitle ?? ""}`.trim()
    merge = `${merge ?? ""}`.trim()

    main = normalize(main)
    left = normalize(left)
    right = normalize(right)
    final = normalize(final)

    if (main.length < 3)
      throw {error: {message: "At least 3 main stops are required"}}
    if (left.length < 1)
      throw {error: {message: "Upper branch needs at least 1 stop"}}
    if (right.length < 1)
      throw {error: {message: "Lower branch needs at least 1 stop"}}
    if (final.length < 2)
      throw {error: {message: "Final stage requires at least 2 stops"}}

    const palettes = {
      modern: {main: "#2563eb", left: "#f97316", right: "#10b981", final: "#7c3aed"},
      sunrise: {main: "#f59e0b", left: "#f973ab", right: "#8b5cf6", final: "#14b8a6"},
      ocean: {main: "#0ea5e9", left: "#22d3ee", right: "#6366f1", final: "#34d399"},
      monochrome: {main: "#475569", left: "#475569", right: "#475569", final: "#475569"},
    }

    const selectedPalette = palettes[palette] ?? palettes.modern

    return {
      title,
      main,
      branches: {
        left: {title: leftTitle, stops: left},
        right: {title: rightTitle, stops: right},
      },
      final,
      merge,
      palette: selectedPalette,
    }
  }
  catch (error) {
    throw imports.format.error(error)
  }
}
